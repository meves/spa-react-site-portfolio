import { authAPI } from "../api/api";
import { FormAction, stopSubmit } from 'redux-form';
import { ThunkAction } from "redux-thunk";
import { ActionsTypes, AppStateType } from "./redux-store";
import { ResponseDataAuthMeType, ResponseDataEmptyType, ResponseDataGetCaptchaType,
         ResponseDataLoginType } from "../api/apiTypes";
import { ResultCodes, ResultCodeForCaptchaUrl } from '../enums/responseCodes';

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};
type InitialStateType = typeof initialState;

const authReducer = (state=initialState, action: ActionsTypes<ActionType>): InitialStateType => {
    switch (action.type) {
        case "site-portfolio/medvedkinsergey.ru/auth/SET_AUTH_USER_DATA":
            return {
                ...state,
                ...action.payload
            }
        case "site-portfolio/medvedkinsergey.ru/auth/SET_CAPTCHA_URL":
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
};

const action = {
    setAuthUserData: (id: number|null, login: string|null, email: string|null, isAuth: boolean) =>  ({
        type: 'site-portfolio/medvedkinsergey.ru/auth/SET_AUTH_USER_DATA', payload: { id, login, email, isAuth }
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({
        type: 'site-portfolio/medvedkinsergey.ru/auth/SET_CAPTCHA_URL', captchaUrl
    } as const)
}
type ActionType = typeof action;

// thunk
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes<ActionType>>;
export const authMe = (): ThunkType =>  
    async (dispatch) => {
        const data: ResponseDataAuthMeType = await authAPI.authMe();
        if (data.resultCode === ResultCodes.Success) {
            let {id, login, email} = data.data;
            dispatch(action.setAuthUserData(id, login, email, true));
        }
    }

type LoginUserThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes<ActionType> | FormAction>;    
export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: boolean|undefined)
:LoginUserThunkType => 
    async  (dispatch) => {
        const data: ResponseDataLoginType = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === ResultCodes.Success) {
            dispatch(authMe());
        } else {
            if (data.resultCode === ResultCodeForCaptchaUrl.CaptchaUrl) {
                dispatch(getCaptchaUrl());
            }
            let message: string = data.messages.length > 0 ? data.messages[0] : 'Login or Password is wrong';
            dispatch(stopSubmit('login', {_error: message}));
        }   
    }

const getCaptchaUrl = (): ThunkType => 
    async (dispatch) => {
        const data: ResponseDataGetCaptchaType = await authAPI.getCaptcha();
        dispatch(action.setCaptchaUrl(data.url));
    }

export const logoutUser = (): ThunkType => 
    async (dispatch) => {
        const data: ResponseDataEmptyType = await authAPI.logout();
        if (data.resultCode === ResultCodes.Success) {
            dispatch(action.setAuthUserData(null, null, null, false));
        }    
    }

export default authReducer;
