import React from 'react';
import classes from './Person.css';

const Person = (props) => {
    const random = Math.random();
    if (random > 0.7) {
        throw new Error('Something went wrong');
    }
    return (
        <div className={classes.Person} >
            <p>{props.name}</p>
            <p onClick={props.deleteMe}>Delete Me</p>
        </div>
    );
};

export default Person;


