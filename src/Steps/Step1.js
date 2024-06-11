import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
///import Form from 'react-bootstrap/Form';


const Step1 = ({ state, handleChange, handleAddFormSubmit }) => {
  return (
    
      <Form  onSubmit={handleAddFormSubmit} >
        <Row>
          {" "}
          <h2>Form</h2>{" "}
        </Row>
        <hr />
        
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="fname"
              value={state.fname}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lname"
              value={state.lname}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Email"
            type="email"
            required
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>

  );
};

export default Step1;
