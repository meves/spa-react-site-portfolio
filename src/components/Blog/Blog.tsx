import style from './Blog.module.scss';

interface IBlog {
    message: string;
}

const Blog = (props: IBlog) => {
    return (
        <section className={style.sectionBlog}>
            {props.message}
            Blog
        </section>
    );
};

export default Blog;
