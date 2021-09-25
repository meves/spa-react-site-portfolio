import Contacts from "./Contacts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        message: state.contactsPage.message
    };
}

const ContactsContainer = connect(mapStateToProps, {})(Contacts);

export default ContactsContainer;
