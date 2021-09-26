import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setAuthUserData } from '../../redux/auth-reducer';

class  HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.authMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
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

export default connect(mapStateToProps, {setAuthUserData})( HeaderContainer);
