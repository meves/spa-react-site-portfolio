import React, { FC } from "react";
import { SkillsType, ItemSkillType } from '../../../../types/types';

type PropsType = {
    skillsData: SkillsType 
}

const Skills: FC<PropsType> = (props): JSX.Element => {
    const { heading, items } = props.skillsData;
    const listItems: Array<JSX.Element> = items.map((entry: ItemSkillType ) => <li key={entry.id}>{entry.item}</li>);        
    return (
        <section className="sectionSkills">
            <h3>{heading}</h3>
            <ul>
                {listItems}
            </ul>
        </section>
    );
};

export default Skills;
