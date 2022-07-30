import {Component} from "react";
import Drawer from '../../components/CustomerDashBoard'
import {Grid} from "@material-ui/core";

class CustomerDashBoard extends Component{

    constructor(props) {
        super(props);


    }

    render() {
        return(
            <Grid>
                <Drawer loginUser={this.props.loginUser}/>
            </Grid>
        )
    }
}

export default CustomerDashBoard