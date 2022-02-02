import React from 'react';
import style from './About.module.scss';

const About = (props) => {
    return (
        <section className={style.sectionAbout}>
            <h3>{props.data.heading}</h3>
            <img src={props.data.image} alt="Avatar" />
            <p>{props.data.text}</p>
        </section>
    );
};

export default About;
