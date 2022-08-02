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
                                        Color - Black<br/><br/>
                                        Type - Luxury<br/><br/>
                                        No of passengers - 5<br/><br/>
                                        Transmission type - Manual<br/><br/>
                                        Fuel Type - Diesel<br/><br/>
                                        Registration number - 4506584798463

                                    </Grid>
                                    <Grid style={{display:'flex',alignItems:'start', height:'64.5%',fontSize:'20px'}}>
                                        Prices for the rent durations.<br/>
                                        - Daily rate (Rs) - 18,000<br/>
                                        - Monthly rate (Rs) - 300,000.00<br/><br/>
                                        Free mileage for the price and duration<br/>
                                        - Free Km for a Day - 100<br/>
                                        - Free Km for a month - 2400<br/><br/>
                                    </Grid>

                                </Grid>

                                <Grid style={{display:'flex',justifyContent:'end',width:'100%'}}>

                                    <Button variant="contained"  style={{
                                        height: '35px',
                                        borderRadius: 10,
                                        margin:'2px',
                                        backgroundColor:'#949292'
                                    }}>Back</Button>

                                    <Button
                                        href={'/booking'}
                                        variant="contained" color={'success'} style={{
                                        height: '35px',
                                        borderRadius: 10,
                                        margin:'2px'
                                    }}>Book Now</Button>

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