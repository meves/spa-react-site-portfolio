import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { authMe, logoutUser } from '../../redux/auth-reducer';
import { compose } from 'redux';

class  HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }
    render () {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logo: state.headerPage.logo,
        heading: state.headerPage.heading,
        loginText: state.headerPage.loginText,
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}

export default compose( connect( mapStateToProps, { authMe, logoutUser } ) )( HeaderContainer );
