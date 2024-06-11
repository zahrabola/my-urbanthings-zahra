import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Date from "../Date/Date";
import Day from "../Date/Day";

const Step2 = ({
  state,
  handleStartDateChange,
  handleEndDateChange,
  handleChange,
}) => {
  return (
  
      <Container>
      <Row>
          <h2>Please ticket option</h2>
        </Row>
        <hr/>
        <Day state={state} handleChange={handleChange} />

        <Row>
          <h2>Please pick a date</h2>
        </Row>
        <hr/>
        <Date
          state={state}
          handleEndDateChange={handleEndDateChange}
          handleStartDateChange={handleStartDateChange}
        />
      </Container>

  );
};

export default Step2;
