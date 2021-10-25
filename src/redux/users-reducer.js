import { usersAPI, followAPI } from "../api/api";
import { usersConst } from "./constants/constants";
export const URL = '/img/avatar_2.png';

const initialState = {
    users: [],
    currentPage: 1,
    count: 5,
    totalCount: 0,
    isFetching: true,
    followingProgress: []
};

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case usersConst.FOLLOW_USER: 
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
        case usersConst.UNFOLLOW_USER:
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
        case usersConst.LOAD_USERS:
            return {
                ...state,
                users: action.users
            };    
        case usersConst.GET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case usersConst.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case usersConst.RESET_USERS:
            return {
                ...state,
                users: action.users
            };
        case usersConst.SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };    
        case usersConst.FOLLOWING_PROGRESS:
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
export const followUser = (id) => {
    return {
        type: usersConst.FOLLOW_USER,
        id
    };
}

export const unfollowUser = (id) => {
    return {
        type: usersConst.UNFOLLOW_USER,
        id
    };
}

export const loadUsers = (users) => {
    return {
        type: usersConst.LOAD_USERS,
        users
    };
}

export const getTotalCount = (totalCount) => {
    return {
        type: usersConst.GET_TOTAL_COUNT,
        totalCount
    };
} 

export const setCurrentPage = (currentPage) => {
    return {
        type: usersConst.SET_CURRENT_PAGE,
        currentPage
    };
}

export const resetUsers = (users) => {
    return {
        type: usersConst.RESET_USERS,
        users
    };
}

export const setIsFetching = (isFetching) => {
    return {
        type: usersConst.SET_IS_FETCHING,
        isFetching
    };
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: usersConst.FOLLOWING_PROGRESS,
        isFetching,
        userId
    };
}

// thunk creators
export const getUsers = (currentPage, count) => async (dispatch) => {
    dispatch(setIsFetching(true));
    /**this request sended once after component was mounted */
    const data = await usersAPI.getUsers(currentPage, count);
    dispatch(setIsFetching(false));
    dispatch(loadUsers(data.items));
    dispatch(getTotalCount(data.totalCount));
}

export const getCurrentPageUsers = (currentPage, count) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsFetching(true));
    /**this request sended when user changes current page */
    const data = await usersAPI.getUsers(currentPage, count);
    dispatch(resetUsers(data.items));
    dispatch(setIsFetching(false));    
}

const followUnfollow = async (dispatch, userId, methodAPI, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await methodAPI(userId); 
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId)); 
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, followAPI.followUser.bind(followAPI), followUser);
}

export const unfollow = (userId) => async (dispatch) => {
    followUnfollow(dispatch, userId, followAPI.unfollowUser.bind(followAPI), followUser);
}

export default usersReducer;
