export const ADD_NEW_POST = 'ADD_NEW_POST';
export const CLEAR_THEME = 'CLEAR_THEME';
export const FILL_THEME = 'FILL_THEME';
export const CLEAR_TEXT = 'CLEAR_TEXT'; 
export const FILL_TEXT = 'FILL_TEXT';
export const ADD_SYMBOL_TO_THEME = 'ADD_SYMBOL_TO_THEME';
export const ADD_SYMBOL_TO_TEXT = 'ADD_SYMBOL_TO_TEXT';

const PLACEHOLDER_THEME = 'Theme';
const PLACEHOLDER_TEXT = 'add text here...';

const initialState = {
    message: 'Blog',
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
        default:
            return state;
    }
}

export const addSymbolToThemeAC = (text) => ({ 
    type: ADD_SYMBOL_TO_THEME, 
    text: text 
});

export const addSymbolToTextAC = (text) => ({
    type: ADD_SYMBOL_TO_TEXT, 
    text: text
});

export const clearThemeAC = () => ({
    type: CLEAR_THEME
});

export const clearTextAC = () => ({
    type: CLEAR_TEXT
});

export const fillThemeAC = () => ({
    type: FILL_THEME
});

export const fillTextAC = () => ({
    type: FILL_TEXT
});

export const addNewPostAC = () => ({
    type: ADD_NEW_POST
});

export default blogReducer;
