import React from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

const SearchBox = (props) => {

  return (
    <InputGroup className="my-3">
      <Form.Control
        ref={props.inputRef}
        type="text"
        placeholder="Search for an Item Name..."
        aria-label="Search..."
        aria-describedby="basic-addon2"
      />
      <InputGroup.Append>
        <Button variant="outline-primary" onClick={props.onSearch}>
          Go
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBox;
