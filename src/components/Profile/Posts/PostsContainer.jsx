import Posts from "./Posts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        title: state.profilePage.myPost.title,
        posts: state.profilePage.myPost.posts
    };
}

const PostsContainer = connect(mapStateToProps, {})(Posts);

export default PostsContainer;
