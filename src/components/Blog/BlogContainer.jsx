import Blog from "./Blog";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.blogPage.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default BlogContainer;
