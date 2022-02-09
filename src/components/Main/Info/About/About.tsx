import React, { FC } from 'react';
import { AboutMeType } from '../../../../types/types';
import style from './About.module.scss';

type PropsType = {
    aboutData: AboutMeType
}

const About: FC<PropsType> = (props): JSX.Element => {
    const { heading, imageUrl, text } = props.aboutData;
    return (
        <section className={style.sectionAbout}>
            <h3>{heading}</h3>
            <img src={imageUrl} alt="Avatar" />
            <p>{text}</p>
        </section>
    );
};

export default About;
