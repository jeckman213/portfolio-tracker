// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        about
      </a>

      <a className="menu-item" href="/login">
      login
      </a>

      <a className="menu-item" href="/packages">
      packages
      </a>

      <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a>
    </Menu>
  );
};

