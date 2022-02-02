import Forum from "./Forum";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';
import { addNewMessage } from "../../redux/forum-reducer";
import { receiveMessages } from "../../redux/selectors/forum-selectors";

const mapStateToProps = (state) => {
    return {
        messages: receiveMessages(state)
    };
}

export default compose( connect(mapStateToProps, { addNewMessage }), withAuthRedirect )(Forum);
