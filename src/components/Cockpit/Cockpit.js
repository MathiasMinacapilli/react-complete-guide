import React, { useEffect, useRef, useContext } from 'react';

// Styles
import classes from './Cockpit.css';

// Context
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        alert('Welcome!');
        toggleBtnRef.current.click(); // Shows the persons when the page loads for the first time
        // If we return a function here this will be executed after the component is removed
        // and the component it depends get unmounted (the last parameter sent)
        return () => {
            console.log('[Cockpit.js] clean up work in useEffect');
        }
    }, []); // If we give the function an empty array it will execute the first time the page loads

    /* useEffect takes a function that runs every render cycle */
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //HTTP request...
        setTimeout(() => {
            alert('Saved data to the cloud');
        }, 1000);
    }, [props.persons]); // Here you define which data will be watching useEffect in order
    // to execute if that data has changes

    useEffect(() => {
        if(props.isAuthenticated === true) {
            alert('Welcome User!');
        }
    }, [props.isAuthenticated]);

    const assignedClasses = []; 

    if(props.personsLength <= 2) {
      assignedClasses.push( classes.red ); //classes = ['red']
    }
    if(props.personsLength <= 1) {
      assignedClasses.push( classes.bold ); //classes = ['red', 'bold']
    }//We will get: "red bold"
  
    return <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* method.bind allows us to send parameters to the method called method. If we
        didn't do it that way and we only call the function like method(params), the method
        would be executed inmediately the page loads. */}
        <button 
            ref={toggleBtnRef}
            onClick={props.togglePersons}>Toggle persons</button>
        <button onClick={authContext.login}>Log in</button>
        { authContext.isAuthenticated ? <p>You're authenticated!</p> : <p>Must log in</p> }
    </div>
}

// React.memo stores a snapshot of the component and if it's inputs changes
// it will re render it.
export default React.memo(Cockpit);