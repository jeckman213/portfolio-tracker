import React, { Component } from 'react';
import axios from 'axios'
import Popup from 'reactjs-popup'
import EditAsset from '../buttons/editAsset'
import NewAsset from '../buttons/newAsset'
import { dollar } from "../../../assets/styles";
import colors from '../../../assets/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class PortfolioTable extends Component {
  constructor(props) {
      super(props);

      this.state = {
        assets : this.props.assets
      }

      this.printStocks = this.printStocks.bind(this);
      this.editAsset = this.editAsset.bind(this);
      this.createAsset = this.createAsset.bind(this);
  }

  printStocks = () => {
    let tableData = [], { assets } = this.state;
    let { requesting } = this.state;
    let style = this.style;

    for(let asset of assets) {
      let { id, symbol, shares, purchasedAt, value } = asset;
      tableData.push(
        <tr key={ id }>
          <td>{ symbol }</td>
          <td><input type="text"  value={ shares } className="portfolio-table-input" readOnly/></td>
          <td><input type="date" value={ purchasedAt } className="portfolio-table-input" readOnly/></td>
          <td><span style={ dollar }>$</span>{ value.toFixed(2) }</td>
          <td><EditAsset editAsset={ this.editAsset } id={ id } symbol={ symbol } shares={ shares } purchasedAt={ purchasedAt } /></td>
          <td>
            <Popup
            trigger={
              <div>
                <FontAwesomeIcon style={ style.delete } icon={ faTrashAlt }></FontAwesomeIcon>
              </div>
            }
            modal>
              { close => (
                <div style={ style.newForm } >
                <h2>Are you sure you want to remove { shares } shares of {symbol} from this portfolio?</h2>
                  <br/>
                  <form onSubmit={ this.delete(id, close) }>
                    <div className="form-control">
                      <input type="submit" value="Confirm" disabled={ requesting }/>
                    </div>
                  </form>
                </div>
              )}
          </Popup>
          </td>
        </tr>
      )
    }

    return tableData;
  }

  async createAsset(body){
    const { userId, portfolioId } = this.props;
    const { data } = await axios.post(`/api/user/${userId}/portfolio/${portfolioId}/asset`, body);
    const { id, symbol, shares, purchasedAt, value } = data;
    const newAsset = { id, symbol, shares, purchasedAt, value };

    this.setState({ assets : [...this.state.assets, newAsset] })
  }

  async editAsset(id, body){
    const { userId, portfolioId } = this.props;
    const { data } = await axios.put(`/api/user/${userId}/portfolio/${portfolioId}/asset/${id}`, body);
    const { symbol, shares, purchasedAt, value } = data;
    const updatedAsset = { id, symbol, shares, purchasedAt, value };

    this.setState({ assets : this.state.assets.map( asset => asset.id === id ? updatedAsset : asset) })
  }

  delete = (id, close) => async e => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if(!this.state.requesting){
      this.setState({ requesting : true })

      const { userId, portfolioId } = this.props;
      await axios.delete(`/api/user/${userId}/portfolio/${portfolioId}/asset/${id}`);

      // Generates a warning
      this.setState({ assets : this.state.assets.filter( 
        asset => asset.id !== id
      ), requesting : false });
      close();
    }
  }

  render(){
    console.log(this.props);
    return (
      <table className="portfolio-table">
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Shares</th>
            <th>Purchase Date</th>
            <th>Total Value</th>
            <th>Edit</th>
            <th><NewAsset createAsset={ this.createAsset }/></th>
          </tr>
          { this.printStocks() }
        </tbody>
      </table>
    )
  }

  style = {
    newForm : {
      backgroundColor : colors.darkBlue,
      padding : '20px',
      boxSizing: 'border-box',
      width : '100%',
      height : '100%',
      outline : 'none',
      color : 'white'
    },
    delete : {
      color : colors.red,
      cursor : 'pointer'
    },
  }
}

export default PortfolioTable;