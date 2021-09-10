import style from './Forum.module.scss';

const Forum = (props) => {
    return (
        <section className={style.sectionForum}>
            {props.data.message}
        </section>
    );
};

export default Forum;