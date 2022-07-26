import {Component} from "react";
import {Grid} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import React from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import DatePicker from "../../components/DatePicker";
import TimePicker from "../../components/TimePicker";
import RadioButtonList from "../../components/RadioButtonList";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import ImageList from "../../components/ImageList";
import {BrowseGrid} from '../../components/BrowsePage'


class Browse extends Component {


    render() {


        const {classes} = this.props;

        return (
            <Grid style={{width:'100%',overflowX:"hidden"}}>
                <Grid style={{backgroundColor: '#39745F',
                    width: '100%',
                    height: '10vh',
                    display: 'flex',
                    justifyContent: 'end',
                overflowX:"hidden"}}>

                    <Grid style={{ width: '20%',
                        height: '10vh',
                        display:'flex',
                        justifyContent:'space-evenly',
                        alignItems:'center'}}>
                        <Grid>
                            <Tabs
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"

                            >

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

                <Grid style={{width:'100%',height:'100vh',overflowX:"hidden"}}>
                    <BrowseGrid/>
                </Grid>


            </Grid>

        )
    }

}

export default withStyles(styleSheet)(Browse)