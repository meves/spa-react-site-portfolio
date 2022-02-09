import React, { FC } from 'react';
import style from './Contacts.module.scss';
import { withAuthRedirect } from "../../hoc/withAithRedirect";

const Contacts: FC = (props): JSX.Element => {    
    return (
        <section className={style.sectionContacts}>
            Contacts
        </section>
    );
};

export default withAuthRedirect(Contacts);
