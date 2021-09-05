import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';

interface INavProps {
    list: Array<{id: number, title: string}>;
}

const Nav = (props: INavProps) => {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {props.list.map(item => <li className={style.navItem}>
                    <NavLink className={style.navLink} to="/">{item}</NavLink></li>)}
            </ul>
        </nav>
    );
};

export default Nav;