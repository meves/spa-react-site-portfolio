import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveIsAuth } from '../redux/selectors/auth-selectors';
import { AppStateType } from '../redux/redux-store';

const mapStateToProps = (state: AppStateType) => ({
    isAuth: receiveIsAuth(state)
})
type MapStatePropsType = ReturnType<typeof mapStateToProps>;
type BasePropsType = {
    isAuth: boolean
}
type InjectedPropsTypes = any;

export function withAuthRedirect<PropsType>(Component: React.ComponentType<PropsType>) {
    function RedirectComponent(props: BasePropsType & InjectedPropsTypes) {
        const {isAuth, ...restProps} = props;
        if (!isAuth) {
            return (<Redirect to="/login"/>);
        } else {
            return (<Component {...restProps as PropsType}/>);
        }
    }
    return connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(RedirectComponent);    
}
