import Posts from "./Posts";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { receiveTitle, receivePosts } from "../../../redux/selectors/profile-selectors"; 

const mapStateToProps = (state) => {
    return {
        title: receiveTitle(state),
        posts: receivePosts(state)
    };
}

export default compose( connect(mapStateToProps, {}) )(Posts);
