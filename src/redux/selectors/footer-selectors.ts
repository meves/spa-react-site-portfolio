import { AuthorInfoType } from "../../types/types";
import { AppStateType } from "../redux-store";

export const receiveAuthorInfo = (state: AppStateType): AuthorInfoType => state.footerPage.authorInfo;
