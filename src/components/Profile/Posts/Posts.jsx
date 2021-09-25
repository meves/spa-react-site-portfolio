import React from "react";
import Post from "./Post/Post";

const Posts = (props) => {
    
    const postItems = props.posts.map(post => <Post post={post} key={post.id}/>);
    return (
        <section className="posts">
            <h3>{props.title}</h3>
            {postItems}
        </section>
    );
};

export default Posts;
