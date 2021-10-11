import React from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const logout = () => {
        props.logoutUser();
    }
    return (
        <header className={style.header}>
            <div className={style.logo}>{props.logo}</div>
            <h1 className={style.heading}>{props.heading}</h1>
            <div>
                {props.isAuth ? 
                <div><span className={style.login}>{props.login}</span> 
                <button className={style.button} onClick={logout}>Logout</button></div> 
                : <NavLink className={style.login} to="/login">{props.loginText}</NavLink>}
            </div>
        </header>
    );
};

export default Header;
