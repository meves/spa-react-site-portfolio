import { usersAPI, followAPI } from "../api/api";
import { UserType } from "../types/types";         
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, AppStateType } from "./redux-store";
import { Dispatch } from "redux";
import { ResponseDataGetUsersType, ResponseDataEmptyType } from "../api/apiTypes";
import { ResultCodes } from "../enums/responseCodes";
export const URL = '/img/avatar_2.png';

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    count: 5,
    totalCount: 0,
    isFetching: true,
    followingProgress: [] as Array<number>
};
type InitialStateType = typeof initialState

const usersReducer = (state=initialState, action: ActionsTypes<ActionType>): InitialStateType => {
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

const action = {
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
type ActionType = typeof action;
type FollowUserType = ReturnType<typeof action.followUser>;
type UnfollowUserType = ReturnType<typeof action.unfollowUser>;
// thunk creators
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes<ActionType>>;

export const getUsers = (currentPage: number, count: number): ThunkType => 
    async (dispatch: any) => {
        dispatch(action.setIsFetching(true));
        /**this request sended once after component was mounted */
        const data: ResponseDataGetUsersType = await usersAPI.getUsers(currentPage, count);
        dispatch(action.setIsFetching(false));
        dispatch(action.loadUsers(data.items));
        dispatch(action.getTotalCount(data.totalCount));
    }

export const getCurrentPageUsers = (currentPage: number, count: number): ThunkType => 
    async (dispatch: any) => {
        dispatch(action.setCurrentPage(currentPage));
        dispatch(action.setIsFetching(true));
        /**this request sended when user has changed current page */
        const data: ResponseDataGetUsersType = await usersAPI.getUsers(currentPage, count);
        dispatch(action.resetUsers(data.items));
        dispatch(action.setIsFetching(false));    
    }
    
type DispatchType = Dispatch<ActionsTypes<ActionType>>;

type ActionCreatorsType = ((id: number) => FollowUserType) | ((id: number) => UnfollowUserType);
type MethodApiType = (userId: number) => Promise<ResponseDataEmptyType>;

const followUnfollow = async (dispatch: DispatchType, userId: number, methodAPI: MethodApiType, actionCreator: ActionCreatorsType)
: Promise<void> => {
    dispatch(action.toggleFollowingProgress(true, userId));
    const data: ResponseDataEmptyType = await methodAPI(userId); 
    if (data.resultCode === ResultCodes.Success) {
        dispatch(actionCreator(userId)); 
    }
    dispatch(action.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => 
    async (dispatch: any) => {
        followUnfollow(dispatch, userId, followAPI.followUser.bind(followAPI), action.followUser);
    }

export const unfollow = (userId: number): ThunkType => 
    async (dispatch: any) => {
        followUnfollow(dispatch, userId, followAPI.unfollowUser.bind(followAPI), action.unfollowUser);
    }

export default usersReducer;
