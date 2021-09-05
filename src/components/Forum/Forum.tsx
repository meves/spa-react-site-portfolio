import style from './Forum.module.scss';

interface IForum {
    message: string;
}

const Forum = (props: IForum) => {
    return (
        <section className={style.sectionForum}>
            {props.message}
            Forum
        </section>
    );
};

export default Forum;