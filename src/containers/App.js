import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js, constructer]');
    // we can intialize the state inside a constructer
  //   this.state = {
  //     persons: [
  //       { id: 1, name: 'Max', age: 28 },
  //       { id: 2, name: 'manu', age: 30 },
  //       { id: 3, name: 'Jessica', age: 26 }
  //     ],
  //     otherState: 'Some Other state',
  //     username: 'Super Vidur Punj',
  //     showPersons: false,
  //   }
  } 
  
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

  // UNSAFE_componentWillMount(){
    // console.log('Component will Mount');
  // }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerviceStateFromProps', props);
    return (state);
  }

  
  componentDidMount(){
    console.log('Component Did Mount');
  }
  
  render() {
    console.log('[App.js] render');
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons =
          <Persons persons={this.state.persons}
            clicked={this.deleteMeHandler}
            changed={this.namChangedHandler} />;
      btnClass = classes.Red;   // Add Red clases if the showPerson in false 
    }

    return (
        <div className={classes.App}>
          <Cockpit showPersons={this.state.showPersons}
           persons={this.state.persons}
           clicked={this.togglePersonsHandler}
           title={this.props.appTitle} />
          {
            persons
          }
        </div>
    );
  }
}

export default App;
