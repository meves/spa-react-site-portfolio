import style from './Nav.module.scss';

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {props.list.map(item => <li className={style.navItem}>
                    <a className={style.navLink} href="/">{item}</a></li>)}
            </ul>
        </nav>
    );
};

export default Nav;