
import {Component} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
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