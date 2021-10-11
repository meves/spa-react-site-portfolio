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
<<<<<<< HEAD
                <div><span className={style.login}>{props.login}</span> 
                <button className={style.button} onClick={logout}>Logout</button></div> 
                : <NavLink className={style.login} to="/login">{props.loginText}</NavLink>}
=======
                <div><span className={style.loginButton}>{props.login}</span> 
                <button onClick={logout}>Logout</button></div> 
                : <NavLink className={style.loginButton} to="/login">{props.loginText}</NavLink>}
>>>>>>> ea1314901a69ba3dccd0bb20300f86d8ef72a6b4
            </div>
        </header>
    );
};

export default Header;
