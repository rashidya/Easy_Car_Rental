import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
//import carsImage from "../../assets/img/carsTopic.png";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
    Avatar,
    Button,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput, Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import loginBg from "../../assets/contact.jpg";


class SignInPage extends Component {
    render() {
        const {classes} = this.props;
        return(
            <Grid className={classes.container}  style={{
                backgroundImage: `url(${loginBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <Grid className={classes.nav}>

                    <Grid display="flex" width={'40vw'} justifyContent={'space-evenly'} alignItems={'center'}>
                        <Tabs
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"

                        >
                            <Tab label="Home" style={{color: 'white'}} href={'/'}/>
                           {/* <Tab label="About" style={{color: 'white'}}/>
                            <Tab label="Contact" style={{color: 'white'}}/>*/}
                            <Tab label=" Sign In" style={{color: 'white'}} href={'signInPage'}/>

                        </Tabs>
                        <Button variant="outlined" href={'sighUpPage'} style={{
                            height: '35px',
                            color: 'white',
                            borderColor: 'white',
                            borderRadius: 50,
                        }}>Sign Up</Button>


                        <Avatar src="/broken-image.jpg" />
                    </Grid>


                </Grid>
                <Grid className={classes.loginContainer} >
                    <Grid style={{width:'65px',height:"0px"}}>
                        <AccountCircleIcon style={{fontSize:'85px',paddingLeft:'8vw',color:'white'}}/>
                    </Grid>
                    <Grid container className={classes.loginForm}>
                        <Grid item lg={12} md={12} sm={6} xm={6}>
                            <TextField id="outlined-basic" style={{width:'87%'}} label="User name"  variant="outlined" />
                        </Grid>
                        <Grid item lg={12} md={12} sm={6} xm={6}>
                            <TextField id="outlined-basic" style={{width:'87%'}} label="Password" type='password' variant="outlined"/>
                        </Grid>
                    </Grid>
                    <Grid className={classes.btn_container}  paddingLeft='2.5vw' paddingTop='4vh'>
                        <Button style={{backgroundColor:'#040404',color:'white',fontWeight:'semi',height:'6vh',width:'17vw',
                            fontSize:'15px',opacity:'95%'}}>Login</Button>
                    </Grid>
                </Grid>
                <Grid style={{width:'15vw',height:'16vh',backgroundColor:'#040404',marginTop:'-54vh',marginLeft: '45vw'}}>
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styleSheet)(SignInPage)