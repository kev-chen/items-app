import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <Navbar id="header" className="border-bottom" bg="transparent" expand="sm">
      <Navbar.Brand>{props.title || "Items App"}</Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/top-prices">
            Top Prices
          </Link>
          <Link className="nav-link" to="/top-prices/search">
            Top Price for Item
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
