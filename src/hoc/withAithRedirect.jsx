import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveIsAuth } from '../redux/selectors/auth-selectors';

const mapStateToProps = (state) => {
    return {
        isAuth: receiveIsAuth(state)
    };
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return (<Redirect to="/login"/>);
            } else {
                return (<Component {...this.props}/>);
            }
        }        
    }
    return connect(mapStateToProps, {})(RedirectComponent);    
}
