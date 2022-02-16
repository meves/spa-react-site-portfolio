import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { required, maxLength30 } from "../../../utils/validators/validators";
         
export type FormDataType = {
    theme: string
    text: string
}

const AddPostForm: FC<InjectedFormProps<FormDataType>> = (props) => {          
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

export default reduxForm<FormDataType>({form: 'addPostForm'})(AddPostForm);
