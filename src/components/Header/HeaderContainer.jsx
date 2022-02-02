import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { authMe, logoutUser } from '../../redux/auth-reducer';
import { compose } from 'redux';
import { receiveLogo, receiveHeading, receiveLoginText } from '../../redux/selectors/header-selectors';
import { receiveIsAuth, receiveLogin } from '../../redux/selectors/auth-selectors';

class  HeaderContainer extends React.Component {    
    render () {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logo: receiveLogo(state),
        heading: receiveHeading(state),
        loginText: receiveLoginText(state),
        isAuth: receiveIsAuth(state),
        login: receiveLogin(state)
    };
}

export default compose( connect(mapStateToProps, {authMe, logoutUser}) )( HeaderContainer );
