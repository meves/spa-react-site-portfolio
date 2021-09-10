import style from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    const navItems = props.titles.map(t => (
        <li className={style.navItem} key={t.id}>
            <NavLink className={style.navLink} to={`/${t.title}`}>
                {t.title}        
            </NavLink>
        </li>)
    );
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {navItems}
            </ul>
        </nav>
    );
};

export default Nav;