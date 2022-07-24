import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "../Home/style";
import {Grid} from "@material-ui/core";
import BookingForm from '../../components/Booking'

class Booking extends Component {
    render() {
        return(
            <Grid>
                <BookingForm/>
            </Grid>
        )
    }
}

export default Booking