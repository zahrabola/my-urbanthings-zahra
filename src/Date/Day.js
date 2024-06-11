import React from "react";
import Form from "react-bootstrap/Form";
const Day = ({ state, handleChange }) => {
  return (
    <div>
      <Form.Check
        inline
        label="Day"
        name="name"
        type="radio"
        value="day"
        checked={state.name === "day"}
        onChange={handleChange}
      />

      <Form.Check
        inline
        label="Week"
        name="name"
        type="radio"
        value="week"
        checked={state.name === "week"}
        onChange={handleChange}
      />

      <Form.Check
        inline
        label="Month"
        name="name"
        type="radio"
        value="month"
        checked={state.name === "month"}
        onChange={handleChange}
      />
    </div>
  );
};

export default Day;
