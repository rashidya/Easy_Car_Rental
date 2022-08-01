
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

        return(
            <Grid>
                {/*-----------------------Pending Booking Request-------------*/}
                <Grid>

                    <Grid display={'flex'} flexWrap={"wrap"}>

                        <Grid height={'50%'} width={'50%'}>
                            <Typography>Booking Details</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                        </Grid>

                        <Grid height={'50%'} width={'50%'}>
                            <Typography>Customer Details</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>

                        </Grid>

                        <Grid height={'50%'} width={'50%'}>
                            <Typography>Driver Details</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                        </Grid>

                        <Grid height={'50%'} width={'50%'}>
                            <Typography>Driver Details</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                            <Typography>Booking ID :</Typography>
                        </Grid>

                        <Grid></Grid>
                    </Grid>


                    <Grid>




                    </Grid>
            </Grid>
        {/*-----------------------Confirmed Booking Request-------------*/}

    </Grid>
    )
    }
}
export default ManageBooking