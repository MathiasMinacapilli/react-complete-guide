import React from 'react';

// Styles
import classes from './Cockpit.css';

const cockpit = (props) => {
    
    const assignedClasses = []; 

    if(props.persons.length <= 2) {
      assignedClasses.push( classes.red ); //classes = ['red']
    }
    if(props.persons.length <= 1) {
      assignedClasses.push( classes.bold ); //classes = ['red', 'bold']
    }//We will get: "red bold"
  
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/* method.bind allows us to send parameters to the method called method. If we
            didn't do it that way and we only call the function like method(params), the method
            would be executed inmediately the page loads. */}
            <button onClick={props.togglePersons}>Toggle persons</button>
        </div>
    )
}

export default cockpit;