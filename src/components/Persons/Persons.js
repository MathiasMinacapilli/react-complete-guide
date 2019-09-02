import React from 'react';

import Person from './Person/Person';

const persons = props => {
    return (
        props.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
              clickDelete={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
        })
    );
}