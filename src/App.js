import React, { Component } from 'react';

//Styles
import classes from './App.css'; // This can be done becouse of the change in the config at webpack

//Components
import Persons from './components/Persons/Persons';
import Cockpit from './components/Cockpit/Cockpit';

// Errors
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  /* Constructor */
  constructor(props) {
    console.log('[App.js] Constructor');
    // Calls the constructor of Component
    super(props); 

    // Inititalizate state
    //state can be only managed inside a class that extends Component
    //If state changes React will re-render the page in order to show the changes
    this.state = {
      persons: [
        { id: 'p1', name: 'Mathias', age: 20 },
        { id: 'p2', name: 'Pepe', age: 999 },
        { id: 'p3', name: 'Roberto', age: 1 }
      ],
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    //return false; //If returning false the update will not be executed
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  //The last word, Handler, is in order to say that this method is not going
  //to be called but it will be executed when some event happens
  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Mathias Minacapilli'
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Pepe', age: 999 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    //console.log('Was clicked!');

    //The function in .find method is going to be executed for each object in the persons array
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] //using the spread operator is going to copy
    };
    //Alternative: const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // DON'T DO THIS: this.state.persons[0].name = 'Mathias Minacapilli'
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); //slice() copies the array into the left var
    const persons = [...this.state.persons]; //... spreads the array (like copying)
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons} 
            deleteClicked={this.deletePersonHandler}
            nameChanged={this.nameChangedHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          togglePersons={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
