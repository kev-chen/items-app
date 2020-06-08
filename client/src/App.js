import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-activity/lib/Bounce/Bounce.css';

import Routes from './routes/Routes';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App mb-5">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
        {Routes.map(({ path, component }) => (
          <Route path={path} exact component={component} key={path} />
        ))}
      </Router>
    </div>
  );
}

export default App;
