import React from 'react';
import style from './Footer.module.scss';

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <span>Author: {props.author}</span>
            <span>Data: {props.data}</span>
            <span>email: {props.email}</span>
            <span>tel: {props.tel}</span>
        </footer>
    );
};

export default Footer;
