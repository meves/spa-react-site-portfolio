import { followAPI } from "../api/follow-api";
import { usersAPI } from "../api/users-api";
import { UserType } from "../types/types";         
import { ThunkDispatch } from "redux-thunk";
import { InferActionsTypes, AppStateType, CommonThunkType } from "./redux-store";
import { ResultCodes } from "../enums/responseCodes";
import { ResponseDataType } from "../api/types";

export const URL = '/img/avatar_2.png';

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    count: 5,
    totalCount: 0,
    isFetching: true,
    followingProgress: [] as Array<number>
};
export type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>;

export const usersReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "site-portfolio/medvedkinsergey.ru/users/FOLLOW_USER": 
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            };
        case "site-portfolio/medvedkinsergey.ru/users/UNFOLLOW_USER":
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            };
        case "site-portfolio/medvedkinsergey.ru/users/LOAD_USERS":
            return {
                ...state,
                users: action.users
            };    
        case "site-portfolio/medvedkinsergey.ru/users/GET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.totalCount
            };
        case "site-portfolio/medvedkinsergey.ru/users/SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "site-portfolio/medvedkinsergey.ru/users/RESET_USERS":
            return {
                ...state,
                users: action.users
            };
        case "site-portfolio/medvedkinsergey.ru/users/SET_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };    
        case "site-portfolio/medvedkinsergey.ru/users/FOLLOWING_PROGRESS":
            return {
                ...state,
                followingProgress: action.isFetching  
                                ? [...state.followingProgress, action.userId]
                                : state.followingProgress.filter(id => id !== action.userId)
            };
        default: 
            return state;
    }
}

export const actions = {
    followUser: (id: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/FOLLOW_USER', id
    } as const),
    unfollowUser: (id: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/UNFOLLOW_USER', id
    } as const),
    loadUsers: (users: Array<UserType>) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/LOAD_USERS', users
    } as const),
    getTotalCount: (totalCount: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/GET_TOTAL_COUNT', totalCount
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/SET_CURRENT_PAGE', currentPage
    } as const),
    resetUsers: (users: Array<UserType>) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/RESET_USERS', users
    } as const),
    setIsFetching: (isFetching: boolean) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/SET_IS_FETCHING', isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/users/FOLLOWING_PROGRESS', isFetching, userId
    } as const)
}


type ThunkType = CommonThunkType<ActionsTypes>;

export const getUsers = (currentPage: number, count: number): ThunkType => 
    async (dispatch: any) => {
        dispatch(actions.setIsFetching(true));
        /**this request sended once after component was mounted */
        const data = await usersAPI.getUsers(currentPage, count);
        dispatch(actions.setIsFetching(false));
        dispatch(actions.loadUsers(data.items));
        dispatch(actions.getTotalCount(data.totalCount));
    }

export const getCurrentPageUsers = (currentPage: number, count: number): ThunkType => 
    async (dispatch: any) => {
        dispatch(actions.setCurrentPage(currentPage));
        dispatch(actions.setIsFetching(true));
        /**this request sended when user has changed current page */
        const data = await usersAPI.getUsers(currentPage, count);
        dispatch(actions.resetUsers(data.items));
        dispatch(actions.setIsFetching(false));    
    }
    
type DispatchType = ThunkDispatch<AppStateType, unknown, ActionsTypes>;
type MethodApiType = (userId: number) => Promise<ResponseDataType>;
type ActionCreatorsType = ((id: number) => ReturnType<typeof actions.followUser>) 
                        | ((id: number) => ReturnType<typeof actions.unfollowUser>);

const followUnfollow = async (dispatch: DispatchType, userId: number, methodAPI: MethodApiType, actionCreator: ActionCreatorsType)
: Promise<void> => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    const data = await methodAPI(userId); 
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actionCreator(userId)); 
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => 
    async (dispatch) => {
        await followUnfollow(dispatch, userId, followAPI.followUser.bind(followAPI), actions.followUser);
    }

export const unfollow = (userId: number): ThunkType => 
    async (dispatch) => {
        await followUnfollow(dispatch, userId, followAPI.unfollowUser.bind(followAPI), actions.unfollowUser);
    }

export default usersReducer;
