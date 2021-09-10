import style from './Main.module.scss';
import { NavLink, Route } from 'react-router-dom';
import About from './Info/About/About';
import Skills from './Info/Skills/Skills';
import Works from './Info/Works/Works';

const Main = (props) => {
    return (
        <section className={style.sectionMain}>            
            <h2 className={style.heading}>{props.data.message}</h2>
            <ul className={style.navLinks}>
                <li><NavLink to="/main/about">About me</NavLink></li>
                <li><NavLink to="/main/skills">My Skills</NavLink></li>
                <li><NavLink to="/main/works">My Works</NavLink></li>
            </ul>
            <div className={style.sectionInfo}>
                <Route path="/main/about" render={ () => <About data={props.data.about}/> } />
                <Route path="/main/skills" render={ () => <Skills data={props.data.skills}/> } />
                <Route path="/main/works" render={ () => <Works data={props.data.works}/> } />            
            </div>                
        </section>
    );
};

export default Main;