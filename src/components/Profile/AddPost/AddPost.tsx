import React, { FC } from "react";
import { connect } from 'react-redux';
import { addNewPost } from "../../../redux/profile-reducer";
import { AppStateType } from "../../../redux/redux-store";
import AddPostReduxForm from './AddPostForm';
import { AddNewPostActionType } from "../../../redux/profile-reducer";

type PropsType = {
    addNewPost: (theme: string, text: string) => AddNewPostActionType
}

const AddPost: FC<PropsType> = (props): JSX.Element => {
    const onHandleClickButton = (values: any) => {
        const { theme, text } = values;
        props.addNewPost(theme, text);
    };        

    return (
        <section className="addPost">
            <h3>Add new post</h3>
            <AddPostReduxForm onSubmit={onHandleClickButton} {...props}/>
        </section>
    );
};

type MapDispatchPropsType = {
    addNewPost: (theme: string, text: string) => AddNewPostActionType
}

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, { addNewPost })(AddPost);
