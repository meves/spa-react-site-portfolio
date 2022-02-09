import React, { FC } from 'react';

type PropsType = {
    value: string
    name: string
}

const Contact: FC<PropsType> = (props): JSX.Element => {
    return (
        <a href={props.value} key={props.name}>{props.name}</a>
    )
}

export default Contact;
