import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SignUpService from "../../services/signUpService";
import {Button, Grid} from "@mui/material";

export default function InputAdornments(prop) {



  /*  const [formData, setFormData] = React.useState({
        formData: {
            id: '',
            userNIC: '',
            name: '',
            drivingLicenseNo: '',
            address: '',
            contactNo: '',
            driverAvailability: '',
            user: {
                userName:'',
                password: '',
                role:''
            },

            alert: false,
            message: '',
            severity: '',
            data: [],
            btnLabel: 'save',
            btnColor: 'primary'


        }
    });
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,


    });

    const [alert, setAlert] = React.useState({
        alert: false,
        message: '',
        severity: '',
        data: [],
        btnLabel: 'save',
        btnColor: 'primary'
    });


     submitUser = async () => {
        let formDataOb = formData;

        console.log(formData)
        let res;
        if (formDataOb.user.role !== undefined) {
            if (formDataOb.user.role === 'DRIVER') {
                res = await SignUpService.postSignUpDriver(formDataOb);
            } else {
                res = await SignUpService.postSignUpCustomer(formDataOb);
            }

        }



        if (res.status === 201) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            clearFields();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }

    };

    const clearFields=()=>{
        this.setState({
            formData: {
                id: '',
                userNIC: '',
                name: '',
                drivingLicenseNo: '',
                address: '',
                contactNo: '',
                driverAvailability: '',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                },


            }
        })
    }


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };*/

    return (
        <>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
              {/*  <ValidatorForm ref="form" className="pt-2" onSubmit={submitUser()}>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Id"
                            defaultValue=""
                            sx={{m: 1, width: '40ch'}}

                            value={formData.id}
                            onChange={(e) => {
                                let formDataOb = formData
                                formDataOb.id = e.target.value
                                setFormData(formDataOb)
                            }}
                            validators={['required']}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            defaultValue=""
                            sx={{m: 1, width: '40ch'}}


                            onChange={(e) => {
                                let formDataOb = formData
                                formDataOb.user.userName = e.target.value
                                setFormData(formDataOb)
                            }}
                            validators={['required']}
                        />

                        <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"

                                //value={formData.user.password}
                                onChange={(e) => {
                                    handleChange('password')
                                    let formDataOb = formData
                                    formDataOb.user.password = e.target.value
                                    setFormData(formDataOb)
                                }}
                                validators={['required']}
                            />
                        </FormControl>

                        <TextField
                            required
                            id="outlined-required"
                            label="Name"
                            defaultValue=""
                            sx={{m: 1, width: '40ch'}}
                            value={formData.name}
                            onChange={(e) => {
                                let formDataOb = formData
                                formDataOb.name = e.target.value
                                setFormData(formDataOb)
                            }}
                            validators={['required']}

                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Contact No"
                            defaultValue=""
                            sx={{m: 1, width: '25ch'}}
                            value={formData.contactNo}
                            onChange={(e) => {

                                let formDataOb = formData
                                formDataOb.contactNo = e.target.value
                                setFormData(formDataOb)
                            }}
                            validators={['required']}
                        />


                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            defaultValue=""
                            sx={{m: 1, width: '67ch'}}
                            value={formData.address}
                            onChange={(e) => {

                                let formDataOb = formData
                                formDataOb.address = e.target.value
                                setFormData(formDataOb)
                            }}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="NIC No"
                            defaultValue=""
                            sx={{m: 1, width: '40ch'}}
                            value={formData.userNIC}
                            onChange={(e) => {

                                let formData = formData
                                formData.userNIC = e.target.value
                                setFormData(formData)
                            }}
                            validators={['required']}

                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Driving Lisence No"
                            defaultValue=""
                            sx={{m: 1, width: '25ch'}}
                            value={formData.drivingLicenseNo}
                            onChange={(e) => {

                                let formData = formData
                                formData.drivingLicenseNo = e.target.value
                                setFormData(formData)
                            }}
                            validators={['required']}
                        />


                    </div>

                    <Grid marginTop={'2vh'}>

                        <Button variant="contained" style={{color: "white", backgroundColor: 'black'}} type={'submit'}>
                            Register
                        </Button>

                    </Grid>

                </ValidatorForm>
*/}
            </Box>
        </>
    );
}
