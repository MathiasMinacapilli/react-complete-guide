import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //state can be only managed inside a class that extends Component
  //If state changes React will re-render the page in order to show the changes
  state = {
    persons: [
      { name: 'Mathias', age: 20 },
      { name: 'Pepe', age: 999 },
      { name: 'Roberto', age: 1 }
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
        { 
        //if this.state.showPersons is true the code block is going to be shown
        this.state.showPersons ? 
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              /* using an arrow function allow us to send the parameters just putting them
              like calling the function but is returned by the arrow function, so it is not
              executed inmediately the page loads. 
              CAN BE INEFFICIENT, IN BIG APPS IS PREFERED TO USE .bind */
              click={() => this.switchNameHandler('xMathM')} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}></Person>
          </div> 
        //if this.state.showPersons is false then show nothing (null)
        : null 
        }
      </div>
    );
  }
}

export default App;
