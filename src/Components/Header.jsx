// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/phones">Phone</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;