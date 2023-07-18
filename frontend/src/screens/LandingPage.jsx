import React from "react";
import { useNavigate } from "react-router-dom";
import { Image, Button, Container, Row, Col } from "react-bootstrap";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Image
            fluid
            src="/images/cat-tile5.jpg"
            alt="Cat adoption centre"
            style={{ height: "70vh", width: "100vw", borderRadius: "12px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Welcome to Cat Adoption Centre</h1>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Button
            variant="primary"
            className="d-block w-100"
            onClick={() => {
              navigate("/home");
            }}
          >
            Enter
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
