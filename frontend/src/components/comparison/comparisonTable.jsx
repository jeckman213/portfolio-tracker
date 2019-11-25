import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { dollar } from "../../assets/styles";

class ComparisonTable extends Component {
    constructor(props) {
        super(props);

        this.state = { assets : this.props.assets }

        this.printStocks = this.printStocks.bind(this);
    }

    printStocks = () => {
        const { assets } = this.state;
        var table = [];

        for (let asset of assets) {
            let { symbol, shares, purchasedAt, value } = asset;
            table.push(
                <TableRow>
                    <TableCell>{symbol}</TableCell>
                    <TableCell>{shares}</TableCell>
                    <TableCell>{purchasedAt}</TableCell>
                    <TableCell><span style={dollar}>$</span>{value}</TableCell>
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

const Style = {
    TableHead: {
        backgroundColor: '#000',
        color: '#fff'
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

export default ComparisonTable;