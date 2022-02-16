import React, { FC } from 'react';
import { WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';
import style from './FormsControls.module.scss';

type PropsType = {
    input: WrappedFieldInputProps
    meta: WrappedFieldMetaProps
    type?: string
    label?: string
    placeholder?: string
    cols?: number
    rows?: number
}

export const Input: FC<PropsType> = ({input, type, label, placeholder, meta:{touched, error, warning}} ) => {
    let hasError = touched && (error || warning);
    return (
        <div className={style.input + ' ' + (hasError ? style.error : '')}>
            <div><label >{label}: </label></div>
            <input {...input} type={type} placeholder={placeholder}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
} 

export const Checkbox: FC<PropsType> = ({input, type, label, meta:{touched, error, warning}}) => {
    return (
        <div >
            <input {...input} type={type}/>
            <label >{ label} </label>
        </div>
    );
}

export const Textarea: FC<PropsType> = ({input, cols, rows, placeholder, meta: {touched, error, warning}}) => {
    const hasError = touched && (error || warning);
    return (
        <div className={style.input + " " + (hasError ? style.error : '')}>
            <textarea {...input} cols={cols} rows={rows} placeholder={placeholder}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    );
}
