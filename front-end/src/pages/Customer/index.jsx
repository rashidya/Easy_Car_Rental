import {Component} from "react";
import Drawer from '../components/CustomerDashBoard'
import {Grid} from "@material-ui/core";

class CustomerDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}

export default CustomerDashBoard