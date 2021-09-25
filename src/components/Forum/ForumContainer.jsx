import Forum from "./Forum";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        message: state.forumPage.message
    };
}

const ForumContainer = connect(mapStateToProps, {})(Forum);

export default ForumContainer;
