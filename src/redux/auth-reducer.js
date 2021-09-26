const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
    isAuth: false,
    id: null,
    login: null,
    email: null
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                id: action.authUserData.id,
                login: action.authUserData.login,
                email: action.authUserData.email,
                isAuth: true
            }
        default:
            return state;
    }
};

export const setAuthUserData = (id, login, email) => {
    return {
        type: SET_AUTH_USER_DATA,
        authUserData: {id, login, email}
    };
}

export default authReducer;
