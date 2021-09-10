import Post from "./Post/Post";

const Posts = (props) => {
    const postItems = props.myPost.posts.map(post => <Post post={post} key={post.id}/>);
    return (
        <section className="posts">
            <h3>{props.myPost.title}</h3>
            {postItems}
        </section>
    );
};

export default Posts;
