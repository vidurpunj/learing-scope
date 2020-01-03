import React, { Component } from 'react';
// import Radium, { StyleRoot } from 'radium';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyleButton = styled.button`
  background-color: green;
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover{
    background-color: lightgreen;
    color:black;
  }
`;

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    }

    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((p, index) => {
        return <Person key={p.id} deleteMe={(event) => this.deleteMeHandler(event, index)} />
      })
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'

      }
    }
    let classes = [];
    if (this.state.persons.length < 2) {
      classes.push('red');
    }
    if (this.state.persons.length < 1) {
      classes.push('bold');
    }
    return (
      // <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>Hi am the paragraph which changes color dynamically !!</p>
          {/* <button style={style} onClick={this.togglePersonsHandler}>Toggle Users</button> */}
          <StyleButton onClick={this.togglePersonsHandler}>Styled Toggle Users</StyleButton>
          {
            persons
          }
        </div>
      // </StyleRoot>
    );
  }
}

// export default Radium(App);
export default App;
