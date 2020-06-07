import React, { useState, useEffect } from 'react';
import Bounce from 'react-activity/lib/Bounce';

import ItemsService from '../services/ItemsService';

import ContentContainer from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';
import ItemTable from '../components/ItemTable/ItemTable';
import CreateForm from '../components/CreateForm/CreateForm';

const AllItemsPage = () => {
  const [itemData, setItemData] = useState();

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = () => {
    ItemsService.getAllItems().then((data) =>
      setItemData(data ? data.sort((first, second) => (first.id > second.id ? 1 : -1)) : null),
    );
  };

  /**
   * Render item table or indicator if no data exists
   */
  const renderData = () => {
    if (itemData === null) {
      return <p className="text-center">No Items Found</p>;
    } else if (itemData === undefined) {
      return (
        <div className="text-center">
          <Bounce />
        </div>
      );
    } else {
      return <ItemTable showId editable items={itemData} update={fetchAllItems} />;
    }
  };

  return (
    <div>
      <Hero title="Overview" />

      <ContentContainer>
        {renderData()}
      </ContentContainer>
    </div>
  );
};

export default AllItemsPage;
