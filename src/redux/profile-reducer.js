import { profileAPI } from "../api/api";

const ADD_NEW_POST = 'ADD_NEW_POST';
const CLEAR_THEME = 'CLEAR_THEME';
const FILL_THEME = 'FILL_THEME';
const CLEAR_TEXT = 'CLEAR_TEXT'; 
const FILL_TEXT = 'FILL_TEXT';
const ADD_SYMBOL_TO_THEME = 'ADD_SYMBOL_TO_THEME';
const ADD_SYMBOL_TO_TEXT = 'ADD_SYMBOL_TO_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const PLACEHOLDER_THEME = 'Theme';
const PLACEHOLDER_TEXT = 'add text here...';

const initialState = {
    message: 'Profile Page',
    addPost: {
        title: 'Add new post',
        button: 'Add post',
        placeholderTheme: 'Theme',
        placeholderText: 'add text here...',
        symbolsTheme: '',
        symbolsText: ''
    },
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
        case ADD_SYMBOL_TO_THEME:
            return {
                ...state,
                addPost: { ...state.addPost,
                           symbolsTheme: action.text 
                }
            };
        case ADD_SYMBOL_TO_TEXT:
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    symbolsText: action.text
                }
            };
        case CLEAR_THEME:
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    placeholderTheme: ''
                }
            }
        case CLEAR_TEXT:
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    placeholderText: ''
                }
            };
        case FILL_THEME:
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    placeholderTheme: PLACEHOLDER_THEME
                }
            };
        case FILL_TEXT:
            return {
                ...state,
                addPost: {
                    ...state.addPost,
                    placeholderText: PLACEHOLDER_TEXT
                }
            };
        case ADD_NEW_POST: 
            let lastIndex = state.myPost.posts.length - 1;
            let id = state.myPost.posts[lastIndex].id + 1;
            return {
                ...state,
                addPost: {...state.addPost,
                    placeholderTheme: 'Theme',
                    placeholderText: 'add text here...',
                    symbolsTheme: '',
                    symbolsText: ''
                },                                
                myPost: {...state.myPost,
                         posts: [...state.myPost.posts, 
                            {
                                id: id,
                                avatar: '/img/avatar.jpg',
                                theme: state.addPost.symbolsTheme,
                                text: state.addPost.symbolsText,
                                date: new Date().toLocaleDateString()
                            }]        
                },
            } 
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
        default:
            return state;
    }
}

export const addSymbolToTheme = (text) => ({ 
    type: ADD_SYMBOL_TO_THEME, 
    text: text 
});

export const addSymbolToText = (text) => ({
    type: ADD_SYMBOL_TO_TEXT, 
    text: text
});

export const clearTheme = () => ({
    type: CLEAR_THEME
});

export const clearText = () => ({
    type: CLEAR_TEXT
});

export const fillTheme = () => ({
    type: FILL_THEME
});

export const fillText = () => ({
    type: FILL_TEXT
});

export const addNewPost = () => ({
    type: ADD_NEW_POST
});

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    };
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    };
}

// thunk creators
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(data => 
            dispatch(setUserProfile(data)));
    }
}

export const handleFocus = (name) => {
    return (dispatch) => {
        if (name === 'theme') {
            dispatch(clearTheme());
        }
        if (name === 'text') {
            dispatch(clearText());
        }
    }
}

export const handleBlur = (name) => {
    return (dispatch) => {
        if (name === 'theme') {
            dispatch(fillTheme());
        }
        if (name === 'text') {
            dispatch(fillText());
        }
    }
} 

export const handleChange = (name, text) => {
    return (dispatch) => {
        if (name === 'theme') {
            dispatch(addSymbolToTheme(text));
        }
        if (name === 'text') {
            dispatch(addSymbolToText(text));
        }
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(status => {
            dispatch(setUserStatus(status));
        });
    };
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        });
    }
}

export default blogReducer;
