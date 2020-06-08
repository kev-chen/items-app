import AllItemsPage from '../pages/AllItemsPage';
import TopPricesPage from '../pages/TopPricesPage';
import TopPriceSearchPage from '../pages/TopPriceSearchPage';

const Routes = [
  {
    path: '/',
    component: AllItemsPage,
    name: 'Overview',
  },
  {
    path: '/top-prices',
    component: TopPricesPage,
    name: 'Top Prices',
  },
  {
    path: '/top-prices/search',
    component: TopPriceSearchPage,
    name: 'Top Price Search',
  },
];

export default Routes;
