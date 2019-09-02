import React, { Component } from 'react';

// Components
import Person from './Person/Person';

// Errors
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

class Persons extends Component {
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