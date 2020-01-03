import React from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
// import './Person.css';

const Person = (props) => {
    const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
    
        @media (min-width: 500px){
                width: 450px;
        }
    `
    const style = {
        // '@media (min-width: 500px)': {
        //     width: '450px'
        // }
    }
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p>I am Vidur Punj</p>
            <p onClick={props.deleteMe}>Delete Me</p>
        </StyledDiv>
        // </div>
    );
};

// export default Radium(Person);
export default Person;


