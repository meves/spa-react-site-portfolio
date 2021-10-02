import { authAPI } from "../api/api";

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

// action creator
export const setAuthUserData = (id, login, email) => {
    return {
        type: SET_AUTH_USER_DATA,
        authUserData: {id, login, email}
    };
}

// thunk creator
export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    }
}

export default authReducer;
