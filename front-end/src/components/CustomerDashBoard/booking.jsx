import {Component} from "react";
import {Grid} from "@mui/joy";
import {BrowseGrid} from '../BrowsePage'

class Booking extends Component{

    render() {
        return(
            <Grid width={'81vw'} height={'84vh'}>
               <BrowseGrid/>
            </Grid>
        )
    }

}

export default Booking