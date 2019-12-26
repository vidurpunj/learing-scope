import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'manu', age: 30 },
      { id: 3, name: 'Jessica', age: 26 }
    ],
    otherState: 'Some Other state',
    username: 'Super Vidur Punj',
    showPersons: false,
  }
  
  togglePersonsHandler = () => {
    console.log('Toggle Person');
    const doesShow = this.state.showPersons;
    console.log(doesShow);
    this.setState({showPersons: !doesShow});
  }

  deleteMeHandler = (event, index) => {
    console.log('called Delete Me');
    console.log(event.target);
    const persons = [...this.state.persons];
    console.log(persons); 
    console.log('Index = '+ index); 
    const updatedPersons = persons.splice(index, 1);
    console.log(updatedPersons);
    // this.setState({persons: updatedPersons});
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curson: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((p, index) => {
        return <Person key={p.id} deleteMe={(event) => this.deleteMeHandler(event, index) } />
      })
      style.backgroundColor= 'red';
    }
    let classes = [];
    if(this.state.persons.length < 2){
       classes.push('red');
    }
    if (this.state.persons.length < 1){
      classes.push('bold');
    } 
    return (
      <div className="App">
        <p className={classes.join(' ')}>Hi am the paragraph which changes color dynamically !!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button>
        {
          persons
        }
      </div>
    );
  }
}

export default App;
