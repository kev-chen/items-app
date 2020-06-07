import React, { useState, useEffect } from 'react';

import ItemsService from '../services/ItemsService';

import ContentContainer from '../components/ContentContainer/ContentContainer';
import Item from '../components/Item/Item';
import Hero from '../components/Hero/Hero';

const TopPricesPage = (props) => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    ItemsService.getItemMaxPrices().then((data) => setItemData(data));
  }, []);

  return (
    <div>
      <Hero title="Top Prices" />
      <ContentContainer>
        {itemData.map((item) => (
          <Item itemName={item.itemName} cost={item.cost} key={item.id} />
        ))}
      </ContentContainer>
    </div>
  );
};

export default TopPricesPage;
