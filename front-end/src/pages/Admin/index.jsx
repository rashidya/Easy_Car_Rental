import {Component} from "react";
import Drawer from '../components/AdminDashBoard'
import {Grid} from "@material-ui/core";

class AdminDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}

export default AdminDashBoard