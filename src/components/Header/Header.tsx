import React, { FC, MouseEventHandler } from 'react';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    logo: string
    heading: string
    loginText: string
    isAuth: boolean
    login: string | null
    logoutUser: () => void
}

const Header: FC<PropsType> = (props): JSX.Element => {
    const logout: MouseEventHandler<HTMLButtonElement> | undefined = () => {
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
