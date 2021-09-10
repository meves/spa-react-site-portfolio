export const ADD_NEW_POST = 'ADD_NEW_POST';
export const CLEAR_THEME = 'CLEAR_THEME';
export const FILL_THEME = 'FILL_THEME';
export const CLEAR_TEXT = 'CLEAR_TEXT'; 
export const FILL_TEXT = 'FILL_TEXT';
export const ADD_SYMBOL_TO_THEME = 'ADD_SYMBOL_TO_THEME';
export const ADD_SYMBOL_TO_TEXT = 'ADD_SYMBOL_TO_TEXT';

// reducer
export const addNewPostReducer = (state, action) => {
    switch(action.type) {
        case ADD_NEW_POST:
            let lastIndex = state.myPost.posts.length - 1;
            let id = state.myPost.posts[lastIndex].id + 1;
            const newPost = {
                id: id,
                avatar: '/img/avatar.jpg',
                theme: state.addPost.symbolsTheme,
                text: state.addPost.symbolsText,
                date: new Date().toLocaleDateString()
            };
            state.myPost.posts.push(newPost);
            state.addPost.symbolsTheme = '';
            state.addPost.symbolsText = '';
            return state;
        case CLEAR_THEME:
            state.addPost.placeholderTheme = '';
            return state;
        case FILL_THEME:
            state.addPost.placeholderTheme = 'Theme';
            return state;
        case CLEAR_TEXT:
            state.addPost.placeholderText = '';
            return state;
        case FILL_TEXT:
            state.addPost.placeholderText = 'add text here...';
            return state;
        case ADD_SYMBOL_TO_THEME:
            state.addPost.symbolsTheme  = action.text;
            return state;
        case ADD_SYMBOL_TO_TEXT:
            state.addPost.symbolsText = action.text;
            return state;
        default:
            return state;
    }
}

// action-creator
export const clearThemeActionCreator = () => ({
    type: CLEAR_THEME
});
export const clearTextActionCreator = () => ({
    type: CLEAR_TEXT
});
export const fillThemeActionCreator = () => ({
    type: FILL_THEME
});
export const fillTextActionCreator = () => ({
    type: FILL_TEXT
});
export const addSymbolToThemeActionCreator = (text) => ({ 
    type: ADD_SYMBOL_TO_THEME, text: text 
});
export const addSymbolToTextActionCreator = (text) => ({
    type: ADD_SYMBOL_TO_TEXT, text: text
});
export const addNewPostActionCreator = () => ({
    type: ADD_NEW_POST
});
