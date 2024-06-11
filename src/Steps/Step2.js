import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Day from "../Date/Day";


const Step2 = ({ state,  handleChange}) => {
    return (
        <div>
          <Container>
      <Row>
          <h2>Please ticket option</h2>
        </Row>
        <hr/>
        <Day state={state} handleChange={handleChange} />

       
      </Container>
        </div>
    );
}

export default Step2;
