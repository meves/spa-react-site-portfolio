import AddPost from "./AddPost";
import { connect } from 'react-redux';
import { handleFocus, handleBlur, handleChange,
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

export default connect(mapStateToProps, {
    handleFocus, handleBlur, handleChange, addNewPost
})(AddPost);
