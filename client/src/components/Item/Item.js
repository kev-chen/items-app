import React from 'react';
import { Button, Accordion, Card, useAccordionToggle, Table, Row, Col } from 'react-bootstrap';

import ItemsService from '../../services/ItemsService';
import UpdateForm from '../UpdateForm/UpdateForm';

function CustomToggle({ children, toggleAccordion }) {
  return (
    <Button className="mx-1 my-xs-1" variant="outline-warning" size="sm" onClick={toggleAccordion}>
      {children}
    </Button>
  );
}

const Item = (props) => {
  let { item } = props;

  const toggleAccordion = useAccordionToggle(item.id ? item.id.toString() : null);

  const onDeletePress = async () => {
    if (props.editable) {
      console.log('deleting item ' + item.id);
      await ItemsService.deleteItem(item.id);
      props.update();
    }
  };

  return (
    <Card className="p-0">
      <Card.Header>
        <Row className="justify-content-center align-middle">
          {props.showId && (
            <Col xs={2} md={1} className="d-flex align-items-center">
              {item.id}
            </Col>
          )}
          <Col xs={7} md={props.showId ? 5 : 6} className="d-flex align-items-center">
            {item.itemName}
          </Col>
          <Col xs={3} md={props.showId ? 3 : 6} className="d-flex align-items-center">
            {item.cost}
          </Col>
          {props.editable && (
            <Col xs={12} md={3} className="d-flex mt-4 mt-md-0 justify-content-center justify-content-md-end">
              <CustomToggle toggleAccordion={toggleAccordion}>Edit</CustomToggle>
              <Button className="mx-1 my-xs-1" variant="outline-danger" size="sm" onClick={onDeletePress}>
                Delete
              </Button>
            </Col>
          )}
        </Row>
      </Card.Header>
      {props.editable && (
        <Accordion.Collapse eventKey={item.id.toString()}>
          <Card.Body>
            <UpdateForm item={item} update={props.update} collapse={toggleAccordion} />
          </Card.Body>
        </Accordion.Collapse>
      )}
    </Card>
  );
};

export default Item;
