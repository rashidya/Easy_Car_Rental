
import {Component} from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import {Button, TextField} from "@mui/material";
import * as React from "react";
class ManageBooking extends Component{
    render() {
        function createData(id, customerId,status, fullName, nic, licenNo, contact, address) {
            return { id, customerId, fullName, nic, licenNo, contact,address};
        }
        const rows = [
               ];
        return(
            <Grid>
                {/*-----------------------Pending Booking Request-------------*/}
                <Grid>

                    <Grid>
                        <TableContainer component={Paper} style={{ height: '70vh',width:'80vw',backgroundColor:'#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Status</TableCell>
                                        <TableCell align="left">Full Name</TableCell>


                                        <


                                        TableCell align="left">NIC</TableCell>
                                    <TableCell align="left">License No</TableCell>
                                    <TableCell align="left">Contact No</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{row.id}</TableCell>
                                        <TableCell align="left">{row.customerId}</TableCell>
                                        <TableCell align="left">{row.fullName}</TableCell>
                                        <TableCell align="left">{row.nic}</TableCell>
                                        <TableCell align="left">{row.licenNo}</TableCell>
                                        <TableCell align="left">{row.contact}</TableCell>
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left">
                                            <Tooltip title="Accept">
                                                <IconButton
                                                    onClick={() => {
                                                        // this.updateCustomer(row);
                                                    }}
                                                >
                                                    <EditIcon color="primary" />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Deny">
                                                <IconButton
                                                    onClick={() => {
                                                        // this.deleteCustomer(row.id)
                                                    }}
                                                >
                                                    <DeleteIcon color="error" />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        {/*-----------------------Confirmed Booking Request-------------*/}

    </Grid>
    )
    }
}
export default ManageBooking