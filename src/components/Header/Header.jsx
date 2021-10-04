import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>{props.logo}</div>
            <h1 className={style.heading}>{props.heading}</h1>
            <button className={style.loginButton}>
                {props.isAuth ? props.login 
                : <NavLink to="/login">{props.loginText}</NavLink>}
            </button>
        </header>
    );
};

export default Header;
