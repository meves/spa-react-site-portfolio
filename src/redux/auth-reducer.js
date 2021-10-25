import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { authConst } from "./constants/constants";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case authConst.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
};

// action creator
export const setAuthUserData = (id, login, email, isAuth) => {
    return {
        type: authConst.SET_AUTH_USER_DATA,
        payload: { id, login, email, isAuth }
    };
}

// thunk creator
export const authMe = () =>  async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const loginUser = (email, password, rememberMe) => async  (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe);
    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Login or Password is wrong';
        dispatch(stopSubmit('login', {_error: message}));
    }   
}

export const logoutUser = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }    
}

export default authReducer;
