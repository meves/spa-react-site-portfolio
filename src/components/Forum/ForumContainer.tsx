import Forum from "./Forum";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';
import { addNewMessage } from "../../redux/forum-reducer";
import { receiveMessages } from "../../redux/selectors/forum-selectors";
import { MessageType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type MapStatePropsType = {
    messages: Array<MessageType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        messages: receiveMessages(state)
    };
}

export default compose( 
    connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, { addNewMessage }), 
    withAuthRedirect )(Forum);
