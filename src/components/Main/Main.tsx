import style from './Main.module.scss';

interface IMain {
    message: string;
}

const Main = (props: IMain) => {
    return (
        <section className={style.sectionMain}>
            {props.message}
            Main
        </section>
    );
};

export default Main;
