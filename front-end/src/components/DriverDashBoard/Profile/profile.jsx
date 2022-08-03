import {Component} from "react";
import {Grid} from "@mui/joy";
import FormDetails from '../../UserDetailsForm'
import {Upload} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import {ValidatorForm} from "react-material-ui-form-validator";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import GDSESnackBar from "../../common/snackBar";
import CustomerService from "../../../services/CustomerService";
import DriverServices from "../../../services/DriverServices";
import IconButton from "@mui/material/IconButton";
import UploadButton from "../../UploadButton";

class DriverProfile extends Component{

    constructor(props) {
        super(props);


        this.state = {

            showPassword: false,
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
                driverAvailability:'',
                user: {
                    userId:'',
                    userName: '',
                    password: '',
                    role: 'DRIVER'
                }

            },

            data: {},
            alert: false,
            message: '',
            severity: '',


        }

    }


    putDriver = async () => {


        let formData = this.state.formData;
        let res = await DriverServices.putDriver(formData);
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }


    };

    loadData = async () => {
        let params = {
            userName: this.props.loginUser
        }
        let res = await DriverServices.fetchDriver(params);
        let resData = res.data.data;

        if (res.status === 200) {

            this.setState({
                formData: {
                    id: resData.id,
                    userNIC: resData.userNIC,
                    name: {
                        firstName: resData.name.firstName,
                        lastName: resData.name.lastName
                    },
                    drivingLicenseNo: resData.drivingLicenseNo,
                    address: resData.address,
                    contactNo: resData.contactNo,
                    driverAvailability:resData.driverAvailability,
                    user: {
                        userId: resData.user.userId,
                        userName: resData.user.userName,
                        password: resData.user.password,
                        role: resData.user.role
                    }

                }
            });
            console.log(this.state.formData.user.password)
        }
        // print customers array

    };


    componentDidMount() {
        this.loadData();
    }

    render() {
        return(

            <>
            <Grid display={"flex"} width={'81vw'} height={"84vh"} justifyContent={'center'} >
                <Grid height={'100%'} width={'60%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                    <Grid display={'flex'} justifyContent={'center'} >
                        <div style={{width:'10vw',height:'10vw',backgroundColor:'#c4c4c4',borderRadius:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <UploadButton/>
                        </div>

                    </Grid>

                    <Grid>

                            <Box sx={{display: 'flex', flexWrap: 'wrap'}} justifyContent={'center'}>
                                <ValidatorForm ref="form" className="pt-2" onSubmit={this.putDriver}>


                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Id"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}

                                            value={this.state.formData.id}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.id = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />



                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Email"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}


                                            value={this.state.formData.user.userName}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.user.userName = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />

                                        <FormControl sx={{m: 1, width: '37.5ch'}} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput id="outlined-adornment-password"
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

                                                           value={this.state.formData.user.password}
                                                           onChange={(e) => {

                                                               let formDataOb = this.state.formData

                                                               formDataOb.user.password = e.target.value

                                                               this.setState(formDataOb)
                                                           }}
                                                           validators={['required']}
                                            />
                                        </FormControl>

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="First Name"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
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
                                            sx={{m: 1, width: '37.5ch'}}
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
                                            label="Address"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
                                            value={this.state.formData.address}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.address = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact No"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
                                            value={this.state.formData.contactNo}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.contactNo = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="NIC No"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
                                            value={this.state.formData.userNIC}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.userNIC = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}

                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Driving Lisence No"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
                                            value={this.state.formData.drivingLicenseNo}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.drivingLicenseNo = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Availability"
                                            defaultValue=""
                                            sx={{m: 1, width: '37.5ch'}}
                                            value={this.state.formData.driverAvailability}
                                            onChange={(e) => {
                                                let formDataOb = this.state.formData
                                                formDataOb.driverAvailability = e.target.value
                                                this.setState(formDataOb)
                                            }}
                                            validators={['required']}
                                        />



                                    <Grid display={'flex'} justifyContent={'center'} marginTop={'2vh'}>
                                        <Button variant="contained" color="info" style={{margin: "1vh"}}>
                                            Cancel
                                        </Button>
                                        <Button variant="contained" color="success" style={{margin: "1vh"}} type={'submit'}>
                                            Update
                                        </Button>
                                    </Grid>

                                </ValidatorForm>

                            </Box>

                    </Grid>


                </Grid>


                <Grid width={'40%'}  display={'flex'} justifyContent={'space-evenly'} alignItems={"center"} flexDirection={'column'}>
                    <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor:'',flexDirection:'column'}}>
                        <UploadButton/>
                        <Typography>NIC Image</Typography>
                    </div>


                    <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'',flexDirection:'column'}}>
                        <UploadButton/>
                        <Typography>Driving license Image</Typography>
                    </div>

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
        )
    }

}

export default DriverProfile