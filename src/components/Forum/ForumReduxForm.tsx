import React, { FC } from 'react';
import style from './Forum.module.scss';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { required, minLength2, maxLength15 } from '../../utils/validators/validators';
import { Input, Textarea } from '../common/FormsControls/FormsControls';

export type FormDataType = {
    name: string
    theme: string
    message: string
}

const ForumForm: FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <fieldset className={style.fieldset}>
                <legend>Your message</legend>
                <Field component={Input} type="text" label="Fullname" placeholder="Fullname" 
                       name="name" validate={[required, minLength2]}/><br/>
                <Field component={Input} type="text" label="Theme" placeholder="theme" 
                       name="theme" validate={[required, maxLength15]}/><br/>
                <Field component={Textarea} placeholder="Print text here..." cols="50" rows="5" 
                       name="message" validate={[required]}/>
                <button className={style.button}>Add message</button>
            </fieldset>
        </form>
    );
}

export default reduxForm<FormDataType>({form: 'addMessageForm'})(ForumForm);
