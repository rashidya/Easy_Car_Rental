import {Component} from "react";
import {Grid} from "@mui/joy";
import DriverScheduleTable from '../DriverScheduleTable'

class DriverSchedule extends Component{

    render() {
        return(
            <Grid>
                <DriverScheduleTable/>
            </Grid>
        )
    }

}

export default DriverSchedule