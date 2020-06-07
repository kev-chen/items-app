import React from 'react';

import { Card } from 'react-bootstrap';

const Item = (props) => {
  const { itemName, cost } = props;

  return (
    <Card style={{ margin: '5px' }}>
      <Card.Body>
        <Card.Text>{itemName}</Card.Text>
        <Card.Text>{cost}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Item;
