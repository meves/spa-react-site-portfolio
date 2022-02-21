import { profileAPI } from "../api/profile-api";
import { FormAction, stopSubmit } from "redux-form";
import { createErrorObject } from "../utils/createErrorObject/createErrorObject";
import { PostType, MyPostType, ProfileType, PhotosType } from "../types/types";
import { InferActionsTypes, CommonThunkType } from "./redux-store";
import { ResultCodes } from "../enums/responseCodes";

export const initialState = {
    message: 'Profile Page',    
    myPost: {
        title: 'My posts',
        posts: [
            {id: 1, avatarUrl: '/img/avatar.jpg', theme: 'Mountains', text: 'Text about mountains', date: '01.09.2021'},
            {id: 2, avatarUrl: '/img/avatar.jpg', theme: 'Rivers', text: 'Text about rivers', date: '02.09.2021'}
        ] as Array<PostType>
    } as MyPostType,
    profile: null as ProfileType | null,
    status: ''
};
type InitialStateType = typeof initialState

type ActionsTypes = InferActionsTypes<typeof actions>;

export const profileReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch(action.type) { 
        case "site-portfolio/medvedkinsergey.ru/profile/ADD_NEW_POST": 
            let id = state.myPost.posts.length + 1;
            return {
                ...state,                                                
                myPost: {...state.myPost,
                         posts: [...state.myPost.posts, 
                            {
                                id: id,
                                avatarUrl: '/img/avatar.jpg',
                                theme: action.theme,
                                text: action.text,
                                date: new Date().toLocaleDateString()
                            }]        
                },
            }
        case "site-portfolio/medvedkinsergey.ru/profile/DELETE_POST":
            return {
                ...state,
                myPost: {
                    ...state.myPost,                
                    posts: state.myPost.posts.filter(post => post.id !== action.postId)
                }
            };
        case "site-portfolio/medvedkinsergey.ru/profile/SET_USER_PROFILE": 
            return {
                ...state,
                profile: action.profile
            };
        case "site-portfolio/medvedkinsergey.ru/profile/SET_USER_STATUS":
            return {
                ...state,
                status: action.status
            };
        case "site-portfolio/medvedkinsergey.ru/profile/SAVE_PHOTOS":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                } as ProfileType
            }
        default:
            return state;
    }
}

export const actions = {
    addNewPost: (theme: string, text: string) => ({
        type: 'site-portfolio/medvedkinsergey.ru/profile/ADD_NEW_POST', theme, text
    } as const),
    deletePost: (postId: number) => ({
        type: 'site-portfolio/medvedkinsergey.ru/profile/DELETE_POST', postId
    } as const),
    setUserProfile: (profile: ProfileType) => ({
        type: 'site-portfolio/medvedkinsergey.ru/profile/SET_USER_PROFILE', profile
    } as const),
    setUserStatus: (status: string) => ({
        type: 'site-portfolio/medvedkinsergey.ru/profile/SET_USER_STATUS', status
    } as const),
    savePhotos: (photos: PhotosType) => ({
        type: 'site-portfolio/medvedkinsergey.ru/profile/SAVE_PHOTOS', photos
    } as const)
}
export type AddNewPostActionType = ReturnType<typeof actions.addNewPost>;

// thunk creators
type ThunkType = CommonThunkType<ActionsTypes>;

export const getUserProfile = (userId: number): ThunkType => 
    async (dispatch) => {
        const data = await profileAPI.getUserProfile(userId); 
        dispatch(actions.setUserProfile(data));
    }

export const getUserStatus = (userId: number): ThunkType => 
    async (dispatch) => {
        const status: string = await profileAPI.getUserStatus(userId);
        dispatch(actions.setUserStatus(status));        
    }

export const updateUserStatus = (status: string): ThunkType => 
    async (dispatch) => {
        const data = await profileAPI.updateUserStatus(status);
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.setUserStatus(status));
        }
    }

export const loadFile = (photoFile: File): ThunkType => 
    async (dispatch) => {
        const data = await profileAPI.loadFile(photoFile);
        if (data.resultCode === ResultCodes.Success) {
            dispatch(actions.savePhotos(data.data.photos));
        }
    }

type SaveprofileThunkType = CommonThunkType<ActionsTypes | FormAction, Promise<void> | Promise<boolean>>;

export const saveProfileData = (profile: ProfileType): SaveprofileThunkType => 
    async (dispatch) => {
        const data = await profileAPI.saveProfile(profile);
        if (data.resultCode === ResultCodes.Success) {
            dispatch(getUserProfile(profile.userId));
            return false;
        } else {        
            dispatch(stopSubmit('profileForm', createErrorObject(data) ));
            return true;
        }
    }

export default profileReducer;
