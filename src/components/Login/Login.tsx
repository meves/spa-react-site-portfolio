import React, { FC } from 'react';
import LoginReduxForm from './LoginForm';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import { receiveIsAuth, receiveCaptchaUrl } from '../../redux/selectors/auth-selectors';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    isAuth: boolean
    captchaUrl: string | null
    loginUser: (email: string, password: string, rememberMe: boolean, captcha: boolean|undefined) => void
}

const Login: FC<PropsType> = (props): JSX.Element => {
    const login = (values: any) => {
        const {email, password, rememberMe, captcha} = values;
        props.loginUser(email, password, rememberMe, captcha);
    }
    if (props.isAuth) {
        return <Redirect to="/" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={login} 
                        //  captchaUrl={props.captchaUrl}
            />        
        </div>
    );
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: receiveIsAuth(state),
    captchaUrl: receiveCaptchaUrl(state)
})

type MapDispatchPropsType = {
    loginUser: (email: string, password: string, rememberMe: boolean, captcha: boolean|undefined) => void
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { loginUser })(Login);
