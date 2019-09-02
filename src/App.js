import React, { Component } from 'react';

//Styles
import './App.css';

//Components
import Person from './Person/Person';

class App extends Component {
  //state can be only managed inside a class that extends Component
  //If state changes React will re-render the page in order to show the changes
  state = {
    persons: [
      { id: 'p1', name: 'Mathias', age: 20 },
      { id: 'p2', name: 'Pepe', age: 999 },
      { id: 'p3', name: 'Roberto', age: 1 }
    ],
    showPersons: false
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              clickDelete={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }

    let classes = []; 

    if(this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }//We will get: "red bold"
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        {/* method.bind allows us to send parameters to the method called method. If we
        didn't do it that way and we only call the function like method(params), the method
        would be executed inmediately the page loads. */}
        <button 
          key="switch-name-btn"
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Mathias Minacapilli')}>Switch Name</button>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
