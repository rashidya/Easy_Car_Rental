import {Avatar, Button, Grid, Tab, Tabs, Typography} from "@mui/material";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import carImage from '../../assets/car.png'
import * as React from 'react';


class Home extends Component {
    myRenderPoint(point) {
        return <circle cx={point[0]} cy={point[1]} r={5}/>;
    }


    render() {
        const {classes} = this.props;

        return (
            <Grid>

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
                            points="1000,0 1000,640 430,640 200,150 350,0"

                            fill='purple'

                            style={{stroke: 'purple', strokeWidth: 60, strokeLinejoin: 'round'}}
                        />
                    </svg>

                    <img src={carImage}
                         style={{height: '65vh', position: "absolute", top: '35vh', right: '4vw', display: 'inline'}}/>

                </Grid>

                <Grid>
                    <Grid>
                        <Typography variant="h2" component="h2" style={{
                            color: '#7E7E7E',
                            position: "absolute",
                            top: "30vh",
                            left: '3vw',
                            fontFamily: 'sans-serif'
                        }}>
                            Easy Car Rental
                        </Typography>
                        <Typography variant="h5" component="h2"
                                    style={{color: '#898989', position: "absolute", top: "40vh", left: '3vw'}}>
                            Hire your Dream Car
                        </Typography>

                    </Grid>

                    <Grid>

                        <Button variant="contained" href="#contained-buttons"
                                style={{width:'10vw',position: "absolute", top: "75vh", left: '10vw', backgroundColor: 'black'}}>
                            Search
                        </Button>
                    </Grid>

                </Grid>

            </Grid>


        )
    }
}

export default withStyles(styleSheet)(Home)