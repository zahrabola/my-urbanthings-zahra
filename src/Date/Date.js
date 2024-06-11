import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import DatePicker from "react-datepicker";



const Date = ({ state, handleStartDateChange, handleEndDateChange }) => {
  return (
    <div>
      <Row>
        <Col>
          {" "}
          <Form.Label>Start Date </Form.Label>
        </Col>
        <Col>
          {" "}
          <Form.Label>End Date </Form.Label>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <DatePicker
            selected={state.startDate}
            onChange={handleStartDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
        <Col className="d-flex justify-content-center">
          <DatePicker
            selected={state.endDate}
            onChange={handleEndDateChange}
            dateFormat="dd/MM/yyyy"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Date;
