import React, { FC } from "react";
import { connect } from 'react-redux';
import { action, AddNewPostActionType } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import AddPostReduxForm, { FormDataType } from './AddPostForm';

type PropsType = {
    addNewPost: (theme: string, text: string) => AddNewPostActionType
}

const AddPost: FC<PropsType> = (props): JSX.Element => {
    const onHandleClickButton = (values: FormDataType) => {
        const { theme, text } = values;
        props.addNewPost(theme, text);
    };        

    return (
        <section className="addPost">
            <h3>Add new post</h3>
            <AddPostReduxForm onSubmit={onHandleClickButton}/>
        </section>
    );
};

type MapDispatchPropsType = {
    addNewPost: (theme: string, text: string) => AddNewPostActionType
}

const { addNewPost } = action;

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, { addNewPost })(AddPost);
