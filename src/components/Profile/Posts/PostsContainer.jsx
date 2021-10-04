import Posts from "./Posts";
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        title: state.profilePage.myPost.title,
        posts: state.profilePage.myPost.posts
    };
}

export default compose(connect(mapStateToProps, {}))(Posts);
