import React, { useState } from "react";
import Navigation from "./Navigation";
import { Steps, useSteps } from "react-step-builder";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import StepFinal from "../Steps/StepFinal";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const MultiForm = () => {
  const { prev, next, total, current } = useSteps();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    name:"",
    
  });


  const handleChange = (e) => {
    const value =
    e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };


  console.log(state);

  return (
    <Container
      style={{ width: "28rem", border: "1px solid #ddd", padding: "10px" }}
    >
      <Form>
      <h2>Urban Things</h2>
        <Steps>
          <Step1 state={state} handleChange={handleChange} />
          <Step2  state={state}  handleChange={handleChange}/>
          <Step3 />
          <Step4 />
          <StepFinal />
        </Steps>
        <div>
          <Navigation prev={prev} next={next} />
        </div>
      </Form>
    </Container>
  );
};

export default MultiForm;
