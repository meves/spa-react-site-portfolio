import style from './Preview.module.scss';

interface IPreview {
    message: string;
}

const Preview = (props: IPreview) => {
    return (
        <section className={style.preview}>
            {props.message}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam ratione deserunt? Veritatis, officia minus dolorum iure ipsa maxime ex aut tempore dolores, sequi minima perspiciatis harum illum rem facilis!
        </section>
    );
};

export default Preview;