import React from 'react';
import style from './Blog.module.scss';
import AddPostContainer from './AddPost/AddPostContainer';
import PostsContainer from './Posts/PostsContainer';

const Blog = (props) => {
    return (
        <section className={style.sectionBlog}>
            {props.message}
            <AddPostContainer/>
            <PostsContainer/>
        </section>
    );
};

export default Blog;
