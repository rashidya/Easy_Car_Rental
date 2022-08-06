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
import MyButton from "../../components/common/Button";


import IconButton from "@mui/material/IconButton";
import UploadButton from "../../components/UploadButton";
import {Link} from "react-router-dom";
import VehicleService from "../../services/VehicleService";


class SignUp extends Component {
    constructor(props) {
        super(props);


        this.state = {
            nicImage: null,
            LicenseImage: null,
            nicView: null,
            LicenseView: null,

            formData: {
                id: '',
                userNIC: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                drivingLicenseNo: '',
                address: '',
                contactNo: '',
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

            link: '',
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'register',
            btnColor: 'primary',
            btnHref: ''
        }
    }


    submitUser = async () => {
        let formData = this.state.formData;

        console.log(formData)

        if (formData.user.role == 'DRIVER') {
            let res = await SignUpService.postSignUpDriver(formData);
            this.addRegisterUserImage(formData.id)
            if (res.status === 200) {

                this.setState({
                    link: '/driverDashBoard',
                });


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
                //this.clearFields();
                this.setState({
                    link: '/customerDashBoard',
                });


            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }


    };



    addRegisterUserImage=async (id) =>{

        var bodyFormData = new FormData();
        bodyFormData.append('param', this.state.nicImage);
        bodyFormData.append('param', this.state.LicenseImage);


        let res = await SignUpService.addRegisterUserImage(bodyFormData,id);
        if (res.data.code===200){alert(res.data.message)}else {
            alert(res.data.message);
        }
    }


    render() {
        const {classes} = this.props;
        return (


            <>


                <Grid className={classes.container} display={'flex'} alignItems={'center'} justifyContent={'center'}
                     >


                    <Grid width="68vw" height={'100vh'} display={'flex'} justifyContent={'space-evenly'}
                          alignItems={'center'}
                          style={{backgroundColor: 'white', opacity: '93%'}}>

                        <Grid display={"flex"} width={'75vw'} height={"80vh"} justifyContent={'space-evenly'}
                              flexDirection={'column'}  alignItems={'center'}>

                            <Grid><Typography marginBottom={'2vh'} style={{fontSize: '30px'}}>Create New Account</Typography></Grid>

                            <Grid display={"flex"} justifyContent={'center'} height={'75vh'}  alignItems={'center'}>

                                <Grid display={'flex'} height={'100%'}>
                                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>
                                        <div style={{display: 'flex', flexWrap: 'wrap',justifyContent:'center'}}>

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Id"
                                                defaultValue=""
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}

                                                value={this.state.formData.id}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    formDataOb.id = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />

                                            <Autocomplete

                                                onChange={(e, value, r) => {

                                                    let formData = this.state.formData

                                                    formData.user.role = value.type

                                                    this.setState({formData})

                                                }}
                                                getOptionLabel={
                                                    (option) => option.type
                                                }
                                                id="controllable-states-demo"
                                                options={this.state.role}
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
                                                renderInput={(params) => <TextField {...params} label="Role"/>}
                                            />


                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Email"
                                                defaultValue=""
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}


                                                value={this.state.formData.user.userName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.user.userName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />

                                            <FormControl sx={{m: 1, width: '40ch'}}
                                                         size={"small"} variant="outlined">
                                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                                <OutlinedInput
                                                    id="outlined-adornment-password"
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
                                                                {this.state.showPassword ? <VisibilityOff/> :
                                                                    <Visibility/>}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="Password"

                                                    value={this.state.formData.user.password}
                                                    onChange={(e) => {
                                                        let formDataOb = this.state.formData
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
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
                                                value={this.state.formData.name.firstName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    formDataOb.name.firstName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}

                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Last Name"
                                                defaultValue=""
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
                                                value={this.state.formData.name.lastName}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    formDataOb.name.lastName = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}

                                            />

                                            <TextField
                                                required
                                                id="outlined-required"
                                                label="Contact No"
                                                defaultValue=""
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
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
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
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
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
                                                value={this.state.formData.userNIC}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
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
                                                sx={{m: 1, width: '40ch'}}
                                                size={"small"}
                                                value={this.state.formData.drivingLicenseNo}
                                                onChange={(e) => {
                                                    let formDataOb = this.state.formData
                                                    this.state.formData.drivingLicenseNo = e.target.value
                                                    this.setState(formDataOb)
                                                }}
                                                validators={['required']}
                                            />


                                        </div>


                                        <Grid width={'100%'} height={'40%'} display={'flex'}
                                              justifyContent={"center"}
                                        >
                                            <Grid style={{
                                                width: '40ch',
                                                margin: '1vh',
                                                border: '1px solid silver',

                                                backgroundImage:"url(" +this.state.nicView+ ")",
                                                backgroundSize: 'cover'

                                            }}>
                                                <div style={{backgroundColor:'silver',display:'flex',justifyContent:'center'}}><input

                                                    style={{display: 'none'}}
                                                    accept="image/*"
                                                    //className={classes.input}
                                                    id="contained-button-file01"
                                                    multiple
                                                    type="file"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            nicImage: e.target.files[0],
                                                            nicView : URL.createObjectURL(e.target.files[0])
                                                        })
                                                    }}
                                                />
                                                    <label htmlFor="contained-button-file01">
                                                        <Button variant="text" color="primary" size="small" component="span">
                                                            <UploadButton/> NIC Image
                                                        </Button>
                                                    </label>

                                                </div>
                                            </Grid>


                                            <Grid style={{
                                                width: '40ch',
                                                margin: '1vh',
                                                border: '1px solid silver',

                                                flexDirection: 'column',
                                                backgroundImage:"url(" +this.state.LicenseView + ")",
                                                backgroundSize: 'cover'

                                            }}>
                                                <div style={{backgroundColor:'silver',display:'flex',justifyContent:'center'}} ><input

                                                    style={{display: 'none'}}
                                                    accept="image/*"
                                                    //className={classes.input}
                                                    id="contained-button-file02"
                                                    multiple
                                                    type="file"
                                                    onChange={(e) => {
                                                        this.setState({
                                                            LicenseImage: e.target.files[0],
                                                            LicenseView : URL.createObjectURL(e.target.files[0])
                                                        })
                                                    }}
                                                />
                                                    <label htmlFor="contained-button-file02">
                                                        <Button variant="text" color="primary" size="small" component="span">
                                                            <UploadButton/> Upload License Image
                                                        </Button>
                                                    </label>

                                                </div>
                                            </Grid>


                                        </Grid>


                                        <Grid width={'100%'}  marginTop={'2vh'} display={"flex"} justifyContent={"center"}>

                                            <Grid width={'80%'}   display={"flex"} alignItems={"center"} flexDirection={'column'}>

                                                <MyButton href={this.state.link} color={'success'} label={"Register"}
                                                          variant={'contained'} type={"submit"} style={{width:'85%'}} />

                                                <Typography style={{fontSize:'15px',marginTop:'1vh'}}>Already Registered? <Link to={"/signInPage"}> Log In Now</Link></Typography>

                                            </Grid>


                                        </Grid>

                                    </ValidatorForm>
                                </Grid>


                            </Grid>


                        </Grid>


                    </Grid>


                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
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