import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth/authenticationActions';
import { title, dollar } from "../../assets/styles"

class Nav extends Component {
  render() {
    const { authenticated, username } = this.props;
    
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          { authenticated 
              ? <React.Fragment>
                  <li>{ username }</li>
                  <li><Link to="/" onClick={ this.props.logout.bind(this) }>Logout</Link></li>
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
}

const mapStateToProps = (state) => {
  const { authenticated, username } = state.authentication;

  return { authenticated, username }
};

Nav.propTypes = {
  logout : PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout })(Nav);
