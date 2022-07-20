import {Avatar, Button, Grid, Tab, Tabs, TextField, Typography} from "@mui/material";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import carImage from '../../assets/car.png'
import aboutImage from '../../assets/About.jpg'
import * as React from 'react';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';


class Home extends Component {

    myRenderPoint(point) {
        return <circle cx={point[0]} cy={point[1]} r={5}/>;
    }


    render() {

        const {classes} = this.props;

        return (
            <Grid className={classes.container}>

                <Grid className={classes.home}>

                    <Grid className={classes.polygon}>

                        <Tabs
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            style={{position: "absolute", top: "7vh", right: '15vw'}}
                        >
                            <Tab label="Home" style={{color: 'white'}}/>
                            <Tab label="About" style={{color: 'white'}}/>
                            <Tab label="Contact" style={{color: 'white'}}/>
                            <Tab label=" Sign In" style={{color: 'white'}}/>

                        </Tabs>
                        <Button variant="outlined" style={{
                            height: '35px',
                            color: 'white',
                            borderColor: 'white',
                            borderRadius: 50,
                            position: "absolute",
                            top: "7.8vh",
                            right: '8vw'
                        }}>Sign Up</Button>


                        <Avatar src="/broken-image.jpg" style={{position: "absolute", top: "7.5vh", right: '3vw'}}/>

                        <svg height="100vh" width="60vw">
                            <polygon
                                points="1000,0 1000,690 430,690 200,150 350,0"

                                fill='#39745F'

                                style={{stroke: '#39745F', strokeWidth: 60, strokeLinejoin: 'round'}}
                            />
                        </svg>

                        <img src={carImage}
                             style={{
                                 height: '65vh',
                                 position: "absolute",
                                 top: '40vh',
                                 right: '3vw',
                                 display: 'inline'
                             }}/>

                    </Grid>

                    <Grid>
                        <Grid>
                            <Typography variant="h2" component="h2" style={{
                                color: 'black',
                                position: "absolute",
                                top: "30vh",
                                left: '3vw',
                                fontFamily: 'sans-serif'
                            }}>
                                Easy Car Rental
                            </Typography>
                            <Typography variant="h5" component="h2"
                                        style={{color: 'black', position: "absolute", top: "40vh", left: '3vw'}}>
                                Hire your Dream Car
                            </Typography>

                        </Grid>

                        <Grid style={{
                            width: '36vw',
                            height: '24vh',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            position: 'absolute',
                            top: "49vh",
                            left: '3vw'

                        }}>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Pick-up Date"
                                    //value={new Date()}
                                    //onChange={}
                                    renderInput={(params) => <TextField {...params} />}

                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Pick-up Time"
                                    value={new Date()}
                                    onChange={null}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Drop-off date"
                                    value={new Date()}
                                    onChange={new Date()}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Drop-off Time"
                                    value={new Date()}
                                    onChange={new Date()}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                            <Button variant="contained" href="#contained-buttons"
                                    style={{
                                        width: '10vw',
                                        position: "absolute",
                                        top: "25vh",
                                        left: '10vw',
                                        backgroundColor: '#666666'
                                    }}>
                                Search
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

                <Grid className={classes.home} width={'100vw'} height={'100vh'}>

                    <Grid>
                        <svg height="100vh" width="100vw">
                            <polygon
                                points="0,0 0,1000 1200,1000 800,0"

                                fill='#39745F'


                            />
                        </svg>

                        <Grid display={"flex"} justifyContent={"center"}>

                            <Typography variant="h4" component="h2" style={{
                                color: '#7E7E7E',
                                fontFamily: 'sans-serif'
                            }}>
                                About Us
                            </Typography>

                        </Grid>

                        <Grid display={"flex"} justifyContent={"center"}>
                            <Typography variant="h6" component="h2" style={{
                                fontFamily: 'sans-serif',
                                textAlign: 'left,',
                                width: '40vw'
                            }}>

                                Easy car rental private limited is a car rental service <br/>with 5 years of history.
                                This
                                company has about
                                50 cars and 40 drivers working for them in regular shifts. This company is located at
                                No.
                                200, Galle
                                Road, Panadura, and well known for their services. Usually, people who don’t own a car,
                                people who
                                are waiting for their car to be repaired and, travelers or tourists seek their services.
                                Easy car rental private limited is a car rental service <br/>with 5 years of history.
                                This
                                company has about
                                50 cars and 40 drivers working for them in regular shifts. This company is located at
                                No.
                                200, Galle
                                Road, Panadura, and well known for their services. Usually, people who don’t own a car,
                                people who
                                are waiting for their car to be repaired and, travelers or tourists seek their services.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                        <img src={aboutImage}
                             style={{
                                 height: '65vh',
                                 position: "absolute",
                                 top: '40vh',
                                 right: '3vw',
                                 display: 'inline'
                             }}/>
                    </Grid>
                </Grid>
            </Grid>


        )
    }
}


export default withStyles(styleSheet)(Home)