import {Component} from "react";
import Drawer from '../../components/DriverDashBoard'
import {Grid} from "@material-ui/core";

class DriverDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}

export default DriverDashBoard