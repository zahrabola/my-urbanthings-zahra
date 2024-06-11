import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import AccordionAdult from "../Accordion/AccordionAdult";
import AccordionChild from "../Accordion/AccordionChild";

const Step3 = ({
  state,
  handleChange,
  activationTypeOptions,
  activationTypeOptionsChild,

}) => {
  return (
  
      <Container>
        <Row>
          <h2>Ticket type </h2>
        </Row>
        <hr />
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Adult Ticket</Accordion.Header>
            <Accordion.Body>
              <Row>
                <AccordionAdult
                  state={state}
                  handleChange={handleChange}
                  activationTypeOptions={activationTypeOptions}
                />
              </Row>
              <Row></Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Child Ticket</Accordion.Header>
            <Accordion.Body>
              <Row>
            <AccordionChild
             state={state}
             handleChange={handleChange}
             activationTypeOptionsChild={ activationTypeOptionsChild}/>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
       


        </Accordion>
      </Container>
 
  );
};

export default Step3;
/* <Form.Select
                  aria-label="Default select example"
                  name="activationType"
                  value={state.activationType}
                  onChange={handleChange}
                >
                  {activationTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Form.Select>*/
