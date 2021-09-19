import React from "react";

const Skills = (props) => {
    const listItems = props.data.items.map(entry => <li key={entry.id}>{entry.item}</li>);        
    return (
        <section className="sectionSkills">
            <h3>{props.data.heading}</h3>
            <ul>
                {listItems}
            </ul>
        </section>
    );
};

export default Skills;