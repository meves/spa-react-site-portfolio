import AddPost from "./AddPost";
import { connect } from 'react-redux';
import { clearThemeAC, clearTextAC, 
         fillThemeAC, fillTextAC,
         addSymbolToThemeAC, addSymbolToTextAC,
         addNewPostAC } from "../../../redux/blog-reducer";

const mapStateToProps = (state) => {
    return {
        title: state.blogPage.addPost.title,
        button: state.blogPage.addPost.button,
        placeholderTheme: state.blogPage.addPost.placeholderTheme,
        placeholderText: state.blogPage.addPost.placeholderText,
        symbolsTheme: state.blogPage.addPost.symbolsTheme,
        symbolsText: state.blogPage.addPost.symbolsText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearTheme: () => {
            dispatch(clearThemeAC());
        },
        clearText: () => {
            dispatch(clearTextAC());
        },
        fillTheme: () => {
            dispatch(fillThemeAC());
        },
        fillText: () => {
            dispatch(fillTextAC())
        },
        addSymbolToTheme: (text) => {
            dispatch(addSymbolToThemeAC(text));
        },
        addSymbolToText: (text) => {
            dispatch(addSymbolToTextAC(text));
        },
        addNewPost: () => {
            dispatch(addNewPostAC());
        }
    };
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
