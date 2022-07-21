import {Component} from "react";
import {Grid} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import React from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import DatePicker from "../components/DatePicker";
import TimePicker from "../components/TimePicker";
import RadioButtonList from "../components/RadioButtonList";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import ImageList from "../components/ImageList";


class Browse extends Component {


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


                <Grid className={classes.browseBody}>
                    <Grid className={classes.sideBar}>
                        <Grid className={classes.dateSearch}>

                            <Grid style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                marginTop: '10vh'
                            }}>

                                <Grid className={classes.dateGrids}>

                                    <DatePicker/>
                                    <TimePicker/>
                                </Grid>


                                <Grid className={classes.dateGrids}>
                                    <DatePicker/>
                                    <TimePicker/>
                                </Grid>


                            </Grid>

                            <Grid style={{margin: '4vh'}}>
                                <Button variant="contained" href="#contained-buttons"
                                        style={{
                                            width: '10vw',
                                            backgroundColor: '#595959',

                                        }}>
                                    Search
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid className={classes.filterArea}>

                            <Grid style={{marginTop:'10vh',marginLeft:'2vw'}}>
                                <RadioButtonList/>
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid className={classes.resultBody}>
                        <ImageList/>
                    </Grid>
                </Grid>

            </Grid>
        )
    }

}

export default withStyles(styleSheet)(Browse)