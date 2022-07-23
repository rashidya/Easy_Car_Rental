import {Grid} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import RadioButtonList from "../RadioButtonList";
import ImageList from "../ImageList";
import React from "react";

export function BrowseGrid() {
    return (
        <Grid style={{
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }}>


                <Grid style={{
                    width: '96%',
                    height: '13%',
                    backgroundColor: '#c4c4c4',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    marginTop:'3%'

                }}>




                                <DatePicker/>
                                <TimePicker/>




                                <DatePicker/>
                                <TimePicker/>


                                <DatePicker/>




                                <Button variant="contained" href="#contained-buttons"
                                        style={{
                                            width: '20%',
                                            margin:'2%',
                                            backgroundColor: '#595959',

                                        }}>
                                    Search
                                </Button>







                </Grid>


                <Grid style={{
                    width: '100%',
                    height: '88%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop:'2%'
                }}>
                    <ImageList/>
                </Grid>


        </Grid>
    )
}

