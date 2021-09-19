// constants
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'NFOLLOW_USER';
const LOAD_USERS = 'LOAD_USERS';
export const URL = '/img/avatar_2.png';

const initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            };    
        default: 
            return state;
    }
}

// action creators
export const followUserAC = (id) => {
    return {
        type: FOLLOW_USER,
        id
    };
}

export const unfollowUserAC = (id) => {
    return {
        type: UNFOLLOW_USER,
        id
    };
}

export const loadUsersAC = (users) => {
    return {
        type: LOAD_USERS,
        users
    };
}

export default usersReducer;
