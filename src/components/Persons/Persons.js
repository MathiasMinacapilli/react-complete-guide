import React from 'react';

// Components
import Person from './Person/Person';

// Errors
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const persons = props => {
    return (
        props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
              clickDelete={() => props.deleteClicked(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => props.nameChanged(event, person.id)} />
            </ErrorBoundary>
        })
    );
}

export default persons;