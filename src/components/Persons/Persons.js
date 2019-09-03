import React, { Component } from 'react';

// Components
import Person from './Person/Person';

// Errors
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Persons extends Component {

    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    } */

    shouldComponentUpdate(nextProps, nextStae) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true; 
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        // Should return something that you are going to use in the method componentDidUpdate
        return { message: 'Snapshot!' }; 
    }

    /* Hook that executes when the component get updated */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        return (
            this.props.persons.map((person, index) => {
                return <ErrorBoundary key={person.id}>
                <Person 
                clickDelete={() => this.props.deleteClicked(index)}
                name={person.name} 
                age={person.age}
                changed={(event) => this.props.nameChanged(event, person.id)} />
                </ErrorBoundary>
            })
        );
    }
}

export default Persons;