import React from 'react';
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth/authActions';
import { title, dollar } from "../../assets/styles";
import SearchDropdown from "./dropdownSearch";

const Nav = ({ authenticated, username, logout }) => {
  return (
    <nav>
      <ul>
        <li style={ title }><Link to="/">Portfolio<span style={ dollar }>$</span></Link></li>
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ul>
      <ul>
        <li><SearchDropdown /></li>
        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/comparison">Compare</Link></li>
        { authenticated 
            ? <React.Fragment>
                <li><Link to={ `/user/${username}` }>{ username }</Link></li>
                <li><Link to="/" onClick={ logout }>Logout</Link></li>
              </React.Fragment>
            : <React.Fragment>
                <li><Link to="/packages">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
              </React.Fragment>
        }
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  const { authenticated, username } = state.authentication;

  return { authenticated, username }
};

Nav.propTypes = {
  logout : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Nav);
