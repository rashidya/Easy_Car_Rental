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

export default function InputAdornments(prop) {



    const [formData, setFormData] = React.useState({
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


    const submitUser = async () => {
        let formDataOb = formData;

        console.log(formData)
        let res;
        if (formDataOb.user.role==='DRIVER'){
            res= await SignUpService.postSignUpDriver(formDataOb);
        }else {
            res=await SignUpService.postSignUpCustomer(formDataOb);
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
    };

    return (
        <>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                <ValidatorForm ref="form" className="pt-2" onSubmit={submitUser()}>
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

                            value={this.state.formData.user.userName}
                            onChange={(e) => {
                                let formData = prop.state.formData
                                formData.user.userName = e.target.value
                                this.setState({formData})
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

                                value={prop.state.formData.user.password}
                                onChange={(e) => {
                                    handleChange('password')
                                    let formData = prop.state.formData
                                    formData.user.password = e.target.value
                                    this.setState({formData})
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
                            value={this.state.formData.name}
                            onChange={(e) => {
                                let formData = this.state.formData
                                formData.name = e.target.name
                                this.setState({formData})
                            }}
                            validators={['required']}

                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Contact No"
                            defaultValue=""
                            sx={{m: 1, width: '25ch'}}
                            value={this.state.formData.contactNo}
                            onChange={(e) => {

                                let formData = this.state.formData
                                formData.contactNo = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />


                        <TextField
                            required
                            id="outlined-required"
                            label="Address"
                            defaultValue=""
                            sx={{m: 1, width: '67ch'}}
                            value={this.state.formData.password}
                            onChange={(e) => {
                                handleChange('address')
                                let formData = this.state.formData
                                formData.address = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="NIC No"
                            defaultValue=""
                            sx={{m: 1, width: '40ch'}}
                            value={this.state.formData.password}
                            onChange={(e) => {
                                handleChange('userNIC')
                                let formData = this.state.formData
                                formData.userNIC = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}

                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Driving Lisence No"
                            defaultValue=""
                            sx={{m: 1, width: '25ch'}}
                            value={this.state.formData.drivingLicenseNo}
                            onChange={(e) => {
                                handleChange('userNIC')
                                let formData = this.state.formData
                                formData.drivingLicenseNo = e.target.value
                                this.setState({formData})
                            }}
                            validators={['required']}
                        />


                    </div>

                </ValidatorForm>

            </Box>
        </>
    );
}
