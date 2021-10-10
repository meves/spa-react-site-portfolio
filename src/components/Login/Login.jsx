import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { required, email, minLength8 } from '../../utils/validators/validators';
import { Input, CheckBox } from '../common/FormsControls/FormsControls';
import { loginUser } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';

const LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <div >
                <Field component={Input} type="email" label="email" placeholder="email" 
                       name="email" validate={[required, email]}/>
            </div>
            <div >
                <Field component={Input} type="password" label="password" placeholder="password"
                       name="password" validate={[required, minLength8]}/>
            </div>
            <div >
                <Field component={CheckBox} type="checkbox" label="remember me" 
                       name="rememberMe"/>
            </div>
            {props.error && <div>{props.error}</div>}
            <button>Login</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const login = (values) => {
        const {email, password, rememberMe} = values;
        props.loginUser(email, password, rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={login}/>        
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginUser})(Login);
