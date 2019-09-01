import React, { useState } from 'react';

/* props is an object that has the properties of the component */
/* props.children refers to the plain text between the opening and closing tag of our
component */
const Person = (props) => {

    //personsState gives access to the actual state object
    //setPersonsState is a function that allows us to update the actual state
    const [ personsState, setPersonsState ] = useState({
        race: 'Human'
    });

    const changeRaceHandler = () => {
        setPersonsState({
            race: 'orc'
        })
    };

    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>My race is: {personsState.race}</p>
            <button onClick={changeRaceHandler}>Change race</button>
            <p>{props.children}</p>
        </div>
    );
};

export default Person;