import React from 'react';

const Contact = props => {
    return (
        <a href={props.value} key={props.name}>{props.name}</a>
    )
}

export default Contact;
