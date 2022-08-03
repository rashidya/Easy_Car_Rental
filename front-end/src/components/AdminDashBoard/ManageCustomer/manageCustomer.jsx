import {Component} from "react";
import Grid from "@mui/material/Grid";
import {DataGrid} from '@mui/x-data-grid';
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {TableCell} from "@material-ui/core";
import TableBody from "@mui/material/TableBody";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import * as React from "react";

import CustomerService from "../../../services/CustomerService";

import Typography from "@mui/material/Typography";
import {ValidatorForm} from "react-material-ui-form-validator";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";

class ManageCustomer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customers: [],
            customer: {
                id: '',
                userNIC: '',
                name: {
                    firstName: '',
                    lastName: ''
                },
                drivingLicenseNo: '',
                address: '',
                contactNo: ''
            }
        }
    }


    loadCustomerData = (customer) => {

        this.setState({
            customer: {
                id: customer.id,
                userNIC: customer.userNIC,
                name: {
                    firstName: customer.name.firstName,
                    lastName: customer.name.lastName
                },
                drivingLicenseNo: customer.drivingLicenseNo,
                address: customer.address,
                contactNo: customer.contactNo
            }
        });
    };

    loadCustomers = async () => {
        let res = await CustomerService.fetchCustomers();

        if (res.status === 200) {
            this.setState({
                customers: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };


    componentDidMount() {
        this.loadCustomers();
    }


    render() {
        return (

            <Grid >

                <Grid display={"flex"} justifyContent={'center'} marginBottom={'3vh'}>
                    <Grid height={'100%'} width={'60%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>
                        <Grid display={'flex'} justifyContent={'center'} >
                            <div style={{width:'10vw',height:'10vw',backgroundColor:'#c4c4c4',borderRadius:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>

                            </div>

                        </Grid>

                        <Grid>
                            <Box sx={{display: 'flex', flexWrap: 'wrap'}} justifyContent={'center'}>
                                <ValidatorForm ref="form" className="pt-2" onSubmit={this.putCustomer}>

                                    <Grid display={'flex'} justifyContent={'center'}>

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Id"
                                            defaultValue=""
                                            sx={{m: 1, width: '30ch'}}

                                            value={this.state.customer.id}
                                            validators={['required']}
                                        />

                                    </Grid>


                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="First Name"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.name.firstName}

                                        validators={['required']}

                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Last Name"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.name.lastName}
                                        validators={['required']}

                                    />


                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.address}
                                        validators={['required']}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Contact No"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.contactNo}
                                        validators={['required']}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="NIC No"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.userNIC}
                                        validators={['required']}

                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Driving Lisence No"
                                        defaultValue=""
                                        sx={{m: 1, width: '37.5ch'}}
                                        value={this.state.customer.drivingLicenseNo}
                                        validators={['required']}
                                    />



                                    <Grid display={'flex'} justifyContent={'center'} marginTop={'2vh'}>
                                        <Button variant="contained" color="error" style={{margin: "1vh"}}>
                                            Deny
                                        </Button>
                                        <Button variant="contained" color="success" style={{margin: "1vh"}} type={'submit'}>
                                            Accept
                                        </Button>
                                    </Grid>

                                </ValidatorForm>

                            </Box>
                        </Grid>


                    </Grid>


                    <Grid width={'40%'}  display={'flex'} justifyContent={'space-evenly'} alignItems={"center"} flexDirection={'column'}>
                        <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center' ,backgroundColor:'',flexDirection:'column'}}>

                            <Typography>NIC Image</Typography>
                        </div>


                        <div style={{width:'80%',height:'40%',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'',flexDirection:'column'}}>

                            <Typography>Driving license Image</Typography>
                        </div>

                    </Grid>
                </Grid>


                <Grid>
                    <TableContainer component={Paper}
                                    style={{backgroundColor: '#eeeff1'}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Customer Id</TableCell>
                                    <TableCell align="left">First Name</TableCell>
                                    <TableCell align="left">Last Name</TableCell>
                                    <TableCell align="left">Address</TableCell>
                                    <TableCell align="left">Contact No</TableCell>
                                    <TableCell align="left">NIC</TableCell>
                                    <TableCell align="left">Driving Licence No</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.customers.map((row) => (
                                        <TableRow onClick={() => {
                                            this.loadCustomerData(row);
                                        }}>
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.name.firstName}</TableCell>
                                            <TableCell align="left">{row.name.lastName}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">{row.contactNo}</TableCell>
                                            <TableCell align="left">{row.userNIC}</TableCell>
                                            <TableCell align="left">{row.drivingLicenseNo}</TableCell>

                                            <TableCell align="left">
                                                <Tooltip title="Accept">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.loadCustomerData(row);
                                                        }}
                                                    >
                                                        <CheckIcon color="success"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Deny">
                                                    <IconButton
                                                        onClick={() => {
                                                            this.deleteVehicle(row.vehicleId)
                                                        }}
                                                    >
                                                        <ClearIcon color="error"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

        )
    }
}

export default ManageCustomer