import React, { Component } from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/auth-reducer';
import { receiveLogo, receiveHeading, receiveLoginText } from '../../redux/selectors/header-selectors';
import { receiveIsAuth, receiveLogin } from '../../redux/selectors/auth-selectors';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    logo: string
    heading: string
    loginText: string
    isAuth: boolean
    login: string | null
    logoutUser: () => void
}

class  HeaderContainer extends Component<PropsType> {    
    render () {
        return (
            <Header {...this.props} />
        );
    }
}

type MapStatePropsType = {
    logo: string
    heading: string
    loginText: string
    isAuth: boolean
    login: string | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        logo: receiveLogo(state),
        heading: receiveHeading(state),
        loginText: receiveLoginText(state),
        isAuth: receiveIsAuth(state),
        login: receiveLogin(state)
    };
}

type MapDispatchPropsType = {
    logoutUser: () => void
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { logoutUser })
    ( HeaderContainer );
