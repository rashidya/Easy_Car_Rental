import {Component} from "react";
import {Grid} from "@mui/joy";
import IconButton from "../UploadButton";
import FormDetails from "../UserDetailsForm";
import {Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

class DriverProfile extends Component{

    render() {
        return(

                <Grid display={"flex"} width={'81vw'} height={"84vh"} justifyContent={'center'} >
                    <Grid width={'50%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                        <Grid display={'flex'} justifyContent={'center'} >
                            <div style={{width:'10vw',height:'10vw',backgroundColor:'#c4c4c4',borderRadius:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <IconButton/>
                            </div>

                        </Grid>

                        <Grid marginTop={'10vh'}>
                            <FormDetails/>
                        </Grid>

                        <Grid  display={'flex'} justifyContent={'center'} marginTop={'10vh'}>
                            <Button variant="contained" color="info" style={{margin:"1vh"}}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="success" style={{margin:"1vh"}}>
                                Update
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid width={'50%'}  display={'flex'} justifyContent={'space-evenly'} alignItems={"center"} flexDirection={'column'}>
                        <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor:'',flexDirection:'column'}}>
                            <IconButton/>
                            <Typography>NIC Image</Typography>
                        </div>


                        <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'',flexDirection:'column'}}>
                            <IconButton/>
                            <Typography>Driving license Image</Typography>
                        </div>

                    </Grid>
                </Grid>

        )
    }

}

export default DriverProfile