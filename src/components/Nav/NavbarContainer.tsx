import React, { FC } from 'react';
import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { receiveTitles } from "../../redux/selectors/navbar-selectors";
import { NavbarTitleType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    titles: Array<NavbarTitleType>
}

const Navbar: FC<PropsType> = (props): JSX.Element => {
    const navItems: Array<JSX.Element> = props.titles.map((t: NavbarTitleType) => (
        <li className={styles.navItem} key={t.id}>
            <NavLink className={styles.navLink} to={`/${t.title}`}>
                {t.title}        
            </NavLink>
        </li>)
    );
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                { navItems }
            </ul>
        </nav>
    );
};

type MapStatePropsType = {
    titles: Array<NavbarTitleType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    titles: receiveTitles(state)    
})

export default connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {})(Navbar);;
