import Contacts from "./Contacts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.contactsPage.message
    };
}

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;
