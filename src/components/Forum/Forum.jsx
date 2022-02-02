import React from 'react';
import style from './Forum.module.scss';
import { reduxForm, Field } from 'redux-form';
import { required, minLength2, maxLength15 } from '../../utils/validators/validators';
import { Input, Textarea } from '../common/FormsControls/FormsControls';

const ForumForm = (props) => {
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

const ForumReduxForm = reduxForm({form: 'addMessageForm'})(ForumForm);

const Forum = (props) => {
    
    const messages = [...props.messages].reverse().map(m => {
        return <div className={style.media} key={m.id}>
                    <div className={style.user}>
                        <img src={m.avatarUrl} alt={m.name} />
                        <p>{m.name}</p>
                    </div>
                    <div className={style.message}>
                        <h3>{m.theme}</h3>
                        <p>{m.message}</p>
                    </div>
                </div>
    });

    const onAddMessage = (values) => {
        const { name, theme, message} = values;
        props.addNewMessage({name, theme, message}); 
    }

    return (
        <section className={style.forumPage}>
            <h1>Forum Page</h1>
            <ForumReduxForm onSubmit={onAddMessage}/>
            {messages}
        </section>
    );
};

export default Forum;
