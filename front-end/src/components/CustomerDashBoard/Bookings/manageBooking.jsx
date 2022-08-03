import {Component} from "react";
import {Grid} from "@mui/joy";
import ManageBookingForm from '../../BookingTable'

class Bookings extends Component{

    render() {
        return(
            <Grid>
                <ManageBookingForm/>
            </Grid>
        )
    }

}

export default Bookings