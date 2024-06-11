import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AccordionChild = ({activationTypeOptionsChild, handleChange, state }) => {

    const getPriceSelected = (selectedValue) => {
        return (
            activationTypeOptionsChild.find((option) => option.value === selectedValue)
            ?.price || null
        );
      };
    
      const selectedPrice = getPriceSelected(state.activationTypeChild);
    return (
        <div>
        <Form.Select
          aria-label="Default select example"
          name="activationType"
          value={state.activationType}
          onChange={handleChange}
        >
          {activationTypeOptionsChild.map((option) => (
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
            {" "}
            <label>
              <input
                type="radio"
                name="price"
                value="8"
                checked={state.price === "8"}
                onChange={handleChange}
              />{" "}
              £8.00
            </label>
          </Col>
          <Col>
            <label>
              <input
                type="radio"
                name="price"
                value="4"
                checked={state.price === "4"}
                onChange={handleChange}
              />{" "}
              £4.00
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              <input
                type="radio"
                name="price"
                value="6"
                checked={state.price === "6"}
                onChange={handleChange}
              />{" "}
              £6.00
            </label>
          </Col>
        </Row>
      </div>
    );
}

export default AccordionChild;
