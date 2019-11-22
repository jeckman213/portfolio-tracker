import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';


class ComparisonTable extends Component {
    render() {
        return (
            <Paper>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default ComparisonTable;