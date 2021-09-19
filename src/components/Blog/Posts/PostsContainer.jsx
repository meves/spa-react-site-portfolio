import Posts from "./Posts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.blogPage.myPost.title,
        posts: state.blogPage.myPost.posts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
