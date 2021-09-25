import AddPost from "./AddPost";
import { connect } from 'react-redux';
import { clearTheme, clearText, 
         fillTheme, fillText,
         addSymbolToTheme, addSymbolToText,
         addNewPost } from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
    return {
        title: state.profilePage.addPost.title,
        button: state.profilePage.addPost.button,
        placeholderTheme: state.profilePage.addPost.placeholderTheme,
        placeholderText: state.profilePage.addPost.placeholderText,
        symbolsTheme: state.profilePage.addPost.symbolsTheme,
        symbolsText: state.profilePage.addPost.symbolsText
    };
}

const AddPostContainer = connect(mapStateToProps, {
    clearTheme, clearText, fillTheme, fillText, addSymbolToTheme, addSymbolToText, addNewPost
})(AddPost);

export default AddPostContainer;
