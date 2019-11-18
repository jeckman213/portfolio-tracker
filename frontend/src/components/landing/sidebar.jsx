// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import classNames from 'classnames';

export default props => {
  return (
    <Menu width={ '16%' } > 
    
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/login">
      Login
      </a>

      <a className="menu-item" href="/packages">
      Packages
      </a>

      <a className="menu-item" href="/Share">
        Share
      </a>

      <a className="menu-item" href="/Help">
        Help
      </a>
    </Menu>
  );
};

