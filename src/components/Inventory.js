import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, lastOrdered, quantityLeft, quantitySold, price) {
    return { name, lastOrdered, quantityLeft, quantitySold, price };
}

const rows = [
    createData('Frozen yoghurt', "2/11/2020", 6.0, 24, 4.0),
    createData('Ice cream sandwich', "12/11/2020", 9.0, 37, 4.3),
    createData('Eclair', "8/1/2020", 16.0, 24, 6.0),
    createData('Cupcake', "6/4/2020", 3.7, 67, 4.3),
    createData('Gingerbread', "12/11/2020", 16.0, 49, 3.9),
];

export default function Inventory() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <div style={{margin:"auto 50%",fontSize:"30px", fontWeight:"bold"}}>INVENTORY</div>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Last Ordered</TableCell>
                        <TableCell align="right">Quantity left</TableCell>
                        <TableCell align="right">Quantity Sold</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.lastOrdered}</TableCell>
                            <TableCell align="right">{row.quantityLeft}</TableCell>
                            <TableCell align="right">{row.quantitySold}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}