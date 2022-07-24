import {Grid} from "@material-ui/core";
import {Avatar, Button, Tab, Tabs} from "@mui/material";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";
import RadioButtonList from "../RadioButtonList";
import ImageList from "../ImageList";
import FilterList from "../RadioButtonList";
import React from "react";
import Divider from "@mui/material/Divider";

export function BrowseGrid() {
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
                width: '40%',
                height: '100%',
                backgroundColor: '#c4c4c4',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection:'column'


            }}>


                <Grid style={{width:'90%',height:'30%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Grid style={{display:'flex',width:'100%'}}> <DatePicker/>
                        <TimePicker/>
                    </Grid>

                    <Grid style={{display:'flex',width:'100%'}}> <DatePicker/>
                        <TimePicker/>
                    </Grid>

                    <Grid style={{width:'100%',display:'flex',justifyContent:'center'}}>


                        <Button variant="contained" href="#contained-buttons"
                                style={{
                                    width: '20%',
                                    margin: '2%',
                                    backgroundColor: '#595959',

                                }}>
                            Search
                        </Button>

                    </Grid>


                </Grid>



                <Grid style={{width:'90%',height:'65%',display:'flex',flexDirection:'column',alignItems:'center'}}>

                    <FilterList/>

                </Grid>
            </Grid>

            <Grid style={{
                width: '100%',
                height: '95%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ImageList/>
            </Grid>

        </Grid>
    )
}

