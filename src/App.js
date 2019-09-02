import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state can be only managed inside a class that extends Component
  //If state changes React will re-render the page in order to show the changes
  state = {
    persons: [
      { id: 'asdf1', name: 'Mathias', age: 20 },
      { id: 'asdf2', name: 'Pepe', age: 999 },
      { id: 'asdf3', name: 'Roberto', age: 1 }
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

  nameChangedHandler = (event) => {
    //console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Mathias Minacapilli'
    this.setState({
      persons: [
        { name: 'Mathias', age: 20 },
        { name: event.target.value, age: 999 }
      ]
    })
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
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* method.bind allows us to send parameters to the method called method. If we
        didn't do it that way and we only call the function like method(params), the method
        would be executed inmediately the page loads. */}
        <button 
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
