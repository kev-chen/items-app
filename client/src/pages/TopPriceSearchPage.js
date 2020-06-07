import React, { useState, useRef } from 'react';

import { Button } from 'react-bootstrap';

import ItemsService from '../services/ItemsService';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';

const TopPriceSearchPage = (props) => {
  const [price, setPrice] = useState();
  const searchBox = useRef();

  const handleButtonClick = () => {
    ItemsService.getMaxPriceForItem(searchBox.current.value).then((result) => setPrice(result.price));
  };

  return (
    <div>
      <Hero title="Search" subtitle="Search for the top price for an item" />
      <ContentContainer>
        <input type="text" ref={searchBox} placeholder="Search..." />
        <Button variant="primary" onClick={handleButtonClick}>
          Go
        </Button>
        <br />
        {price ? price : null}
      </ContentContainer>
    </div>
  );
};

export default TopPriceSearchPage;
