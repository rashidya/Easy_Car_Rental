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
    Typography, Avatar, Autocomplete
} from "@mui/material";
import * as React from "react";
import IconButton from '../../components/UploadButton';

import loginBg from "../../assets/contact.jpg";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SignUpService from '../../services/signUpService';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormDetails from "../../components/UserDetailsForm";
import GDSESnackBar from "../../components/common/snackBar";


class SignUp extends Component {
    constructor(props) {
        super(props);



        this.state = {


            formData: {
                id: '',
                userNIC: '',
                name: {
                    firstName:'',
                    lastName:''
                },
                drivingLicenseNo: '',
                address: '',
                contactNo: '',
                driverAvailability: 'AVAILABLE',
                user: {
                    userName: '',
                    password: '',
                    role: ''
                }

            },

            role: [
                {
                    type: 'DRIVER'
                },
                {
                    type: 'REGISTERED_USER'
                }
            ]
            ,
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'register',
            btnColor: 'primary'

        }
    }


    submitUser = async () => {
        let formData = this.state.formData;

        console.log(formData)

        if (formData.user.role == 'DRIVER') {
           let res = await SignUpService.postSignUpDriver(formData);
            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                //this.clearFields();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await SignUpService.postSignUpCustomer(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                //this.clearFields();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }




    };

    /*handleClickShowPassword(event){
        this.setState({value: event.target.value})
    }

    handleMouseDownPassword(){
        this.setState({
            ...value,
            showPassword: !value.showPassword,
        });
    }
*/

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


                    <Grid width="68vw" height={'80vh'} display={'flex'} justifyContent={'space-evenly'}
                          alignItems={'center'} flexDirection={'column'}
                          style={{backgroundColor: 'white', opacity: '93%'}}>

                        <Grid display={"flex"} width={'75vw'} height={"60vh"} justifyContent={'center'}>
                            <Grid width={'50%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                                <Grid display={'flex'} justifyContent={'center'} marginTop={"10px"}>
                                    <div style={{
                                        width: '10vw',
                                        height: '10vw',
                                        backgroundColor: '#c4c4c4',
                                        borderRadius: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <IconButton/>
                                    </div>

                                </Grid>

                                <Grid>
                                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>
                                        <div>

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Id"
                                                defaultValue=""
                                                sx={{m: 1, width: '30ch'}}

                                                value={this.state.formData.id}
                                                onChange={(e) => {
                                                    let formDataOb =this.state.formData
                                                    formDataOb.id = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />

                                            <Autocomplete

                                                onChange={(e, value, r) => {

                                                    let formData = this.state.formData

                                                    formData.user.role = value.type

                                                    this.setState({ formData })

                                                }}
                                                getOptionLabel={
                                                    (option) => option.type
                                                }
                                                id="controllable-states-demo"
                                                options={this.state.role}
                                                sx={{ width: '28ch' }}
                                                renderInput={(params) => <TextField {...params} label="Role" />}
                                            />




                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Email"
                                                defaultValue=""
                                                sx={{m: 1, width: '28ch'}}


                                                value={this.state.formData.user.userName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.user.userName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />

                                            <FormControl sx={{m: 1, width: '30ch'}} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
                                                    //type={values.showPassword ? 'text' : 'password'}
                                                    /* endAdornment={
                                                         <InputAdornment position="end">
                                                             <IconButton
                                                                 aria-label="toggle password visibility"
                                                                // onClick={this.handleClickShowPassword}
                                                                 //onMouseDown={handleMouseDownPassword}
                                                                 edge="end"
                                                             >
                                                                //values.showPassword ? <VisibilityOff/> : <Visibility/>
                                                             </IconButton>
                                                         </InputAdornment>
                                                     }*/
                                                    label="Password"

                                                    value={this.state.formData.user.password}
                                                    onChange={(e) => {
                                                        let formDataOb =this.state.formData
                                                        this.state.formData.user.password = e.target.value
                                                        this.setState(formDataOb)
                                                    }}
                                                    validators={['required']}
                                                />
                                            </FormControl>

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Name"
                                                defaultValue=""
                                                sx={{m: 1, width: '28ch'}}
                                                value={this.state.formData.name.firstName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.name.firstName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}

                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Name"
                                                defaultValue=""
                                                sx={{m: 1, width: '28ch'}}
                                                value={this.state.formData.name.lastName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.name.lastName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}

                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Contact No"
                                                defaultValue=""
                                                sx={{m: 1, width: '30ch'}}
                                                value={this.state.formData.contactNo}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.contactNo = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />


                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Address"
                                                defaultValue=""
                                                sx={{m: 1, width: '28ch'}}
                                                value={this.state.formData.address}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.address = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="NIC No"
                                                defaultValue=""
                                                sx={{m: 1, width: '30ch'}}
                                                value={this.state.formData.userNIC}
                                                onChange={(e) => {
                                                    let formDataOb =this.state.formData
                                                    this.state.formData.userNIC = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}

                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Driving Lisence No"
                                                defaultValue=""
                                                sx={{m: 1, width: '28ch'}}
                                                value={this.state.formData.drivingLicenseNo}
                                                onChange={(e) => {
                                                    let formDataOb =this.state.formData
                                                    this.state.formData.drivingLicenseNo = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />


                                        </div>

                                        <Grid marginTop={'2vh'}>

                                            <Button variant="contained"
                                                    style={{color: "white", backgroundColor: 'black'}} type={'submit'}>
                                                Register
                                            </Button>

                                        </Grid>

                                    </ValidatorForm>
                                </Grid>


                            </Grid>


                            <Grid width={'35%'} display={'flex'} justifyContent={'space-evenly'} alignItems={"center"}
                                  flexDirection={'column'}>
                                <div style={{
                                    width: '80%',
                                    height: '40%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '',
                                    flexDirection: 'column'
                                }}>
                                    <IconButton/>
                                    <Typography>NIC Image</Typography>
                                </div>


                                <div style={{
                                    width: '80%',
                                    height: '40%',
                                    border: '1px solid black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '',
                                    flexDirection: 'column'
                                }}>
                                    <IconButton/>
                                    <Typography>Driving license Image</Typography>
                                </div>


                            </Grid>
                        </Grid>


                    </Grid>


                </Grid>

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


        );
    }


}

export default withStyles(styleSheet)(SignUp)