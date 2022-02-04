import { profileAPI } from "../api/api";
import { ADD_NEW_POST, DELETE_POST, SET_USER_PROFILE, SAVE_PHOTOS, SET_USER_STATUS } from "./constants/constants";
import { stopSubmit } from "redux-form";
import { createErrorObject } from "../utils/createErrorObject/createErrorObject";
import { PostType, MyPostType, ProfileType } from "../types/types";

const initialState = {
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

export const profileReducer = (state=initialState, action: ProfilereducerActionType): InitialStateType => {
    switch(action.type) { 
        case ADD_NEW_POST: 
            let lastIndex = state.myPost.posts.length - 1;
            let id = state.myPost.posts[lastIndex].id + 1;
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
        case DELETE_POST:
            return {
                ...state,
                myPost: {
                    ...state.myPost,                
                    posts: state.myPost.posts.filter(post => post.id !== action.postId)
                }
            };
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SAVE_PHOTOS:
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

// action creators
type ProfilereducerActionType = AddNewPostActionType | DeletePostActionType | SetUserProfileActionType
        | SetUserStatusActionType | SavePhotosActionType;

type AddNewPostActionType = {
    type: typeof ADD_NEW_POST
    theme: string
    text: string
}
export const addNewPost = (theme: string, text: string): AddNewPostActionType => ({
    type: ADD_NEW_POST,
    theme,
    text
});

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({
    type: DELETE_POST,
    postId
})

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
})

type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS
    status: string
}
export const setUserStatus = (status: string): SetUserStatusActionType => ({
    type: SET_USER_STATUS,
    status
})

type SavePhotosActionType = {
    type: typeof SAVE_PHOTOS
    photos: any
}
const savePhotos = (photos: any): SavePhotosActionType => ({
    type: SAVE_PHOTOS,
    photos
})

// thunk creators
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const data = await profileAPI.getUserProfile(userId); 
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    const status = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(status));        
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const loadFile = (photoFile: any) => async (dispatch: any) => {
    const data = await profileAPI.loadFile(photoFile);
    if (data.resultCode === 0) {
        dispatch(savePhotos(data.data.photos));
    }
}

export const saveProfileData = (profile: ProfileType) => async (dispatch: any) => {
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getUserProfile(profile.userId));
        return false;
    } else {        
        dispatch(stopSubmit('profileForm', createErrorObject(data) ));
        return true;
    }
}

export default profileReducer;
