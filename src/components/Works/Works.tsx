import style from './Works.module.scss';

interface IWorks {
    message: string;
}

const Works = (props: IWorks) => {
    return (
        <section className={style.works}>
            {props.message}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium similique consectetur ratione, reprehenderit ipsa atque illum, numquam earum nemo totam iusto cumque obcaecati quos iste sit, quas quia. Iusto.
        </section>
    );
};

export default Works;