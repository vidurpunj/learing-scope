import React from 'react';
import Person from './Person/Person';

const persons = (props) => persons.map((person, index) => {
    return <Person
        click = {() => props.clicked(index)}
        name={person.name}
        key={person.id}
        changed={(event) => this.changed(event, person.id)} />
});

export default persons;