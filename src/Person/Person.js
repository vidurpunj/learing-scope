import React from 'react';
import classes from './Person.css';

const Person = (props) => {
   
    return (
        <div className={classes.Person} >
            <p>I am Vidur Punj</p>
            <p onClick={props.deleteMe}>Delete Me</p>
         </div>
    );
};

export default Person;


