import React, { useState, useRef } from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap';

import ItemsService from '../../services/ItemsService';

import './styles.css';

const CreateForm = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const itemNameRef = useRef();
  const costRef = useRef();

  const onClickHandler = async () => {
    const parsedCost = parseFloat(costRef.current.value);
    if (isNaN(parsedCost)) {
      setErrorMessage('Cost must be a number');
    } else {
      setErrorMessage('');
      const item = await ItemsService.createItem({ itemName: itemNameRef.current.value, cost: parsedCost });
      if (!item) setErrorMessage('There was an error adding this item');
      if (props.update) props.update();
      itemNameRef.current.value = ''
      costRef.current.value = ''
    }
  };

  return (
    <div>
      <InputGroup className="my-3" size="sm">
        <FormControl ref={itemNameRef} placeholder="Item Name" />
        <FormControl ref={costRef} placeholder="Cost" />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={onClickHandler}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <p className="error">{errorMessage}</p>
    </div>
  );
};

export default CreateForm;
