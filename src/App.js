import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import classes from'./App.css';
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
    this.setState({ showPersons: !doesShow });
  }
  deleteMeHandler = (event, index) => {
    console.log('called Delete Me');
    console.log(event.target);
    const persons = [...this.state.persons];
    console.log(persons);
    console.log('Index = ' + index);
    const updatedPersons = persons.splice(index, 1);
    console.log(updatedPersons);
    // this.setState({persons: updatedPersons});
  }


  render() {

    let persons = null;
    let btnClass = ''; 

    if (this.state.showPersons) {
      persons = this.state.persons.map((p, index) => {
        return <Person key={p.id} deleteMe={(event) => this.deleteMeHandler(event, index)} />
      })
     btnClass = classes.Red;   // Add Red clases if the showPerson in false 
    }


    let assignedClasses = [];
    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length < 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}>Hi am the paragraph which changes color dynamically !!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Styled Toggle Users</button>
          {
            persons
          }
        </div>
    );
  }
}

export default App;
