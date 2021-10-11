import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { connect } from 'react-redux';
import { addNewPost } from "../../../redux/profile-reducer";
import { compose } from 'redux';
import { required, maxLength30 } from "../../../utils/validators/validators";
         
const AddPostForm = (props) => {
          
    return (
        <form onSubmit={props.handleSubmit}>
            <Field  component={Textarea}
                    cols="30" rows="1" 
                    placeholder="Theme"
                    name="theme" 
                    validate={[required, maxLength30]} />
                             
            <Field  component={Textarea} 
                    cols="30" rows="3" 
                    placeholder="Add text here..."
                    name="text"
                    validate={[required]} />
            
            <div><button>Add post</button></div>
        </form>
    );
}

const AddPostReduxForm = reduxForm({form: 'addPostForm'})(AddPostForm);

const AddPost = (props) => {
    const onHandleClickButton = (values) => {
        const {theme, text} = values;
        props.addNewPost(theme, text);
    };        

    return (
        <section className="addPost">
            <h3>Add new post</h3>
            <AddPostReduxForm onSubmit={onHandleClickButton} {...props}/>
        </section>
    );
};

export default compose(connect(null, { addNewPost }))(AddPost);
