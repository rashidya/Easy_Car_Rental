import {Component} from "react";
import {Grid} from "@mui/joy";
import ManageBookingForm from '../ManageBooking'

class ManageBooking extends Component{

    render() {
        return(
            <Grid>
                <ManageBookingForm/>
            </Grid>
        )
    }

}

export default ManageBooking