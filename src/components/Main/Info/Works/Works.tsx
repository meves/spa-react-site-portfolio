import React, { FC } from "react";
import { WorksType } from "../../../../types/types";

type PropsType = {
    worksData: WorksType
}

const Works: FC<PropsType> = (props): JSX.Element => {
    const { heading, preview, desc, ref } = props.worksData;
    return (
        <section className="sectionWorks">
            <h3>{heading}</h3>
            <img src={preview} alt="Preview" />
            <p>{desc}</p>
            <a href="/">{ref}</a>
        </section>
    );
};

export default Works;
