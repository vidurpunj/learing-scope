import React from 'react';

const Person = (props) =>  {
    return(
        <div>
            <p>I am Vidur Punj</p>
            <p onClick={props.deleteMe}>Delete Me</p>
        </div>
    );
};

export default Person;


