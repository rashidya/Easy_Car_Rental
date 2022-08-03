import {Grid, TableCell} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import DatePicker from "../common/DatePicker";
import TimePicker from "../common/TimePicker";
import RadioButtonList from "../RadioButtonList";
import ImageList from "../ImageList";
import FilterList from "../RadioButtonList";
import React, {Component} from "react";
import Divider from "@mui/material/Divider";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import carImage from '../../assets/contact.jpg'

import BrowseService from "../../services/BrowseService";
import {format} from "date-fns";
import VehicleDetailBooking from "../../pages/VehicleDetailBooking";
import {Route} from "react-router-dom";

class BrowseGrid extends Component {

    constructor(props) {
        super(props);

        this.state = {

            vehicleList: [],

            pickupDate: '2022-07-06',
            returnDate: '2022-07-07',

        }
    }


    loadAvailableVehicles = async () => {
        let params = {
            pickupDate: this.state.pickupDate,
            returnDate: this.state.returnDate
        }
        let res = await BrowseService.fetchAvailableVehicles(params);

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };

    loadAllVehicles = async () => {
        let res = await BrowseService.fetchAllVehicles();

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        // print customers array

    };


    componentDidMount() {
        this.loadAllVehicles();
    }


    render() {

        return (
            <Grid style={{
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>


                <Grid style={{
                    width: '30%',
                    height: '100%',
                    backgroundColor: '#f6f6f6',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    flexDirection: 'column'


                }}>


                    <Grid style={{
                        width: '90%',
                        height: '30%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Grid style={{display: 'flex', width: '100%'}}>
                            <DatePicker
                                label={"PickUp-Date"}
                                value={this.state.pickupDate}
                                onChange={
                                    (newValue) => {
                                        this.setState(
                                            {
                                                pickUpDate: newValue
                                            }
                                        )

                                    }
                                }

                            />
                            <TimePicker label={"PickUp-Time"}/>
                        </Grid>

                        <Grid style={{display: 'flex', width: '100%'}}> <DatePicker label={"Return-Date"}/>
                            <TimePicker label={"Return-Time"}/>
                        </Grid>

                        <Grid style={{width: '100%', display: 'flex', justifyContent: 'center'}}>


                            <Button variant="contained" href="#contained-buttons"
                                    onClick={this.loadAvailableVehicles}
                                    style={{
                                        width: '30%',
                                        margin: '2%',
                                        backgroundColor: '#595959',

                                    }}>
                                Search
                            </Button>

                        </Grid>


                    </Grid>


                    <Grid style={{
                        width: '90%',
                        height: '65%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                        <FilterList/>

                    </Grid>
                </Grid>

                <Grid style={{
                    width: '70%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>

                    {
                        this.state.vehicleList.map((vehicle) => (

                            <Grid style={{width:'90%', height:'30vh',backgroundColor:'#c4c4c4',margin:'1vh'}}>


                            </Grid>


                        ))
                    }

                </Grid>

            </Grid>

        )
    }


}

export default BrowseGrid;

