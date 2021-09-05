import style from './Header.module.scss';

interface IHeaderProps {
    logo: string;
    heading: string;
    login: string;
}

const Header = (props: IHeaderProps) => {
    return (
        <header className={style.header}>
            <div className={style.logo}>{props.logo}</div>
            <h1 className={style.heading}>{props.heading}</h1>
            <button className={style.login}>{props.login}</button>
        </header>
    );
};

export default Header;

