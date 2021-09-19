import Forum from "./Forum";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        message: state.forumPage.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const ForumContainer = connect(mapStateToProps, mapDispatchToProps)(Forum);

export default ForumContainer;
