import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import * as React from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {

    TextField,
    Typography
} from "@mui/material";

import loginBg from "../../assets/contact.jpg";
import SignInService from "../../services/signInService";





import MyButton from "../../components/common/Button";
import GDSESnackBar from "../../components/common/snackBar";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import {Link, Route} from "react-router-dom";



class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPassword:false,
            formData: {
                userName: '',
                password: '',

            },
            loginUser: {
                userName:'',
                role: ''

            },
            alert: false,
            message: '',
            severity: '',


            link:'',

            btnLabel: 'Login',
            btnColor: 'primary'

        }
    }

    Login = async () => {
        let formData = this.state.formData;

        let params = {
            userName: formData.userName,
            password: formData.password,
        }

        let res = await SignInService.fetchUser(params);
        if (res.status === 200) {


            if (res.data.data.role == 'ADMIN'){  this.setState({
                link:'/adminDashBoard'
            });}

            if (res.data.data.role == 'DRIVER'){  this.setState({
                link:'/driverDashBoard'
            });}

            if (res.data.data.role == 'REGISTERED_USER'){  this.setState({
                link:'/customerDashBoard'
            });}



            //this.clearFields();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }

    };


    render() {
        const {classes} = this.props;

        return (


                <>

                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.Login}>
                        <Grid className={classes.container} style={{
                            backgroundImage: `url(${loginBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>


                            <Grid className={classes.loginContainer}>
                                <Grid container className={classes.loginForm}>

                                    <Grid item lg={12} md={12} sm={6} xm={6} width={'10%'}><Typography
                                        textAlign={"center"}
                                        fontWeight={'bolder'}
                                        variant={'h5'}>Sign
                                        In</Typography></Grid>

                                    <Grid item lg={12} md={12} sm={6} xm={6} height={'60%'} display={"flex"}
                                          alignItems={"center"}
                                          flexDirection={"column"} justifyContent={"space-evenly"}>

                                        <TextField id="outlined-basic" margin={'5px'} style={{width: '87%'}}
                                                   label="User name"
                                                   variant="outlined"

                                                   value={this.state.formData.userName}
                                                   onChange={(e) => {
                                                       let formDataOb = this.state.formData
                                                       formDataOb.userName = e.target.value
                                                       this.setState(formDataOb)
                                                   }}
                                                   validators={['required']}
                                        />


                                        <FormControl sx={{m: 1, width: '87%'}} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={(e) => {
                                                                let formDataOb = this.state.formData
                                                                formDataOb.showPassword = !formDataOb.showPassword
                                                                this.setState(formDataOb)
                                                            }}
                                                            onMouseDown={(event) => {
                                                                event.preventDefault();
                                                            }}
                                                            edge="end"
                                                        >
                                                            {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"

                                                value={this.state.formData.password}
                                                onChange={(e) => {
                                                    let formDataOb =this.state.formData
                                                    this.state.formData.password = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />
                                        </FormControl>

                                    </Grid>

                                </Grid>
                                <Grid className={classes.btn_container}>
                                   <MyButton href={this.state.link} label={'LogIn'} type={'submit'} variant={'contained'}

                                   />

                                </Grid>
                            </Grid>


                        </Grid>
                    </ValidatorForm>
                    <GDSESnackBar
                        open={this.state.alert}
                        onClose={() => {
                            this.setState({ alert: false })
                        }}
                        message={this.state.message}
                        autoHideDuration={3000}
                        severity={this.state.severity}
                        variant="filled"
                    />
                </>



        )
    }
}

export default withStyles(styleSheet)(SignInPage)