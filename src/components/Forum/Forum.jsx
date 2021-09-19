import React from 'react';
import style from './Forum.module.scss';

const Forum = (props) => {
    return (
        <section className={style.sectionForum}>
            {props.message}
        </section>
    );
};

export default Forum;
