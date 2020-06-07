import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContentContainer = (props) => {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={10}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default ContentContainer;
