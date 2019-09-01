import React from 'react';

/* props is an object that has the properties of the component */
/* props.children refers to the plain text between the opening and closing tag of our
component */
const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;