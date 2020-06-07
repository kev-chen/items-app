import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContentContainer = (props) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm={10} md={7}>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default ContentContainer;
