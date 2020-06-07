import Axios from 'axios';
import { ItemsBaseUrl } from '../endpoints/Endpoint';

const ItemsService = {
  getItemMaxPrices: async () => {
    try {
      const response = await Axios.get(`${ItemsBaseUrl}/max-prices`);
      if (process.env.NODE_ENV === 'development') console.log(response);

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
  getMaxPriceForItem: async (itemName) => {
    const response = await Axios.get(`${ItemsBaseUrl}/max-prices/${encodeURIComponent(itemName)}`);
    if (process.env.NODE_ENV === 'development') console.log(response);

    return response.data;
  },
  getById: async (id) => {
    try {
      const response = await Axios.get(`${ItemsBaseUrl}/${id}`);
      if (process.env.NODE_ENV === 'development') console.log(response);

      if (response.status !== 200) throw Error('error occurred');

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
  getAllItems: async () => {
    try {
      const response = await Axios.get(ItemsBaseUrl);
      if (process.env.NODE_ENV === 'development') console.log(response);
      if (response.status !== 200) throw Error('error occurred');

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
  createItem: async (item) => {
    try {
      const response = await Axios.post(ItemsBaseUrl, item);
      if (process.env.NODE_ENV === 'development') console.log(response);

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
  deleteItem: async (id) => {
    try {
      const response = await Axios.delete(`${ItemsBaseUrl}/${id}`);
      if (process.env.NODE_ENV === 'development') console.log(response);

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
  updateItem: async (id, updateModel) => {
    try {
      const response = await Axios.put(`${ItemsBaseUrl}/${id}`, updateModel);

      return response.data;
    } catch (e) {
      if (process.env.NODE_ENV === 'development') console.log(e);
      return null;
    }
  },
};

export default ItemsService;
