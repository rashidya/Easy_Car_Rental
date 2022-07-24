import {Component} from "react";
import {Grid} from "@mui/joy";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import * as React from "react";

import VehicleTable from '../VehicleTable'

class ManageVehicle extends Component{

    render() {
        return(
            <Grid display={"flex"} width={'81vw'} height={"70vh"} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>

                <Grid>
                    <Grid>

                        <Grid>
                            <TextField
                                required
                                id="outlined-required"
                                label="Registration number"
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Brand "
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Type"
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />


                            <TextField
                                required
                                id="outlined-required"
                                label="Color"
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="No Of Passengers"
                                defaultValue=""
                                sx={{ m: 1, width: '26ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Transmission Type"
                                defaultValue=""
                                sx={{ m: 1, width: '26ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Fuel Type"
                                defaultValue=""
                                sx={{ m: 1, width: '26ch' }}
                            />

                            <TextField
                                required
                                id="outlined-required"
                                label="Price"
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Free Milage "
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Price Per Extra KM "
                                defaultValue=""
                                sx={{ m: 1, width: '40ch' }}
                            />



                        </Grid>
                    </Grid>
                </Grid>

                <Grid>
                    <VehicleTable/>
                </Grid>

            </Grid>
        )
    }

}

export default ManageVehicle