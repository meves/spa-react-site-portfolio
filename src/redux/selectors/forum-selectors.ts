
import { AppStateType } from "../redux-store";
import { MessageType } from "../../types/types";

export const receiveMessages = (state: AppStateType): Array<MessageType> => state.forumPage.messages;
