import { AppStateType } from "../redux-store";

export const receiveLogo = (state: AppStateType): string => state.headerPage.logo;
export const receiveHeading = (state: AppStateType): string => state.headerPage.heading;
export const receiveLoginText = (state: AppStateType): string => state.headerPage.loginText;
