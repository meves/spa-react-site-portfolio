import style from './Menu.module.scss';

interface IMenuProps {
    list: Array<string>;
}

const Menu = (props: IMenuProps) => {
    return (
        <nav className={style.nav}>
            <ul className={style.navList}>
                {props.list.map(item => <li className={style.navItem}>
                    <a className={style.navLink} href="/">{item}</a></li>)}
            </ul>
        </nav>
    );
};

export default Menu;