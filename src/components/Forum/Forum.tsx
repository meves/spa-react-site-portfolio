import React, { FC } from 'react';
import { MessageType, FormDataMessageType } from '../../types/types';
import style from './Forum.module.scss';
import ForumReduxForm, { FormDataType } from './ForumReduxForm';

type PropsType = {
    messages: Array<MessageType>
    addNewMessage: (Object: FormDataMessageType) => void
}

const Forum: FC<PropsType> = (props): JSX.Element => {
    
    const messages: Array<JSX.Element> = [...props.messages].reverse().map((m: MessageType) => {
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

    const onAddMessage = (values: FormDataType) => {
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
