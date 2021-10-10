import React from 'react';
import style from './FormsControls.module.scss';

export const Input = ({input, type, label, placeholder, meta:{touched, error, warning}} ) => {
    let hasError = touched && (error || warning);
    return (
        <div className={style.input + ' ' + (hasError ? style.error : '')}>
            <div><label >{label}: </label></div>
            <input {...input} type={type} placeholder={placeholder}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
} 

export const CheckBox = ({input, type, label, meta:{touched, error, warning}}) => {
    return (
        <div >
            <label >{label} </label>
            <input {...input} type={type}/>
        </div>
    );
}