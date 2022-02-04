import { usersAPI, followAPI } from "../api/api";
import { FOLLOW_USER, UNFOLLOW_USER, LOAD_USERS, GET_TOTAL_COUNT,
         SET_CURRENT_PAGE, RESET_USERS, SET_IS_FETCHING, FOLLOWING_PROGRESS } from "./constants/constants";
import { UserType } from "../types/types";         
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

const usersReducer = (state=initialState, action: UsersReducerActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW_USER: 
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
        case UNFOLLOW_USER:
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
        case LOAD_USERS:
            return {
                ...state,
                users: action.users
            };    
        case GET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case RESET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };    
        case FOLLOWING_PROGRESS:
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

// action creators
type UsersReducerActionType = FollowUserType | UnfollowUserType | LoadUsersActionType | GetTotalCountActionType
        | SetCurrentPageActionType | ResetUsersActionType | SetIsFetchingActionType | ToggleFollowingProgressActionType

type FollowUserType = {
    type: typeof FOLLOW_USER
    id: number
}
export const followUser = (id: number): FollowUserType => ({
    type: FOLLOW_USER,
    id
})

type UnfollowUserType = {
    type: typeof UNFOLLOW_USER
    id: number
}
export const unfollowUser = (id: number): UnfollowUserType => ({
    type: UNFOLLOW_USER,
    id
})

type LoadUsersActionType = {
    type: typeof LOAD_USERS
    users: Array<UserType>
}
export const loadUsers = (users: Array<UserType>): LoadUsersActionType => ({
    type: LOAD_USERS,
    users
})

type GetTotalCountActionType = {
    type: typeof GET_TOTAL_COUNT
    totalCount: number
}
export const getTotalCount = (totalCount: number): GetTotalCountActionType => ({
    type: GET_TOTAL_COUNT,
    totalCount
})

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

type ResetUsersActionType = {
    type: typeof RESET_USERS
    users: Array<UserType>
}
export const resetUsers = (users: Array<UserType>): ResetUsersActionType => ({
    type: RESET_USERS,
    users
})

type SetIsFetchingActionType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): SetIsFetchingActionType => ({
    type: SET_IS_FETCHING,
    isFetching
})

type ToggleFollowingProgressActionType = {
    type: typeof FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: FOLLOWING_PROGRESS,
    isFetching,
    userId
})

// thunk creators
export const getUsers = (currentPage: number, count: number) => async (dispatch: any) => {
    dispatch(setIsFetching(true));
    /**this request sended once after component was mounted */
    const data = await usersAPI.getUsers(currentPage, count);
    dispatch(setIsFetching(false));
    dispatch(loadUsers(data.items));
    dispatch(getTotalCount(data.totalCount));
}

export const getCurrentPageUsers = (currentPage: number, count: number) => async (dispatch: any) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    /**this request sended when user changes current page */
    const data = await usersAPI.getUsers(currentPage, count);
    dispatch(resetUsers(data.items));
    dispatch(setIsFetching(false));    
}

const followUnfollow = async (dispatch: any, userId: number, methodAPI: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await methodAPI(userId); 
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId)); 
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, followAPI.followUser.bind(followAPI), followUser);
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    followUnfollow(dispatch, userId, followAPI.unfollowUser.bind(followAPI), unfollowUser);
}

export default usersReducer;
