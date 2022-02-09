import { AppStateType } from "../redux-store";

export const receiveIsAuth = (state: AppStateType): boolean => state.auth.isAuth;
export const receiveLogin = (state: AppStateType): string | null => state.auth.login;
export const receiveCaptchaUrl = (state: AppStateType): string | null => state.auth.captchaUrl;
export const receiveAuthId = (state: AppStateType): number | null => state.auth.id;
