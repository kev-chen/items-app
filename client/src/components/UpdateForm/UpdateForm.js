import React, { useState, useRef, useEffect } from 'react';

import { InputGroup, FormControl, Button } from 'react-bootstrap';

import ItemsService from '../../services/ItemsService';

const UpdateForm = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const itemNameRef = useRef();
  const costRef = useRef();

  useEffect(() => {
    if (itemNameRef) itemNameRef.current.value = props.item.itemName;
    if (costRef) costRef.current.value = props.item.cost;
  }, [itemNameRef, costRef, props.item.cost, props.item.itemName]);

  /**
   * Checks the input fields against the item data to see if
   * changes would be made, and sets submitDisabled accordingly
   */
  const manageSubmitButtonDisabledStatus = () => {
    const parsedCost = parseFloat(costRef.current.value);

    if (isNaN(parsedCost) || !itemNameRef.current.value) {
      setIsSaveDisabled(true);
      return;
    }

    if (itemNameRef.current.value === props.item.itemName && parsedCost === props.item.cost) {
      setIsSaveDisabled(true);
    } else {
      setIsSaveDisabled(false);
    }
  };

  /**
   * Handles submitting the update to the server
   */
  const onClickHandler = async () => {
    const parsedCost = parseFloat(costRef.current.value);
    if (isNaN(parsedCost)) {
      setErrorMessage('Cost must be a number');
    } else {
      setErrorMessage('');
      const item = await ItemsService.updateItem(props.item.id, {
        itemName: itemNameRef.current.value,
        cost: parsedCost,
      });

      if (!item) {
        setErrorMessage('There was an error updating the item');
      } else {
        if (props.update) props.update();
        if (props.collapse) props.collapse();
      }
    }
  };

  return (
    <div>
      <InputGroup className="my-3">
        <FormControl ref={itemNameRef} placeholder="Item Name" onChange={manageSubmitButtonDisabledStatus} />
        <FormControl ref={costRef} placeholder="Cost" onChange={manageSubmitButtonDisabledStatus} />
        <InputGroup.Append>
          <Button variant="outline-primary" onClick={onClickHandler} disabled={isSaveDisabled}>
            Save
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <p className="error">{errorMessage}</p>
    </div>
  );
};

export default UpdateForm;
