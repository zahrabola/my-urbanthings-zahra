import React, { useState } from "react";
import Navigation from "./Navigation";
import { Steps, useSteps } from "react-step-builder";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import StepFinal from "../Steps/StepFinal";
import Container from "react-bootstrap/Container";


const MultiForm = () => {
  const { prev, next, total, current } = useSteps();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    status: "Published",
    startDate: new Date(),
    endDate: new Date(),
    activationType: "",
    activationTypeChild: "",
    price: "",
    name:"",
    childprice: "",
    isStatus: false,
    currency: "GBP",
    field0: "1",
    field1: "2",
    productId: "BZ02",
    operatorId: "12345",
  });

  const activationTypeOptions = [
    { value: "", label: "Select Activation Type" },
    { value: "OnPurchased", label: "Standard", price: 8 },
    { value: "OnAdvance", label: "Advance", price: 4 },
    { value: "onOffPeak", label: "Off Peak", price: 6 },
  ];

  const activationTypeOptionsChild = [
    { value: "", label: "Select Activation Type" },
    { value: "OnPurchasedChild", label: "Standard", price: 3 },
    { value: "OnAdvanceChild", label: "Advance", price: 2 },
    { value: "onOffPeakChild", label: "Off Peak", price: 1 },
  ];

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  
  const handleStartDateChange = (date) => {
    setState({ ...state, startDate: date });
  };

  const handleEndDateChange = (date) => {
    setState({ ...state, endDate: date });
  };

  
  const handleAddFormSubmit = (e) => {
    e.preventDefault();
  };

  console.log(state);

  return (
    <Container
      style={{ width: "28rem", border: "1px solid #ddd", padding: "10px" }}
    >     <Form onSubmit={handleAddFormSubmit} >
   
        <h2>Urban Things</h2>
        <Steps>
          <Step1 state={state} handleChange={handleChange} />
          <Step2
            state={state}
            handleStartDateChange={handleStartDateChange}
            handleEndDateChange={handleEndDateChange}
            handleChange={handleChange}
          />
          <Step3
            state={state}
            handleChange={handleChange}
            activationTypeOptions={activationTypeOptions}
            activationTypeOptionsChild={activationTypeOptionsChild}
          />
          <Step4 state={state} />
          <StepFinal state={state} />
        </Steps>
        <div>
        <Navigation prev={prev} next={next} current={current} total={total} />
        </div>
        </Form>
    </Container>
  );
};

export default MultiForm;
