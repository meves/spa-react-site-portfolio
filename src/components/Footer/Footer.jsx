import React from 'react';
import style from './Footer.module.scss';
import { connect } from "react-redux";
import { compose } from 'redux';

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

const mapStateToProps = (state) => {
    return {
        author: state.footerPage.author,
        data: state.footerPage.data,
        email: state.footerPage.email,
        tel: state.footerPage.tel
    };
}

export default compose(connect(mapStateToProps, null)(Footer));
