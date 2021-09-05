import style from './Contacts.module.scss';

interface IContacts {
    message: string;
}

const Contacts = (props: IContacts) => {
    return (
        <section className={style.sectionContacts}>
            {props.message}
            Contacts
        </section>
    );
};

export default Contacts;