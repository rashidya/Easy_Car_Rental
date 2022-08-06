import {Grid, TableCell} from "@material-ui/core";
import {Autocomplete, Avatar, Button, Tab, Tabs, TextField} from "@mui/material";
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
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import StarIcon from "@mui/icons-material/Star";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import CardActions from "@mui/material/CardActions";
import carImage from '../../assets/img.png'

import BrowseService from "../../services/BrowseService";
import DatePickerBrowse from "../common/DatePickerBrowse";
import TimePickerBrowse from "../common/TimePickerBrowse";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

class BrowseGrid extends Component {

    constructor(props) {
        super(props);


        this.state = {

            fuelTypeSort: '',
            transmissionTypeSort: '',
            noOfPassengersSort: '',
            vehicleTypeSort: '',
            brandSort: '',
            vehicleList: [],

            fuel: [
                {
                    type: 'PETROL'
                },
                {
                    type: 'DIESEL'
                }
            ],
            transmission: [
                {
                    type: 'AUTO'
                },
                {
                    type: 'MANUAL'
                }
            ]
            ,
            vehicleCategory: [
                {
                    type: 'GENERAL'
                },
                {
                    type: 'PREMIUM'
                },
                {
                    type: 'LUXURY'
                }
            ],
            brand: [],
            noOfPassengers: []


        }
    }


    loadAvailableVehicles = async () => {
        let params = {
            pickupDate: format(new Date(localStorage.getItem("pickUpDate")), 'yyyy-MM-dd'),
            returnDate: format(new Date(localStorage.getItem("returnDate")), 'yyyy-MM-dd')
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
                width: '100%'
            }}>


                <Grid style={{
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}>


                    <Grid style={{

                        height: '8vh',
                        display: 'flex',
                        width: '80vw',
                        marginTop: '5vh'

                    }}>

                        <Grid style={{display: 'flex'}}>
                            <DatePickerBrowse label={"PickUp-Date"} width={'25vw'}/>


                            <TimePickerBrowse label={"PickUp-Time"} width={'25vw'}/>


                            <DatePickerBrowse label={"Return-Date"} width={'25vw'}/>
                            <TimePickerBrowse label={"Return-Time"} width={'25vw'}/>
                        </Grid>

                        <Grid style={{width: '20%', height: '70%', display: 'flex', justifyContent: 'center'}}>


                            <Button variant="contained"
                                    onClick={this.loadAvailableVehicles}
                                    size={"small"}
                                    style={{
                                        width: '10vw',
                                        backgroundColor: '#595959',

                                    }}>
                                Search
                            </Button>

                        </Grid>


                    </Grid>


                    <Grid style={{
                        width: '70vw',
                        height: '10vh',
                        display: 'flex',
                        justifyContent:'center'
                    }}>

                        <Autocomplete
                            size={'small'}
                            style={{padding: '10px', width: '230px'}}
                            onChange={(e, value, r) => {

                                this.setState({
                                    vehicleTypeSort: value.type
                                })

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }

                            id="controllable-states-demo"
                            options={this.state.vehicleCategory}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Vehicle Type"/>}
                        />

                        <Autocomplete
                            size={'small'}

                            style={{padding: '10px', width: '230px'}}
                            onChange={(e, value, r) => {

                                this.setState({
                                    vehicleTypeSort: value.type
                                })

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }

                            id="controllable-states-demo"
                            options={this.state.fuel}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Fuel Type"/>}
                        />


                        <Autocomplete
                            size={'small'}
                            style={{padding: '10px', width: '230px'}}
                            onChange={(e, value, r) => {

                                this.setState({
                                    vehicleTypeSort: value.type
                                })

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }

                            id="controllable-states-demo"
                            options={this.state.transmission}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Transmission Type"/>}
                        />

                        <Autocomplete
                            size={'small'}
                            style={{padding: '10px', width: '230px'}}
                            onChange={(e, value, r) => {

                                this.setState({
                                    brandSort: value.type
                                })

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }

                            id="controllable-states-demo"
                            options={this.state.brand}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="Brand "/>}
                        />


                        <Autocomplete
                            size={'small'}
                            style={{padding: '10px', width: '230px'}}
                            onChange={(e, value, r) => {

                                this.setState({
                                    noOfPassengersSort: value.type
                                })

                            }}
                            getOptionLabel={
                                (option) => option.type
                            }

                            id="controllable-states-demo"
                            options={this.state.noOfPassengers}
                            sx={{width: 300}}
                            renderInput={(params) => <TextField {...params} label="No Of Passengers "/>}
                        />
                    </Grid>

                    <Grid style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                    }}>


                        {
                            this.state.vehicleList.map((vehicle) => (

                                <Card sx={{maxWidth: 360, minHeight: 360,m:2}} >
                                    <CardMedia
                                        component="img"
                                        alt="green iguana"
                                        height="140"
                                        image={carImage}
                                    />
                                    <CardContent style={{marginTop: '4px', marginBottom: '8px'}}>
                                        <Typography gutterBottom variant="h6" component="div"
                                                    style={{color: 'black'}}>
                                            {vehicle.brand}
                                        </Typography>

                                        <Typography gutterBottom variant="body2" component="div"
                                                    style={{color: 'black'}}>
                                            PRICE RATE : LKR.{vehicle.priceRate.monthlyRate}/ MONTH  LKR.{vehicle.priceRate.dailyRate}/ DAY


                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div"
                                                    style={{color: 'black', marginTop: '8px'}}>

                                            FREE KM :  {vehicle.freeMileage.monthlyFreeMileage}KM/ MONTH   {vehicle.freeMileage.dailyFreeMileage} KM/ DAY

                                        </Typography>

                                        <Grid style={{ width:'22.5vw',
                                            height:'4vh',
                                            //border:'1px solid red',
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent:'center'}}>
                                            <Grid style={{
                                                width:'7.5vw',
                                                height:'4vh',
                                                //border:'1px solid red',
                                                //backgroundColor:'red',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent:'left',
                                            }}>
                                                <DirectionsCarFilledOutlinedIcon style={{
                                                    fontSize: '16px',
                                                    color: '#2C3A47'
                                                }}/>
                                                <Typography variant="caption" display="block" gutterBottom
                                                            style={{
                                                                color: '#2C3A47',

                                                            }}>
                                                    {vehicle.fuelType}
                                                </Typography>
                                            </Grid>
                                            <Grid style={{
                                                width:'7.5vw',
                                                height:'4vh',
                                                //border:'1px solid red',
                                                //backgroundColor:'red',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent:'left',
                                            }}>
                                                <StarIcon style={{
                                                    fontSize: '16px',

                                                    color: '#2C3A47'
                                                }}/>
                                                <Typography variant="caption" display="block" gutterBottom
                                                            style={{
                                                                color: '#2C3A47',

                                                            }}>


                                                    {vehicle.vehicleType}
                                                </Typography>
                                            </Grid>
                                            <Grid style={{
                                                width:'7.5vw',
                                                height:'4vh',
                                                //border:'1px solid red',
                                                //backgroundColor:'red',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent:'left',
                                            }}>
                                                <SettingsSuggestIcon style={{
                                                    fontSize: '16px',
                                                    color: '#2C3A47'
                                                }}/>
                                                <Typography variant="caption" display="block" gutterBottom
                                                            style={{
                                                                color: '#2C3A47',

                                                            }}>
                                                    {vehicle.transmissionType}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid>
                                            <Grid style={{
                                                width:'22vw',
                                                height:'5vh',
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent:'center',
                                                //border:'1px solid red',

                                            }}>
                                                <Link to="/customerDashBoard/rent" variant={'contained'} onClick={() => {
                                                    localStorage.setItem("vehicleId", vehicle.vehicleId)
                                                }} style={{textDecoration: 'none', color: 'green'}}>
                                                    <Typography fontSize={'15px'} textAlign="center" >BOOK NOW</Typography>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>


                            ))


                        }



                     {/*    <Card style={{width: '20vw', margin: '1vh'}}>
                        <CardMedia
                            component="img"
                            alt="img"
                            height="130"
                            image={carImage}

                        />
                        <CardContent>
                            <Typography variant="h6" textAlign={'center'}>
                                {vehicle.vehicleId}
                            </Typography>
                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>


                            <Link to="rent" onClick={() => {
                                localStorage.setItem("vehicleId", vehicle.vehicleId)
                            }} style={{textDecoration: 'none', color: 'black'}}>
                                <Typography textAlign="center">BOOK NOW</Typography>
                            </Link>
                            <Button size="small" style={{backgroundColor: 'green', color: 'white'}}>Book Now</Button>
                        </CardActions>
                    </Card>*/}




                    </Grid>

                </Grid>


            </Grid>

        )
    }


}

export default BrowseGrid;

