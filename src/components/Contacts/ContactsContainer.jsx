import React from 'react';
import { Redirect } from 'react-router-dom';
import Contacts from "./Contacts";
import { connect } from 'react-redux';

class ContactsContainer extends React.Component {
    render() {
        if (!this.props.isAuth) {
            return (<Redirect to="/login"/>);
        }
        return (
            <Contacts {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.contactsPage.message,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {})(ContactsContainer);
