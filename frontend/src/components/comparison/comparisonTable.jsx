import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { formatCurrency } from '../../utils/currencies'

class ComparisonTable extends Component {
    constructor(props) {
        super(props);

        this.state = { assets : this.props.assets }

        this.printStocks = this.printStocks.bind(this);
    }

    printStocks = () => {
        const { assets } = this.state;
        const currency = this.props.currency || 'USD';
        var table = [];

        for (let asset of assets) {
            let { symbol, shares, purchasedAt, realtime } = asset;
            let { value } = realtime;
            console.log(asset);
            table.push(
                <TableRow>
                    <TableCell>{symbol}</TableCell>
                    <TableCell>{shares}</TableCell>
                    <TableCell>{purchasedAt}</TableCell>
                    <TableCell>{ formatCurrency(currency, value) }</TableCell>
                </TableRow>
            );
        }

        return table;
    }

    render() {
        return (
            <Paper>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Symbol</TableHeadCell>
                            <TableHeadCell>Shares</TableHeadCell>
                            <TableHeadCell>Purchase Date</TableHeadCell>
                            <TableHeadCell>Total Value</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.printStocks() }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

const TableHeadCell = withStyles(theme => ({
    head: {
      backgroundColor: '#3e3e45',
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);


const mapStateToProps = (state) => {
    const { currency } = state.authentication;

    return { currency };
};

export default connect(mapStateToProps, null)(ComparisonTable);