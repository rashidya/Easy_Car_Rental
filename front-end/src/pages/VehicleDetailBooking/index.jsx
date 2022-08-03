import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import DatePicker from "../../components/common/DatePicker";
import TimePicker from "../../components/common/TimePicker";
import RadioButtonList from "../../components/RadioButtonList";
import ImageList from "../../components/ImageList";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import carImage from "../../assets/carDetail.jpg";

class VehicleDetailBooking extends Component{
    constructor(props) {
        super(props);


        this.state={
           // vehicle:this.props.vehicle,

            vehicle:{
                vehicleId: 'V-001',
                registrationNo: '1234',
                color: 'Black',
                brand: 'Honda Grace',
                noOfPassengers: '10',
                fuelType: 'PETROL',
                vehicleType: 'PREMIUM',
                transmissionType: 'AUTO',
                pricePerExtraKM: '300',
                vehicleAvailability: 'AVAILABLE',
                refundableDamageFee: '15000',
                mileage: '1209',
                lastServiceMileage: '12',
                priceRate: {
                    dailyRate: '12',
                    monthlyRate: '12',
                },
                freeMileage: {
                    dailyFreeMileage: '12',
                    monthlyFreeMileage: '12',
                }


            }
        }
    }


    render() {


        const {classes} = this.props;

        return (
            <Grid className={classes.container}>

                <Grid className={classes.navBar}>
                    <Grid className={classes.nav}>
                        <Grid>
                            <Tabs
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"

                            >
                                <Tab label="Home" style={{color: 'white'}}/>
                                <Tab label="About" style={{color: 'white'}}/>
                                <Tab label="Contact" style={{color: 'white'}}/>
                                <Tab label=" Sign In" style={{color: 'white'}}/>

                            </Tabs>
                        </Grid>


                        <Grid>
                            <Button variant="outlined" style={{
                                height: '35px',
                                color: 'white',
                                borderColor: 'white',
                                borderRadius: 50,
                            }}>Sign Up</Button>
                        </Grid>


                        <Grid>
                            <Avatar src="/broken-image.jpg"/>
                        </Grid>


                    </Grid>

                </Grid>


                <Grid className={classes.detailBody}>
                    <Grid className={classes.detailBodyBackground}>
                        <Grid>
                            <Grid className={classes.image} style={{backgroundImage:'url(${carImage})',backgroundSize:"cover",backgroundRepeat:'no-repeat'}}>
                                <img src={carImage}
                                     style={{height: '70vh', width: '35vw', borderRadius: '10px'}}

                                />
                            </Grid>

                        </Grid>

                        <Grid>
                            <Grid className={classes.details}>
                                <Grid style={{display:'flex', justifyContent:'space-between'}}>
                                    <Grid style={{fontSize:'20px'}}>
                                        Color - {this.state.vehicle.color}<br/><br/>
                                        Type - {this.state.vehicle.vehicleType}<br/><br/>
                                        No of passengers - {this.state.vehicle.noOfPassengers}<br/><br/>
                                        Transmission type - {this.state.vehicle.transmissionType}<br/><br/>
                                        Fuel Type - {this.state.vehicle.fuelType}<br/><br/>
                                        Registration number - {this.state.vehicle.registrationNo}

                                    </Grid>
                                    <Grid style={{display:'flex',alignItems:'start', height:'64.5%',fontSize:'20px'}}>
                                        Prices for the rent durations.<br/>
                                        - Daily rate (Rs) - {this.state.vehicle.priceRate.dailyRate}<br/>
                                        - Monthly rate (Rs) - {this.state.vehicle.priceRate.monthlyRate}<br/><br/>
                                        Free mileage for the price and duration<br/>
                                        - Free Km for a Day - {this.state.vehicle.freeMileage.dailyFreeMileage}<br/>
                                        - Free Km for a month - {this.state.vehicle.freeMileage.monthlyFreeMileage}<br/><br/>
                                    </Grid>

                                </Grid>


                            </Grid>



                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        );
    }
}

export default withStyles(styleSheet)(VehicleDetailBooking)