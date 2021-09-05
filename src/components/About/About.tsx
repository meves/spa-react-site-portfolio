import style from './About.module.scss';

interface IAbout {
    message: string;
}

const About = (props: IAbout) => {
    return (
        <section className={style.about}>
            {props.message}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus suscipit tenetur, incidunt dolorum magnam ex ab sunt molestias veniam. Adipisci eos id totam aliquid delectus minus itaque sint porro ratione?
        </section>
    );
};

export default About;