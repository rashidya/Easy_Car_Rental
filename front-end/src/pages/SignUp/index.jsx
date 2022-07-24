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

import SignUpForm from '../../components/SignUp'


class SignUp extends Component{
   constructor(props) {
       super(props);
   }

   render() {
       const {classes}=this.props;
       return(





             <Grid className={classes.container}


                   >
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




                 <Grid width="100vw" height={'90vh'}  display={'flex'} alignItems={'center'} justifyContent={'center'} style={{backgroundColor:'#c4c4c4'}}>

                     <Grid width="80vw" height={'85vh'}  display={'flex'}  justifyContent={'space-evenly'} alignItems={'center'} flexDirection={'column'} style={{backgroundColor:'white'}}>
                    <SignUpForm/>

                     <Grid marginRight={"8%"}>

                         <Button variant="contained" color="info" style={{marginRight:"1vh"}}>
                             Cancel
                         </Button>
                         <Button variant="contained" color="success" style={{marginLeft:"1vh"}}>
                             Register
                         </Button>

                     </Grid>

                 </Grid>
                 </Grid>




             </Grid>



       );
   }

}

export default withStyles(styleSheet)(SignUp)