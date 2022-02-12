import { authAPI } from "../api/api";
import { FormAction, stopSubmit } from 'redux-form';
import { SET_AUTH_USER_DATA, SET_CAPTCHA_URL } from "./constants/constants";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};
type InitialStateType = typeof initialState;

const authReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
};

// action creator
type ActionsTypes = SetAuthUserDataActionType | SetCaptchaUrlActionType;

type PayloadType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA
    payload: PayloadType
}
export const setAuthUserData = (id: number|null, login: string|null, email: string|null, isAuth: boolean)
    : SetAuthUserDataActionType =>  ({
        type: SET_AUTH_USER_DATA,
        payload: { id, login, email, isAuth }
    })

type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string
}    
const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    captchaUrl
})

// thunk creator
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;
export const authMe = (): ThunkType =>  
    async (dispatch) => {
        const data = await authAPI.authMe();
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    }

type LoginUserThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes | FormAction>;    
export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: boolean|undefined)
:LoginUserThunkType => 
    async  (dispatch) => {
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

const getCaptchaUrl = (): ThunkType => 
    async (dispatch) => {
        const data = await authAPI.getCaptcha();
        dispatch(setCaptchaUrl(data.url));
    }

export const logoutUser = (): ThunkType => 
    async (dispatch) => {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }    
    }

export default authReducer;
