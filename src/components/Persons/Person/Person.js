import React, { Component, useState } from 'react';

// Styles
import classes from './Person.css';

// Auxiliary
import Aux from '../../../hoc/Auxilliary';

/* props is an object that has the properties of the component */
/* props.children refers to the plain text between the opening and closing tag of our
component */
class Person extends Component {
    render() {
        //personsState gives access to the actual state object
        //setPersonsState is a function that allows us to update the actual state
        /* 
        const [ personsState, setPersonsState ] = useState({
            race: 'Human'
        });

        const changeRaceHandler = () => {
            setPersonsState({
                race: 'orc'
            });
        }; 
        <p>My race is: {personsState.race}</p>
        <button onClick={changeRaceHandler}>Change race</button>
        */

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
                
                <p>{this.props.children}</p>
                <button onClick={this.props.clickDelete}>Delete</button>
            </div>
        );
    }
};

//If I put Radium(Person) I get an error
export default Person;