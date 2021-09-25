// constants
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'NFOLLOW_USER';
const LOAD_USERS = 'LOAD_USERS';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT';
const RESET_USERS = 'RESET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
export const URL = '/img/avatar_2.png';

const initialState = {
    users: [],
    currentPage: 1,
    count: 4,
    totalCount: 0,
    isFetching: true
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

export default usersReducer;
