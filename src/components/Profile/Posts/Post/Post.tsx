import React, { FC } from 'react';
import { PostType } from '../../../../types/types';
import styles from './Post.module.scss';

type PropsType = {
    post: PostType
}
const Post: FC<PropsType> = (props): JSX.Element => {
    const { avatarUrl, theme, text, date } = props.post;
    return (    
        <section className={styles.post}>
            <img src={avatarUrl} alt="" />
            <div className={styles.text}>
                <h4>{theme}</h4>
                <p>{text}</p>
                <p>{date}</p>
            </div>                    
        </section>
    );
};

export default Post;
