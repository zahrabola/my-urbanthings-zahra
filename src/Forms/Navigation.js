import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Navigation = ({ prev, next }) => {
  return (
    <div>
      <Container style={{ padding: "20px" }}>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={prev}
              style={{ marginRight: 10 }}
            >
              {" "}
              Previous
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            {" "}
            <Button
              variant="primary"
              onClick={next}
              style={{ marginRight: 10 }}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navigation;
