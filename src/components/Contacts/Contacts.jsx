import style from './Contacts.module.scss';

const Contacts = (props) => {
    return (
        <section className={style.sectionContacts}>
            {props.data.message}
        </section>
    );
};

export default Contacts;