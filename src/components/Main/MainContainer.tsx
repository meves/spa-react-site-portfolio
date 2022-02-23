import React, { FC } from 'react';
import style from './Main.module.scss';
import { NavLink, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAithRedirect';
import { compose } from 'redux';
import { receiveWorks, receiveAbout, receiveMessage, receiveSkills } from "../../redux/selectors/main-selectors";
import About from './Info/About/About';
import Skills from './Info/Skills/Skills';
import Works from './Info/Works/Works';
import { AboutMeType, SkillsType, WorksType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
    message: string
    about: AboutMeType
    skills: SkillsType
    works: WorksType
}

const Main: FC<PropsType> = (props): JSX.Element => {
    return (
        <section className={style.sectionMain}>            
            <h2 className={style.heading}>{props.message}</h2>
            <ul className={style.navLinks}>
                <li><NavLink to="/main/about">About me</NavLink></li>
                <li><NavLink to="/main/skills">My Skills</NavLink></li>
                <li><NavLink to="/main/works">My Works</NavLink></li>
            </ul>
            <div className={style.sectionInfo}>
                <Switch>
                    <Route path="/main/about" render={ () => <About aboutData={props.about}/> } />
                    <Route path="/main/skills" render={ () => <Skills skillsData={props.skills}/> } />
                    <Route path="/main/works" render={ () => <Works worksData={props.works}/> } />            
                </Switch>
            </div>                
        </section>
    );
};

type MapStatePropsType = {
    message: string
    about: AboutMeType
    skills: SkillsType
    works: WorksType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        message: receiveMessage(state),
        about: receiveAbout(state),
        skills: receiveSkills(state),
        works: receiveWorks(state)
    };
}

export default compose<React.ComponentType>( 
    connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps, {}), 
    withAuthRedirect )(Main);
