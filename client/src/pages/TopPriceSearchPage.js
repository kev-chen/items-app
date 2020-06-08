import React, { useState, useRef } from 'react';

import ItemsService from '../services/ItemsService';
import ContentContainer from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';
import SearchBox from '../components/SearchBox/SearchBox';
import ItemTable from '../components/ItemTable/ItemTable';

const TopPriceSearchPage = (props) => {
  const [price, setPrice] = useState();
  const searchBox = useRef();

  const handleButtonClick = () => {
    ItemsService.getMaxPriceForItem(searchBox.current.value).then((result) => setPrice(result.price));
  };

  return (
    <div>
      <Hero title="Search" subtitle="Search for the top price of an item" />
      <ContentContainer>
        <SearchBox inputRef={searchBox} onSearch={handleButtonClick} />
        <br />
        {price && <ItemTable items={[{ itemName: searchBox.current.value, cost: price }]} />}
      </ContentContainer>
    </div>
  );
};

export default TopPriceSearchPage;
