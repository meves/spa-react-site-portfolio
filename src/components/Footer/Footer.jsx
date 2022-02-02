import React from 'react';
import style from './Footer.module.scss';
import { connect } from "react-redux";
import { compose } from 'redux';
import { receiveAuthor, receiveData, receiveEmail, receiveTel } from '../../redux/selectors/footer-selectors';

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
        author: receiveAuthor(state),
        data: receiveData(state),
        email: receiveEmail(state),
        tel: receiveTel(state)
    };
}

export default compose( connect(mapStateToProps, null)(Footer) );
