import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { required, email, minLength8 } from '../../utils/validators/validators';
import { Input, Checkbox } from '../common/FormsControls/FormsControls';

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
                <Field component={Checkbox} type="checkbox" label="remember me" 
                       name="rememberMe"/>
            </div>
            { props.captchaUrl &&
                <div>
                    <img src={props.captchaUrl} alt="captcha" />
                    <Field component={Input} type="text" label="captcha"
                           name="captcha" validate={[required]}/>
                </div>
            }
            {props.error && <div>{props.error}</div>}
            <button>Login</button>
        </form>
    );
}

export default reduxForm({ form: 'login' })(LoginForm);
