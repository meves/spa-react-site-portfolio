import { authAPI } from "../api/auth-api";
import { FormAction, stopSubmit } from 'redux-form';
import { InferActionsTypes, CommonThunkType } from "./redux-store";
import { ResultCodes, ResultCodeForCaptchaUrl } from '../enums/responseCodes';

const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};
type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>;

const authReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
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

const actions = {
    setAuthUserData: (id: number|null, login: string|null, email: string|null, isAuth: boolean) =>  ({
        type: 'site-portfolio/medvedkinsergey.ru/auth/SET_AUTH_USER_DATA', payload: { id, login, email, isAuth }
    } as const),
    setCaptchaUrl: (captchaUrl: string) => ({
        type: 'site-portfolio/medvedkinsergey.ru/auth/SET_CAPTCHA_URL', captchaUrl
    } as const)
}

type ThunkType = CommonThunkType<ActionsTypes | FormAction>;

export const authMe = (): ThunkType =>  
    async (dispatch) => {
        const data = await authAPI.authMe();
        if (data.resultCode === ResultCodes.Success) {
            let {id, login, email} = data.data;
            dispatch(actions.setAuthUserData(id, login, email, true));
        }
    }

export const loginUser = (email: string, password: string, rememberMe: boolean, captcha: boolean|undefined):ThunkType => 
    async  (dispatch) => {
        const data = await authAPI.login(email, password, rememberMe, captcha);
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

export const logoutUser = (): ThunkType => 
    async (dispatch) => {
        const data = await authAPI.logout();
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false));
        }    
    }

const getCaptchaUrl = (): ThunkType => 
    async (dispatch) => {
        const data = await authAPI.getCaptcha();
        dispatch(actions.setCaptchaUrl(data.url));
    }


export default authReducer;
