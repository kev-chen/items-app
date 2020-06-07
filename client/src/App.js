import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavMenu from './components/NavBar/NavBar';
import TopPricesPage from './pages/TopPricesPage';
import TopPriceSearchPage from './pages/TopPriceSearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Route path="/top-prices" exact render={() => <TopPricesPage />} />
        <Route path="/top-prices/search" exact render={() => <TopPriceSearchPage />} />
      </Router>
    </div>
  );
}

export default App;
