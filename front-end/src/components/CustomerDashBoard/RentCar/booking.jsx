import {Component} from "react";
import {Grid} from "@mui/joy";
import BrowseGrid from "../../BrowsePage";


class RentCar extends Component{



    render() {
        return(
            <Grid height={'84vh'}>
               <BrowseGrid/>
            </Grid>
        )
    }

}

export default RentCar