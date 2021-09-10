import style from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>{props.header.logo}</div>
            <h1 className={style.heading}>{props.header.heading}</h1>
            <button className={style.login}>{props.header.login}</button>
        </header>
    );
};

export default Header;