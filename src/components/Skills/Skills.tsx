import style from './Skills.module.scss';

interface ISkills {
    message: string;
}

const Skills = (props: ISkills) => {
    return (
        <section className={style.skills}>
            {props.message}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sint nam eum, possimus aliquid, tempore aliquam fugit eaque ipsum tempora magnam ex? Nulla odit tenetur nesciunt, nam nisi aut non.
        </section>
    );
};

export default Skills;