import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AccordionAdult = ({ activationTypeOptions, handleChange, state }) => {
  const getPriceSelected = (selectedValue) => {
    return (
      activationTypeOptions.find((option) => option.value === selectedValue)
        ?.price || null
    );
  };

  const selectedPrice = getPriceSelected(state.activationType);

  return (
    <div>
      <Form.Select
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
      </Form.Select>
      <div className="p-2">
        {selectedPrice && (
          <p> Selected Ticket Price: £{selectedPrice.toFixed(2)}</p>
        )}
      </div>
      <div>
        <Form.Check
          type="checkbox"
          name="isStatus"
          label="Please Check"
          checked={state.isStatus}
          onChange={handleChange}
        />
      </div>
      <div>
        <h5>Please Check the Correct Ticket Price </h5>
      </div>
      <Row>
        <Col>

        <Form.Check
        inline
        label="£8.00"
        name="price"
        type="radio"
        value={"8"}
        checked={state.price === "8"}
        onChange={handleChange}
      />
        
        </Col>
        <Col>
        <Form.Check
            inline
            label="£4.00"
            name="price"
            type="radio"
            value={"4"}
            checked={state.price === "4"}
            onChange={handleChange}
          />
        </Col>
        <Col>
        <Form.Check
            inline
            label="£6.00"
            name="price"
            type="radio"
            value={"6"}
            checked={state.price === "6"}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AccordionAdult;
