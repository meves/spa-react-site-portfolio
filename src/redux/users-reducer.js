import { usersAPI, followAPI } from "../api/api";
// constants
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'NFOLLOW_USER';
const LOAD_USERS = 'LOAD_USERS';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const RESET_USERS = 'RESET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';
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
export const followUser = (id) => {
    return {
        type: FOLLOW_USER,
        id
    };
}

export const unfollowUser = (id) => {
    return {
        type: UNFOLLOW_USER,
        id
    };
}

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        users
    };
}

export const getTotalCount = (totalCount) => {
    return {
        type: GET_TOTAL_COUNT,
        totalCount
    };
} 

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    };
}

export const resetUsers = (users) => {
    return {
        type: RESET_USERS,
        users
    };
}

export const setIsFetching = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        isFetching
    };
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: FOLLOWING_PROGRESS,
        isFetching,
        userId
    };
}

// thunk creators
export const getUsers = (currentPage, count) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        /**this request sended once after component was mounted */
        usersAPI.getUsers(currentPage, count).then(data => {
            dispatch(setIsFetching(false));
            dispatch(loadUsers(data.items));
            dispatch(getTotalCount(data.totalCount));
        });
    }
}

export const getCurrentPageUsers = (currentPage, count) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        /**this request sended when user cnanges current page */
        usersAPI.getUsers(currentPage, count).then(data => {
            dispatch(resetUsers(data.items));
            dispatch(setIsFetching(false));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followUser(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        }) 
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        followAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowUser(userId));
                dispatch(toggleFollowingProgress(false, userId));
            }
        })
    }
}

export default usersReducer;
