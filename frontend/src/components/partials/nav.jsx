import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth/authActions';
import { title, dollar } from '../../assets/styles';
import SearchDropdown from './autocomplete';
import UserSearch from './userSearch';

const Nav = ({ authenticated, username, logout }) => {
  const style = {
    navitems : {
      display : 'flex',
      justifyContent : 'flex-end',
      alignItems : 'center'
    }
  }

  return (
    <nav>
      <ul>
        <li style={ title }>
          <Link to="/">
            <img 
              style={ { height : ' 1.7rem', marginRight : '.4rem'}}
              src={ process.env.PUBLIC_URL + '/logos/portfolios/logo.png' }
              alt="loading" >
            </img>
            Portfolio<span style={ dollar }>$</span>
          </Link></li>
        <div id="nav-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </ul>
      <ul style={ style.navitems }>
        <li><SearchDropdown /></li> 
        <li><UserSearch /></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/comparison">Compare</Link></li>
        { authenticated 
            ? <React.Fragment>
                <li><Link to={ `/user/${username}` }><i class="fas fa-user-alt"></i> { username }</Link></li>
                <li><Link to={ '/settings' }><i class="fas fa-cog"></i></Link></li>
                <li><Link to="/" onClick={ logout }><i class="fas fa-sign-out-alt"></i></Link></li>
              </React.Fragment>
            : <React.Fragment>
                <li><Link to="/packages"><i class="fas fa-user-plus"></i></Link></li>
                <li><Link to="/login"><i class="fas fa-sign-in-alt"></i></Link></li>
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
