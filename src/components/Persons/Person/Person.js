import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    return (
        <div className={classes.Person} >
            <p>{props.name}</p>
            <p onClick={props.deleteMe}>Delete Me</p>
        </div>
    );
};

export default Person;


