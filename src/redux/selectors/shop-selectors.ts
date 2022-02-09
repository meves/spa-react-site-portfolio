import { AppStateType } from "../redux-store";

export const receiveMessage = (state: AppStateType): string => state.shopPage.message;
