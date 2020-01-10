import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    console.log('[Person.js] rendering...')
    return (
        <div className={classes.Person} >
            <p>{props.name}</p>
            <p onClick={props.deleteMe}>Delete Me</p>
            <input type="text" defaultValue={props.name} />
        </div>
    );
};

export default Person;


