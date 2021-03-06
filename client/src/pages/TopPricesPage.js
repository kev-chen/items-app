import React, { useState, useEffect } from 'react';
import Bounce from 'react-activity/lib/Bounce';

import ItemsService from '../services/ItemsService';

import ContentContainer from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';
import ItemTable from '../components/ItemTable/ItemTable';

const TopPricesPage = (props) => {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    ItemsService.getItemMaxPrices().then((data) => setItemData(data));
  }, []);

  const renderTable = () => {
    if (itemData === null) {
      return <p className="text-center">No Items Found</p>;
    } else if (itemData === undefined) {
      return (
        <div className="text-center">
          <Bounce />
        </div>
      );
    } else {
      return <ItemTable items={itemData} />;
    }
  };

  return (
    <div>
      <Hero title="Top Prices" />
      <ContentContainer>{renderTable()}</ContentContainer>
    </div>
  );
};

export default TopPricesPage;
