import React, { Component } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import { stringify as queryStringify } from 'query-string'
import colors from '../../assets/colors';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import NewPortfolio from './buttons/newPortfolio';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
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

  async componentDidUpdate(prevProps){
    if(prevProps.match.params.username !== this.props.match.params.username || this.state.postComplete){
      this.setState({ postComplete : false })
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
    console.log(body);
    if(!this.state.posting){
      this.setState({ posting : true })
      const 
        userId = this.state.userId,
        data = await axios.post(`/api/user/${userId}/portfolio`, body).then(res => res.data);
      console.log(data);
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
          <div style={ style.options }>
            { this.props.username === username && 
              <Popup
              trigger={
                <FontAwesomeIcon style={ style.delete } icon={ faTrashAlt }></FontAwesomeIcon>
              }
              modal>
                  { close => (
                    <div style={ style.newForm } >
                      <h2 style={ style.text }>Are you sure you want to delete <br/><span style={ style.name }>{ portfolio.name }</span>?</h2>
                      <form onSubmit={ this.delete(portfolio.id, close) }>
                        <div className="form-control" style={ style.submit}>
                          <input type="submit" value="Confirm" disabled={ deleting }/>
                        </div>
                      </form>
                    </div>
                  )}
              </Popup>
            }
            { !portfolio.isPublic &&
              <FontAwesomeIcon icon={ faLock }></FontAwesomeIcon>
            }
          </div>
          <div style={ style.link }>
            <Link to={ `/user/${username}/portfolio/${portfolio.name}` }>
              <div>
                { portfolio.name }
              </div>
            </Link>
          </div>
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
          { this.props.username === username && 
            <NewPortfolio createPortfolio={ this.createPortfolio } username={ username } userId={ userId }/>
          }
          { portfolioItems }
        </div>
      )
  }

  style = {
    options : {
      display : 'flex',
      justifyContent : 'space-between',
      alignItems : 'center',
      flexDirection : 'row-reverse'
    },

    link : {
      padding : '3rem 0'
    },

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
      padding : '0.5em',
      fontSize : '2em',
      textAlign: 'center'
    },

    delete : {
      color : colors.red,
      cursor : 'pointer',
      textAlign: 'right'
    },

    name : {
      color : colors.green
    },

    text : {
      fontSize : '2.5rem',
      lineHeight : '4rem'
    },

    submit : {
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
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

const mapStateToProps = (state) => {
  const { username } = state.authentication;

  return { username };
};

export default connect(mapStateToProps, null)(UserPage);
