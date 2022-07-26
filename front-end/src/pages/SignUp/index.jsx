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
import loginBg from "../../assets/contact.jpg";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SignUpService from '../../services/signUpService';


class SignUp extends Component {
    constructor(props) {
        super(props);
/*
        this.state = {
            ,
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }*/

    }


   /* submitUser = async () => {
        let formData = this.state.formData;

        console.log(formData)
        let res;
        if (formData.user.role=='DRIVER'){
            res= await SignUpService.postSignUpDriver(formData);
        }else {
            res=await SignUpService.postSignUpCustomer(formData);
        }



            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }

    };*/


    render() {
        const {classes} = this.props;
        return (

            <>
                <Grid className={classes.container} display={'flex'} alignItems={'center'} justifyContent={'center'}
                      style={{
                          backgroundImage: `url(${loginBg})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          opacity: '90%'
                      }}>



                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>

                        <Grid width="68vw" height={'80vh'} display={'flex'} justifyContent={'space-evenly'}
                              alignItems={'center'} flexDirection={'column'}
                              style={{backgroundColor: 'white', opacity: '93%'}}>
                            <SignUpForm/>

                            <Grid marginTop={'2vh'}>

                                <Button variant="contained" style={{color: "white", backgroundColor: 'black'}}>
                                    Register
                                </Button>

                            </Grid>

                        </Grid>

                    </ValidatorForm>
                </Grid>

            </>
        );
    }


}

export default withStyles(styleSheet)(SignUp)