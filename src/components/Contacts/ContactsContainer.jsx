import Contacts from "./Contacts";
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAithRedirect";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        message: state.contactsPage.message
    };
}

export default compose(connect(mapStateToProps, {}),
                       withAuthRedirect)(Contacts);
