import {Grid, TableCell} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import DatePicker from "../common/DatePicker";
import TimePicker from "../common/TimePicker";
import BrowseDatePicker from "../common/DatePickerBrowse";
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
import DatePickerBrowse from "../common/DatePickerBrowse";
import TimePickerBrowse from "../common/TimePickerBrowse";
import {format} from "date-fns";
import {Link} from "react-router-dom";

class BrowseGrid extends Component {

    constructor(props) {
        super(props);



        this.state = {

            vehicleList: [],

        }
    }


    loadAvailableVehicles = async () => {
        let params = {
            pickupDate: format(new Date(localStorage.getItem("pickUpDate")),'yyyy-MM-dd') ,
            returnDate: format(new Date(localStorage.getItem("returnDate")),'yyyy-MM-dd')
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


        this.loadAvailableVehicles();
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

                            <DatePickerBrowse label={"PickUp-Date"}/>


                            <TimePickerBrowse label={"PickUp-Time"}/>
                        </Grid>

                        <Grid style={{display: 'flex', width: '100%'}}> <DatePickerBrowse label={"Return-Date"}/>
                            <TimePickerBrowse label={"Return-Time"}/>
                        </Grid>

                        <Grid style={{width: '100%', display: 'flex', justifyContent: 'center'}}>


                            <Button variant="contained"
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

                                <Card style={{width:'20vw',margin:'1vh'} }>
                                    <CardMedia
                                        component="img"
                                        alt="img"
                                        height="130"
                                        image={carImage}

                                    />
                                    <CardContent>
                                        <Typography  variant="h6" textAlign={'center'}>
                                            {vehicle.vehicleId}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{display:'flex',justifyContent:'center'}}>


                                        <Link to="rent" style={{ textDecoration: 'none', color: 'black' }}>
                                            <Typography textAlign="center">BOOK NOW</Typography>
                                        </Link>
                                        {/*<Button size="small"  style={{backgroundColor:'green',color:'white'}}>Book Now</Button>*/}
                                    </CardActions>
                                </Card>


                            ))
                        }



                </Grid>

            </Grid>

        )
    }


}

export default BrowseGrid;

