import React, { Component } from 'react'
import axios from 'axios'
import { stringify as queryStringify } from 'query-string'
import colors from '../../assets/colors';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import NewPortfolio from './buttons/newPortfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup'

class UserPage extends Component {
  constructor(){
    super();
    this.state = {
      userNotFound : false,
      portfolios : [],
      userId : 0,
      
      posting : false,
      postComplete : false,
      deleting : false,
    }

    this.delete = this.delete.bind(this);
    this.createPortfolio = this.createPortfolio.bind(this);
  }

  async componentDidUpdate(){
    if(this.state.postComplete){
      this.setState({ postComplete : false })
      let
        id = this.state.userId,
        showUserRes = await axios.get(`/api/user/${id}`),
        { portfolios } = showUserRes.data;
      
      this.setState({ portfolios });
    }
  }
  
  async componentDidMount(){
    let 
      username = this.props.match.params.username,
      queryString = queryStringify({ username }),
      searchRes = await axios.get(`/api/search/user?${queryString}`),
      { success } = searchRes.data;
    
    if(success){
      let
        { id } = searchRes.data,
        showUserRes = await axios.get(`/api/user/${id}`),
        { portfolios } = showUserRes.data;
      
      this.setState({ portfolios, userNotFound : false, userId : id })
    }
    else {
      this.setState({ userNotFound : true })
    }
  }

  async createPortfolio(body) {
    console.log(this.state);
    if(!this.state.posting){
      this.setState({ posting : true })
      const userId = this.state.userId;
      await axios.post(`/api/user/${userId}/portfolio`, body);
      this.setState({ posting : false, postComplete : true })
    }
  }

  delete = (id, close) => async e => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(!this.state.deleting){
      this.setState({ deleting : true })
      const userId = this.state.userId;
      await axios.delete(`/api/user/${userId}/portfolio/${id}`);

      // Generates a warning
      this.setState({ portfolios : this.state.portfolios.filter( 
        portfolio => portfolio.id !== id
      ), deleting : false });
      close();
    }
  }

  render() {
    const 
      style = this.style,
      username = this.props.match.params.username,
      { userNotFound, portfolios, userId, deleting } = this.state,
      portfolioItems = portfolios.map( portfolio => (
        <div key={ portfolio.id } style={ style.portfolio }>
          <Popup
            trigger={
              <div>
                <FontAwesomeIcon style={ style.delete } icon={ faTrashAlt }></FontAwesomeIcon>
              </div>
            }
            modal>
              { close => (
                <div style={ style.newForm } >
                  <h2>Are you sure you want to delete { portfolio.name }?</h2>
                  <br/>
                  <form onSubmit={ this.delete(portfolio.id, close) }>
                    <div className="form-control">
                      <input type="submit" value="Confirm" disabled={ deleting }/>
                    </div>
                  </form>
                </div>
              )}
          </Popup>
          <Link to={ `/user/${username}/portfolio/${portfolio.name}` }>
            <div>
              { portfolio.name }
            </div>
          </Link>
        </div>
      ));

    return userNotFound
      ? ( 
        <div style={ style.container }>
          <h2>User { username } DNE</h2>
        </div>
        ) 
      : (
        <div style={ style.container } className="portfolio-overview">
          <NewPortfolio createPortfolio={ this.createPortfolio } username={ username } userId={ userId }/>
          { portfolioItems }
        </div>
      )
  }

  style = {
    container : {
      display : 'grid',
      gridTemplateColumns : '25% 25% 25% 25%',
      gridGap : '1em',
      margin : '3em 3em',
      textAlign: 'center'
    },

    portfolio : {
      backgroundColor : colors.green,
      borderRadius : '10px',
      padding : '2em',
      fontSize : '2em',
      textAlign: 'center'
    },

    delete : {
      color : colors.red,
      float : 'right',
      cursor : 'pointer',
      textAlign: 'right'
    },

    newForm : {
      backgroundColor : colors.darkBlue,
      padding : '20px',
      boxSizing: 'border-box',
      width : '100%',
      height : '100%',
      outline : 'none',
      textAlign: 'center'
    }
  }
}

export default UserPage;
