import React from 'react';
import style from './Contacts.module.scss';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';

const Contacts = (props) => {    
    return (
        <section className={style.sectionContacts}>
            Contacts
        </section>
    );
};

export default compose(connect(null, null), withAuthRedirect)(Contacts);
