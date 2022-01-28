import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';
import { authConst } from "./constants/constants";

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case authConst.SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case authConst.SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
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

const setCaptchaUrl = captchaUrl => ({
    type: authConst.SET_CAPTCHA_URL,
    captchaUrl
})

// thunk creator
export const authMe = () =>  async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const loginUser = (email, password, rememberMe, captcha) => async  (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(authMe());
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Login or Password is wrong';
        dispatch(stopSubmit('login', {_error: message}));
    }   
}

const getCaptchaUrl = () => async dispatch => {
    const data = await authAPI.getCaptcha();
    dispatch(setCaptchaUrl(data.url));
}

export const logoutUser = () => async (dispatch) => {
    const data = await authAPI.logout();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }    
}

export default authReducer;
