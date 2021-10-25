import { profileAPI } from "../api/api";
import { profileConst } from "./constants/constants";

const initialState = {
    message: 'Profile Page',    
    myPost: {
        title: 'My posts',
        posts: [
            {id: 1, avatar: '/img/avatar.jpg', theme: 'Mountains', text: 'Text about mountains', date: '01.09.2021'},
            {id: 2, avatar: '/img/avatar.jpg', theme: 'Rivers', text: 'Text about rivers', date: '02.09.2021'}
        ]
    },
    profile: null,
    status: ''
};

export const blogReducer = (state=initialState, action) => {
    switch(action.type) { 
        case profileConst.ADD_NEW_POST: 
            let lastIndex = state.myPost.posts.length - 1;
            let id = state.myPost.posts[lastIndex].id + 1;
            return {
                ...state,                                                
                myPost: {...state.myPost,
                         posts: [...state.myPost.posts, 
                            {
                                id: id,
                                avatar: '/img/avatar.jpg',
                                theme: action.theme,
                                text: action.text,
                                date: new Date().toLocaleDateString()
                            }]        
                },
            } 
        case profileConst.SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            };
        case profileConst.SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addNewPost = (theme, text) => ({
    type: profileConst.ADD_NEW_POST,
    theme,
    text
});

export const setUserProfile = (profile) => {
    return {
        type: profileConst.SET_USER_PROFILE,
        profile
    };
}

export const setUserStatus = (status) => {
    return {
        type: profileConst.SET_USER_STATUS,
        status
    };
}

// thunk creators
export const getUserProfile = (userId) => async (dispatch) => {
    const data = await profileAPI.getUserProfile(userId); 
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    const status = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(status));        
}

export const updateUserStatus = (status) => async (dispatch) => {
    const data = await profileAPI.updateUserStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default blogReducer;
