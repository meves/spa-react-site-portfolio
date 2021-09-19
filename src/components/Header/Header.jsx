import React from 'react';
import style from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>{props.logo}</div>
            <h1 className={style.heading}>{props.heading}</h1>
            <button className={style.login}>{props.login}</button>
        </header>
    );
};

export default Header;
