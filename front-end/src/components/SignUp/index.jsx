import {Component} from "react";
import {Grid} from "@mui/joy";
import FormDetails from '../UserDetailsForm'
import {Upload} from "@mui/icons-material";
import IconButton from "../UploadButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Button} from "@mui/material";

import TextField from "@mui/material/TextField";

class Profile extends Component{

    render() {
        return(
            <Grid display={"flex"} width={'75vw'} height={"60vh"} justifyContent={'center'} >
                <Grid width={'50%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                    <Grid display={'flex'} justifyContent={'center'} marginTop={"10px"}>
                        <div style={{width:'10vw',height:'10vw',backgroundColor:'#c4c4c4',borderRadius:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <IconButton/>
                        </div>

                    </Grid>

                    <Grid marginTop={'5vh'}>
                        <FormDetails/>
                    </Grid>


                </Grid>


                <Grid width={'35%'}  display={'flex'} justifyContent={'space-evenly'} alignItems={"center"} flexDirection={'column'}>
                    <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor:'',flexDirection:'column'}}>
                        <IconButton/>
                        <Typography>NIC Image</Typography>
                    </div>


                    <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'',flexDirection:'column'}}>
                        <IconButton/>
                        <Typography>Driving license Image</Typography>
                    </div>

                    <Grid>
                        <TextField
                            required
                            id="outlined-required"
                            label="Role"
                            defaultValue=""
                            sx={{ mt:2, width: '38ch' }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

export default Profile