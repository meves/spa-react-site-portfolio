import Forum from "./Forum";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';
import { addNewMessage } from "../../redux/forum-reducer";

const mapStateToProps = (state) => {
    return {
        messages: state.forumPage.messages
    };
}

export default compose(connect(mapStateToProps, { addNewMessage }), withAuthRedirect)(Forum);
