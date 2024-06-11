import React from "react";
import Navigation from "./Navigation";
import { Steps, useSteps } from "react-step-builder";
import Step1 from "../Steps/Step1";
import Step2 from "../Steps/Step2";
import Step3 from "../Steps/Step3";
import Step4 from "../Steps/Step4";
import StepFinal from "../Steps/StepFinal"
import Container from "react-bootstrap/Container";

const MultiForm = () => {
  const { prev, next, total, current } = useSteps();

  return (
    <Container
      style={{ width: "28rem", border: "1px solid #ddd", padding: "10px" }}
    >
      <Steps>
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
        <StepFinal/>
      </Steps>
      <div>
      <Navigation prev={prev} next={next}  />
      </div>
    </Container>
  );
};

export default MultiForm;
