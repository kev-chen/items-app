import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-activity/lib/Bounce/Bounce.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import TopPricesPage from './pages/TopPricesPage';
import TopPriceSearchPage from './pages/TopPriceSearchPage';
import AllItemsPage from './pages/AllItemsPage';

function App() {
  return (
    <div className="App mb-5">
      <Router>
        <NavBar />
        <Route path="/" exact render={() => <AllItemsPage />} />
        <Route path="/top-prices" exact render={() => <TopPricesPage />} />
        <Route path="/top-prices/search" exact render={() => <TopPriceSearchPage />} />
      </Router>
    </div>
  );
}

export default App;
