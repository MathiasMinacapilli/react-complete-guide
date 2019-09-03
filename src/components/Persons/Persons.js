import React, { Component } from 'react';

// Components
import Person from './Person/Person';

// Errors
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

/* If when we execute shouldComponentUpdate we want to compare all the
props of the Component we should extends another Ract Component that is
the 'PureComponent', this Component has implemented the method shouldComponentUpdate
and it compares all the nextProps with the actual props. */
class Persons extends Component {

    /* static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    } */

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        // Optimizations in order that the Component does not always
        // updates hisself. Indeed it updates only when the persons array changes.
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
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

    /* This is runned right before the component is removed */
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
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