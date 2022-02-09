import React, { FC } from 'react';
import style from './Footer.module.scss';
import { connect } from "react-redux";
import { receiveAuthorInfo } from '../../redux/selectors/footer-selectors';
import { AuthorInfoType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    authorInfo: AuthorInfoType
}

const Footer: FC<PropsType> = (props): JSX.Element => {
    const { author, date, email, tel } = props.authorInfo;
    return (
        <footer className={style.footer}>
            <span>Author: {author}</span>
            <span>Data: {date}</span>
            <span>email: {email}</span>
            <span>tel: {tel}</span>
        </footer>
    );
};

type MapStatePropsType = {
    authorInfo: AuthorInfoType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        authorInfo: receiveAuthorInfo(state)
    };
}

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Footer);
