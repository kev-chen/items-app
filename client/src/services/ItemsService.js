import Axios from 'axios';

import Endpoint from '../endpoints/Endpoint';

const ItemsService = {
  getItemMaxPrices: async () => {
    const response = await Axios.get(`${Endpoint.items}/max-prices`);

    console.log(response);
    return response.data;
  },
  getMaxPriceForItem: async (itemName) => {
    const response = await Axios.get(`${Endpoint.items}/max-prices/${encodeURIComponent(itemName)}`);
    
    console.log(response);
    return response.data;
  }
};

export default ItemsService;
