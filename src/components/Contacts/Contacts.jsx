import React from 'react';
import style from './Contacts.module.scss';

const Contacts = (props) => {
    return (
        <section className={style.sectionContacts}>
            {props.message}
        </section>
    );
};

export default Contacts;