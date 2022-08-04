import {Avatar, Button, Grid, Tab, Tabs, TextField, Typography} from "@mui/material";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import carImage from '../../assets/car.png'
import * as React from 'react';

import TimePicker from '../../components/common/TimePicker';
import DatePicker from '../../components/common/DatePicker';


class Home extends Component {


    constructor(props) {
        super(props);


        this.state={
            pickUpDate:'',
            pickUpTime:'',
            returnDate:'',
            returnTime:''
        }
    }

    myRenderPoint(point) {
        return <circle cx={point[0]} cy={point[1]} r={5}/>;
    }




    render() {

        const {classes} = this.props;

        return (
            <Grid className={classes.container}>

                <Grid className={classes.home}>

                    <Grid className={classes.datePickers} paddingLeft={'3vw'}>
                        <Grid paddingBottom={'10vh'} paddingLeft={'2vh'}>
                            <Typography variant="h2" component="h2" style={{
                                color: 'black',
                                fontFamily: 'sans-serif'
                            }}>
                                Easy Car Rental
                            </Typography>
                            <Typography variant="h5" component="h2"
                                        style={{color: 'black'}}>
                                Hire your Dream Car
                            </Typography>

                        </Grid>

                        <Grid>

                            <Grid display='flex' padding={'2vh'}  height={'25vh'} width={'37vw'} flexWrap={"wrap"} >
                                <Grid style={{display: 'flex', width: '100%'}}>
                                    <DatePicker
                                        label={"PickUp-Date"}
                                    />
                                    <TimePicker label={"PickUp-Time"}/>
                                </Grid>

                                <Grid style={{display: 'flex', width: '100%'}}> <DatePicker label={"Return-Date"}/>
                                    <TimePicker label={"Return-Time"}/>
                                </Grid>

                            </Grid>



                            <Grid display={'flex'} justifyContent={'center'} paddingTop={'2vh'}>
                                <Button variant="contained" href="browse"
                                        style={{
                                            width: '10vw',
                                            backgroundColor: '#666666'
                                        }} >
                                    Search
                                </Button>
                            </Grid>


                        </Grid>

                    </Grid>

                    <Grid className={classes.polygon} width={'57vw'} overflowX='hidden'>

                        <Grid display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}
                              position={'absolute'} top={'7vh'} right={'2vw'} width='20vw'>
                            <Tabs
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"

                            >
                               {/* <Tab label="Home" style={{color: 'white'}}/>
                                <Tab label="About" style={{color: 'white'}}/>
                                <Tab label="Contact" style={{color: 'white'}}/>*/}
                                <Tab label=" Sign In" style={{color: 'white'}} href={'/signInPage'}/>

                            </Tabs>

                            <Button variant="outlined" href={'/sighUpPage'} style={{
                                height: '35px',
                                color: 'white',
                                borderColor: 'white',
                                borderRadius: 50,

                            }}>Sign Up</Button>


                            <Avatar src="/broken-image.jpg"/>

                        </Grid>

                        <Grid position={'absolute'} top={'26vh'} right={'10vh'}> <img src={carImage}
                                                                                     style={{width: '57vw'}}

                        /></Grid>


                        <Grid width={'57vw'} overflow={'hidden'}>
                            <svg height="100vh" width="60vw" >
                                <polygon
                                    points="880,0 880,720  300,720 110,150 280,0"


                                    fill='#39745F'

                                    style={{stroke: '#39745F', strokeWidth: 30, strokeLinejoin: 'round'}}
                                />
                            </svg>
                        </Grid>


                    </Grid>


                </Grid>

             {/*   <Grid className={classes.about}>
                    <Grid position={"absolute"} display={"flex"}>
                        <Grid zIndex={1}>
                            <svg height="100vh" width="100vw">
                                <polygon
                                    points="0,0 0,900 680,900 1000,550 835,0"

                                    fill='#EBEBEB'

                                    style={{stroke: '#EBEBEB', strokeWidth: 30, strokeLinejoin: 'round'}}

                                />
                            </svg>

                            <Grid position={'absolute'} top={0} left={0} paddingTop={'10vh'} paddingLeft={'5vh'}>
                                <Grid display={"flex"}>

                                    <Typography variant="h4" component="h2" style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'sans-serif'
                                    }}>
                                        About Us
                                    </Typography>

                                </Grid>

                                <Grid display={"flex"} justifyContent={"center"} paddingTop={'10vh'}>
                                    <Typography variant="h6" component="h2" style={{
                                        fontFamily: 'sans-serif',
                                        textAlign: 'left,',
                                        width: '40vw'
                                    }}>

                                        Easy car rental private limited is a car rental service <br/>with 5 years of
                                        history.
                                        This
                                        company has about
                                        50 cars and 40 drivers working for them in regular shifts. This company is
                                        located
                                        at
                                        No.
                                        200, Galle
                                        Road, Panadura, and well known for their services. Usually, people who don’t own
                                        a
                                        car,
                                        people who
                                        are waiting for their car to be repaired and, travelers or tourists seek their
                                        services.
                                        Easy car rental private limited is a car rental service <br/>with 5 years of
                                        history.
                                        This
                                        company has about
                                        50 cars and 40 drivers working for them in regular shifts. This company is
                                        located
                                        at
                                        No.
                                        200, Galle
                                        Road, Panadura, and well known for their services. Usually, people who don’t own
                                        a
                                        car,
                                        people who
                                        are waiting for their car to be repaired and, travelers or tourists seek their
                                        services.
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid position={'absolute'} right={0} top={0}>
                            <img src={aboutImage}
                                 style={{
                                     height: '100vh',
                                 }}/>
                        </Grid>
                    </Grid>


                </Grid>

                <Grid className={classes.contact}>
                    <Grid position={"absolute"} display={"flex"} width={'100vw'} height={'100vh'} overflow={'hidden'}>

                        <Grid position={'absolute'} left={0} top={0}>
                            <img src={contactImage}
                                 style={{
                                     height: '100vh',
                                 }}/>
                        </Grid>

                        <Grid zIndex={1}>
                            <svg height="100vh" width="100vw">
                                <polygon
                                    points="2000,0 2000,900 900,900 650,200 890,0"

                                    fill='#BABABA'

                                    style={{stroke: '#BABABA', strokeWidth: 30, strokeLinejoin: 'round'}}
                                />
                            </svg>

                            <Grid position={'absolute'} top={0} right={0} paddingTop={'10vh'} paddingLeft={'5vh'}>
                                <Grid display={"flex"}>

                                    <Typography variant="h4" component="h2" style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'sans-serif',
                                        textAlign:'right'
                                    }}>
                                        Contact Us
                                    </Typography>

                                </Grid>

                                <Grid display={"flex"} justifyContent={"center"} paddingTop={'10vh'}>
                                    <Grid>
                                        <Typography variant="h6" component="h2" style={{
                                            fontFamily: 'sans-serif',
                                            textAlign: 'right,',
                                            width: '40vw'
                                        }}>

                                            easycarrental@gmail.com
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>


                </Grid>*/}


            </Grid>


        )
    }
}


export default withStyles(styleSheet)(Home)