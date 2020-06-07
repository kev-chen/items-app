import React from 'react';
import './style.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

const Hero = (props) => {
  return (
    <Jumbotron className="px-0 py-0 bg-transparent jumbotron-fluid">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col className="text-center">
            {props.title && <h1 className="display-4 font-weight-normal">{props.title}</h1>}
            {props.subtitle && <h3 className="lead font-weight-lighter">{props.subtitle}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Hero;
