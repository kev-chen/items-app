import React from 'react';
import { Card, Container, Row, Col, Accordion } from 'react-bootstrap';

import Item from '../Item/Item';
import CreateForm from '../CreateForm/CreateForm';

const ItemTable = (props) => {
  return (
    <Container fluid={true}>
      {/* Header */}
      <Card>
        <Card.Header>
          <Row className="justify-content-center">
            {props.showId && (
              <Col xs={2} md={1}>
                <strong>Id</strong>
              </Col>
            )}
            <Col xs={7} md={props.showId ? 5 : 6}>
              <strong>Item Name</strong>
            </Col>
            <Col xs={3} md={props.showId ? 3 : 6}>
              <strong>Cost</strong>
            </Col>
            {props.editable && <Col xs={12} md={3}></Col>}
          </Row>
        </Card.Header>
      </Card>

      {/* Data */}
      <div>
        <Accordion className="px-0" defaultActiveKey="0">
          {props.items.map((item) => (
            <Item
              key={item.id ? item.id.toString() : `${item.itemName} ${item.cost}`}
              showId={props.showId}
              editable={props.editable}
              item={item}
              update={props.update}
            />
          ))}
        </Accordion>
      </div>

      {/* Footer */}
      {props.editable && (
        <Card>
          <Card.Header>
            <Row className="justify-content-center">
              <Col md={12}>
                <CreateForm update={props.update} />
              </Col>
            </Row>
          </Card.Header>
        </Card>
      )}
    </Container>
  );
};

export default ItemTable;
