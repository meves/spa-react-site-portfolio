import style from './Blog.module.scss';
import AddPost from './AddPost/AddPost';
import Posts from './Posts/Posts';

const Blog = (props) => {
    return (
        <section className={style.sectionBlog}>
            {props.data.message}
            <AddPost addPost={props.data.addPost} 
                     dispatch={props.dispatch}
            />
            <Posts myPost={props.data.myPost}/>
        </section>
    );
};

export default Blog;