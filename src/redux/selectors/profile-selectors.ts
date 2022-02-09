import { PostType, ProfileType } from "../../types/types";
import { AppStateType } from "../redux-store";

// profilePage
export const receiveMessage = (state: AppStateType): string => state.profilePage.message;
export const receiveProfile = (state: AppStateType): ProfileType | null => state.profilePage.profile;
export const receiveStatus = (state: AppStateType): string => state.profilePage.status;

// posts
export const receiveTitle = (state: AppStateType): string => state.profilePage.myPost.title;
export const receivePosts = (state: AppStateType): Array<PostType> => state.profilePage.myPost.posts;
