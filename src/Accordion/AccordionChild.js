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
          name="activationTypeChild"
          value={state.activationTypeChild}
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
    <p>Selected Ticket Price: £{selectedPrice.toFixed(2)}</p>
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
                name="childprice"
                value="3"
                checked={state.childprice === "3"}
                onChange={handleChange}
              />{" "}
              £3.00
            </label>
          </Col>
          <Col>
            <label>
              <input
                type="radio"
                name="childprice"
                value="2"
                checked={state.childprice === "2"}
                onChange={handleChange}
              />{" "}
              £2.00
            </label>
          </Col>
          <Col>
            {" "}
            <label>
              <input
                type="radio"
                name="childprice"
                value="1"
                checked={state.childprice === "1"}
                onChange={handleChange}
              />{" "}
              £1.00
            </label>
          </Col>
        </Row>
      </div>
    );
}

export default AccordionChild;
