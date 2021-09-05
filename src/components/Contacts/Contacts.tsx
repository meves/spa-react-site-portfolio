import style from './Contacts.module.scss';

interface IContacts {
    message: string;
}

const Contacts = (props: IContacts) => {
    return (
        <section className={style.contacts}>
            {props.message}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut ea quasi! Autem, labore. Quibusdam consequatur officiis vero, necessitatibus ut fuga totam enim doloribus quaerat dolorem inventore natus quia eveniet?
        </section>
    );
};

export default Contacts;