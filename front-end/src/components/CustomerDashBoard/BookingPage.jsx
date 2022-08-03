import {Component} from "react";
import {Grid} from "@mui/joy";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Button} from "@mui/material";
import * as React from "react";
import BookingService from "../../services/bookingService";
import GDSESnackBar from "../common/snackBar";


class BookingPage extends Component{

    constructor(props) {
        super(props);

        this.state={

            booking:{
                bookingId:'B-001',
                bookingDate:'2022-08-03',
                pickupDate:'2022-08-04',
                pickupTime:"08:11:11",
                returnDate:'2022-08-05',
                returnTime:"08:11:11",
                needDriver:'NO',
                customer:{
                    id:"C-001",
                    userNIC:"200058602324",
                    name:{"firstName":"Lasan","lastName":"Kariyawasam"},
                    drivingLicenseNo:"123456778",
                    address:"Colombo",
                    contactNo:"07777777777",
                    email:"rashi@gmail.com",
                    user:{
                        userName:"Rashi",
                        password:"1234",
                        role:"REGISTERED_USER"}

                },
                driverScheduleList:[],
                bookedVehicleList:[
                    {
                        vehicleId: "V-001", bookingId: "B-001", vehicle: {
                            vehicleId: "V-001",
                            registrationNo: "123456",
                            color: "Black",
                            brand: "Suzuki Alto",
                            noOfPassengers: 5,
                            fuelType: "DIESEL",
                            vehicleType: "PREMIUM",
                            transmissionType: "AUTO",
                            pricePerExtraKM: "30.00",
                            priceRate: {"dailyRate": 2500.00, "monthlyRate": 64350.00},
                            freeMileage: {"dailyFreeMileage": 100, "monthlyFreeMileage": 2400},
                            vehicleAvailability: "AVAILABLE",
                            refundableDamageFee: 15000,
                            mileage: 10000,
                            lastServiceMileage: 8000
                        }, booking: {
                            bookingId: "B-001",
                            pickupDate: "2022-07-06",
                            pickupTime: "08:11:11",
                            returnDate: "2022-07-07",
                            returnTime: "08:11:11",
                            needDriver: "NO",
                            customer: {
                                id: "C-001",
                                userNIC: "200058602324",
                                name: {firstName: "Lasan", lastName: "Kariyawasam"},
                                drivingLicenseNo: "123456778",
                                address: "Colombo",
                                contactNo: "07777777777",
                                email: "rashi@gmail.com",
                                user: {
                                    userName: "Rashi",
                                    password: "1234",
                                    role: "REGISTERED_USER"
                                }

                            }
                        }
                    }
                ],
            }
        }
    }


    submitBooking = async () => {
        let booking = this.state.booking;



            let res = await BookingService.postBooking(booking);


            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                await this.loadData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }




        }

        render() {
        return(

            <>
            <Grid width={'81vw'} height={'84vh'}>

                <Box sx={{ display: 'flex', flexWrap: 'wrap' }} width={'100vw'} height={'100vh'} justifyContent={"center"} alignItems={'center'}>

                    <Grid width={'95vw'} height={'95vh'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'}
                    >
                        <Grid width={'50%'} height={'80%'} marginTop={'20vh'}>
                            <Grid >
                                <Typography variant={'h5'}>Customer Details</Typography>
                                <Grid>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Contact No"
                                        defaultValue=""
                                        sx={{ m: 1, width: '25ch' }}
                                    />


                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                        defaultValue=""
                                        sx={{ m: 1, width: '55ch' }}
                                    />


                                </Grid>
                            </Grid>

                            <Grid marginTop={'2vh'}>
                                <Typography variant={'h5'}>Vehicle Details</Typography>
                                <Grid>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Registration number"
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Brand "
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Type"
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />


                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Color"
                                        defaultValue=""
                                        sx={{ m: 1, width: '40ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="No Of Passengers"
                                        defaultValue=""
                                        sx={{ m: 1, width: '26ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Transmission Type"
                                        defaultValue=""
                                        sx={{ m: 1, width: '26ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Fuel Type"
                                        defaultValue=""
                                        sx={{ m: 1, width: '26ch' }}
                                    />





                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid width={'40%'} height={'80%'} marginTop={'20vh'}>
                            <Grid>
                                <Typography variant={'h5'}>Booking Details</Typography>
                                <Grid>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Pick-Up Date"
                                        defaultValue=""
                                        sx={{ m: 1, width: '30ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="PickUp Time "
                                        defaultValue=""
                                        sx={{ m: 1, width: '30ch' }}
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Drop-off Date"
                                        defaultValue=""
                                        sx={{ m: 1, width: '30ch' }}
                                    />


                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Drop-off Time"
                                        defaultValue=""
                                        sx={{ m: 1, width: '30ch' }}
                                    />


                                    <FormControl sx={{m:1}}>
                                        <FormLabel id="demo-radio-buttons-group-label">Need Driver</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="female"
                                            name="radio-buttons-group"
                                            color={'success'}
                                        >
                                            <FormControlLabel value="female" control={<Radio />} label="Yes" />
                                            <FormControlLabel value="male" control={<Radio />} label="No" />

                                        </RadioGroup>
                                    </FormControl>





                                </Grid>

                                <Grid  display={'flex'} justifyContent={'end'} margin={'10vh'} marginRight={'5vh'}>
                                    <Button variant="contained" color="info" style={{margin:"1vh"}}>
                                        Cancel
                                    </Button>
                                    <Button onClick={this.submitBooking} variant="contained" color="success" style={{margin:"1vh"}}>
                                        Place Booking
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>






                </Box>


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

        )
    }

}

export default BookingPage