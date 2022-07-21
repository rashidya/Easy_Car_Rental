import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Component} from "react";
import {
    Button,
    Grid, Paper,
    Table,
    TableBody, TableCell,
    TableContainer,
    TableHead,
    TableRow, Tab,
    Tabs,
    TextField,
    Typography, Avatar
} from "@mui/material";
import * as React from "react";


class SignIn extends Component{
   constructor(props) {
       super(props);
   }

   render() {
       const {classes}=this.props;
       return(

           <Grid className={classes.container}>

               <Grid className={classes.nav}>

                   <Grid display="flex" width={'40vw'} justifyContent={'space-evenly'} alignItems={'center'}>
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
                       <Button variant="outlined" style={{
                           height: '35px',
                           color: 'white',
                           borderColor: 'white',
                           borderRadius: 50,
                       }}>Sign Up</Button>


                       <Avatar src="/broken-image.jpg" />
                   </Grid>


               </Grid>

               <Grid width={"max-content"} padding={'10vh'} paddingBottom={'5vh'}>
                   <Typography variant="h5">
                       Create New Account
                   </Typography>
               </Grid>


               <Grid width="60vw" paddingLeft={'10vh'}>
                   <Grid
                       component="form"
                       sx={{
                           '& .MuiTextField-root': { m: 1, width: '25ch' },
                       }}
                       noValidate
                       autoComplete="off"
                   >
                       <div >
                           <TextField
                               required
                               id="outlined-required"
                               label="Email"
                               placeholder="C-001"
                               style={{width:'30vw'}}
                           />

                           <TextField

                               id="outlined-required"
                               label="Password"
                               placeholder="Ex: Rashmi Navodya"
                               style={{width:'20vw'}}
                           />


                           <TextField

                               id="outlined-required"
                               label="Address"
                               placeholder="Ex:Baddegama,Galle"
                               style={{width:'30vw'}}
                           />

                           <TextField

                               id="outlined-required"
                               label="Contact No"
                               placeholder="Ex:077-7878787"
                               style={{width:'20vw'}}
                           />


                           <TextField

                               id="outlined-required"
                               label="NIC No"
                               placeholder="Ex:077-7878787"
                               style={{width:'20vw'}}
                           />
                           <TextField

                               id="outlined-required"
                               label="Driving License No"
                               placeholder="Ex:077-7878787"
                               style={{width:'20vw'}}
                           />

                       </div>

                   </Grid>

               </Grid>

               <Grid style={{left:0,right:0,top:0,bottom:0,margin:"auto",width:"max-content",paddingBottom:"5vh"}}>

                   <Button variant="contained" color="info" style={{margin:"1vh"}}>
                       Cancel
                   </Button>
                   <Button variant="contained" color="success" style={{margin:"1vh"}}>
                       Register
                   </Button>

               </Grid>



           </Grid>



       );
   }

}

export default withStyles(styleSheet)(SignIn)