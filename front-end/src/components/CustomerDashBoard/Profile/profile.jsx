import {Component} from "react";
import {Grid} from "@mui/joy";
import FormDetails from '../../UserDetailsForm'
import {Upload} from "@mui/icons-material";
import IconButton from "../../UploadButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Button} from "@mui/material";

class Profile extends Component{

    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Grid display={"flex"} width={'81vw'} height={"84vh"} justifyContent={'center'} >
                <Grid height={'100%'} width={'60%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                    <Grid display={'flex'} justifyContent={'center'} >
                      <div style={{width:'10vw',height:'10vw',backgroundColor:'#c4c4c4',borderRadius:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                          <IconButton/>
                      </div>

                    </Grid>

                    <Grid>
                            <FormDetails />
                    </Grid>


                </Grid>


                <Grid width={'40%'}  display={'flex'} justifyContent={'space-evenly'} alignItems={"center"} flexDirection={'column'}>
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

export default Profile