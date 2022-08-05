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
import BookingService from "../../../services/bookingService";
import GDSESnackBar from "../../common/snackBar";
import CustomerService from "../../../services/CustomerService";
import {format} from "date-fns";
import VehicleService from "../../../services/VehicleService";
import DriverServices from "../../../services/DriverServices";


class RentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {


            needDriver: 'NO',
            customerBooking: {
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
                    userId: '',
                    userName: '',
                    password: '',
                    role: ''
                }

            },

            vehicleBooking: {},
            driver:{}

            /*vehicleBooking: {
                vehicleId: "",
                registrationNo: "",
                color: "",
                brand: "",
                noOfPassengers: '',
                fuelType: "",
                vehicleType: "",
                transmissionType: "",
                pricePerExtraKM: "",
                priceRate: {dailyRate: '', monthlyRate: ''},
                freeMileage: {dailyFreeMileage: 100, monthlyFreeMileage": 2400},
                vehicleAvailability: "AVAILABLE",
                refundableDamageFee: 15000,
                mileage: 10000,
                lastServiceMileage: 8000
            }*/


        }
    }


    loadData = async () => {

        //Load Customer Data
        let params = {
            userName: localStorage.getItem("userName")
        }

        let res = await CustomerService.fetchCustomer(params);

        let resData = res.data.data;

        if (res.status === 200) {


            this.setState({
                customerBooking: {
                    id: resData.id,
                    userNIC: resData.userNIC,
                    name: {
                        firstName: resData.name.firstName,
                        lastName: resData.name.lastName
                    },
                    drivingLicenseNo: resData.drivingLicenseNo,
                    address: resData.address,
                    contactNo: resData.contactNo,
                    user: {
                        userId: resData.user.userId,
                        userName: resData.user.userName,
                        password: resData.user.password,
                        role: resData.user.role
                    }

                }
            });

        }


        //Load Vehicle Dta

        let paramsVehicle = {
            id: localStorage.getItem("vehicleId")
        }

        let res1 = await VehicleService.fetchVehicleData(paramsVehicle);

        if (res1.status === 200) {
            this.setState({
                vehicleBooking: res1.data.data
            });
            console.log(res1.data.data)
        }
    };


    setDriver = async () => {

        let params={
            pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            returnDate:format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")
        }

        let res = await DriverServices.fetchAvailableDriver(params);

        if (res.status === 200) {


            this.setState({
                driver:res.data.data
            });

        }

    };

    submitBooking = async () => {

        let driverSchedule=[];

        if (this.state.needDriver == "YES"){

            driverSchedule=[
                {
                    driverId:this.state.driver.id,
                    bookingId:"B-001",
                    driver:this.state.driver,
                    booking: {
                        bookingId: 'B-001',
                        bookingDate: format(new Date(), 'yyyy-MM-dd'),
                        pickupDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickupTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        needDriver: this.state.needDriver,
                        customer: this.state.customerBooking,
                        bookedVehicleList:[
                            {
                                vehicleId: this.state.vehicleBooking.vehicleId,
                                bookingId: "B-001",
                                vehicle: this.state.vehicleBooking
                                ,
                                booking: {
                                    bookingId: 'B-001',
                                    bookingDate: format(new Date(), 'yyyy-MM-dd'),
                                    pickupDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                                    pickupTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                                    returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                                    returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                                    needDriver: this.state.needDriver,
                                    status:'UNDER_REVIEW',
                                    customer: this.state.customerBooking,
                                    driverScheduleList: [
                                        {  driverId:this.state.driver.driverId,
                                            bookingId:"B-001",
                                            driver:this.state.driver}
                                    ],

                                }
                            }
                        ],
                    }
                }
            ]
        }


        let booking = {
            bookingId: 'B-001',
            bookingDate: format(new Date(), 'yyyy-MM-dd'),
            pickupDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            pickupTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
            returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
            returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
            needDriver: this.state.needDriver,
            status:'UNDER_REVIEW',
            customer: this.state.customerBooking,
            driverScheduleList: driverSchedule,
            bookedVehicleList: [
                {
                    vehicleId: this.state.vehicleBooking.vehicleId,
                    bookingId: "B-001",
                    vehicle: this.state.vehicleBooking
                    ,
                    booking: {
                        bookingId: 'B-001',
                        bookingDate: format(new Date(), 'yyyy-MM-dd'),
                        pickupDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickupTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        needDriver: this.state.needDriver,
                        status:'UNDER_REVIEW',
                        customer: this.state.customerBooking,
                        driverScheduleList: [],

                    }
                }
            ],
        }


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

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (

            <>
                <Grid width={'81vw'} height={'84vh'}>

                    <Box sx={{display: 'flex', flexWrap: 'wrap'}} width={'100vw'} height={'100vh'}
                         justifyContent={"center"}
                         alignItems={'center'}>

                        <Grid width={'95vw'} height={'95vh'} display={'flex'} justifyContent={'space-evenly'}
                              alignItems={'center'}
                        >
                            <Grid width={'50%'} height={'80%'} marginTop={'20vh'}>
                                <Grid>
                                    <Typography variant={'h5'}>Customer Details</Typography>
                                    <Grid>


                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="First Name"
                                            value={this.state.customerBooking.name.firstName}
                                            sx={{m: 1, width: '40ch'}}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Last Name"
                                            value={this.state.customerBooking.name.lastName}
                                            sx={{m: 1, width: '40ch'}}
                                        />


                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Contact No"
                                            value={this.state.customerBooking.contactNo}
                                            sx={{m: 1, width: '25ch'}}
                                        />


                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Address"
                                            value={this.state.customerBooking.address}
                                            sx={{m: 1, width: '55ch'}}
                                        />


                                    </Grid>
                                </Grid>

                                <Grid marginTop={'2vh'}>
                                    <Typography variant={'h5'}>Vehicle Details</Typography>
                                    <Grid>


                                        <TextField
                                            required
                                            label="Registration number"
                                            value={this.state.vehicleBooking.registrationNo}
                                            sx={{m: 1, width: '40ch'}}
                                        />

                                        <TextField
                                            required
                                            label="Brand "
                                            value={this.state.vehicleBooking.brand}
                                            sx={{m: 1, width: '40ch'}}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Type"
                                            value={this.state.vehicleBooking.vehicleType}
                                            sx={{m: 1, width: '40ch'}}
                                        />


                                        <TextField
                                            required

                                            label="Color"
                                            value={this.state.vehicleBooking.color}
                                            sx={{m: 1, width: '40ch'}}
                                        />

                                        <TextField
                                            required

                                            label="No Of Passengers"
                                            value={this.state.vehicleBooking.noOfPassengers}
                                            sx={{m: 1, width: '26ch'}}
                                        />

                                        <TextField
                                            required

                                            label="Transmission Type"
                                            value={this.state.vehicleBooking.transmissionType}
                                            sx={{m: 1, width: '26ch'}}
                                        />

                                        <TextField
                                            required

                                            label="Fuel Type"
                                            value={this.state.vehicleBooking.fuelType}
                                            sx={{m: 1, width: '26ch'}}
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
                                            label="Booking Id"
                                            value={''}
                                            sx={{m: 1, width: '30ch'}}
                                        />
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Pick-Up Date"
                                            value={format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd")}
                                            sx={{m: 1, width: '30ch'}}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="PickUp Time "
                                            value={format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss")}

                                            sx={{m: 1, width: '30ch'}}
                                        />

                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Drop-off Date"
                                            value={format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")}

                                            sx={{m: 1, width: '30ch'}}
                                        />


                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Drop-off Time"
                                            value={format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss")}

                                            sx={{m: 1, width: '30ch'}}
                                        />


                                        <FormControl sx={{m: 1}}>
                                            <FormLabel id="demo-radio-buttons-group-label">Need Driver</FormLabel>
                                            <RadioGroup
                                                aria-labelledby="demo-radio-buttons-group-label"
                                                defaultValue="No"
                                                name="radio-buttons-group"
                                                color={'success'}
                                            >
                                                <FormControlLabel value="Yes" control={<Radio onClick={(e) => {
                                                    this.setState({needDriver: 'YES'})
                                                    this.setDriver()

                                                }}/>} label="Yes"/>
                                                <FormControlLabel value="No" control={<Radio onClick={(e) => {
                                                    this.setState({needDriver: 'NO'})
                                                }}/>} label="No"/>

                                            </RadioGroup>
                                        </FormControl>


                                    </Grid>

                                    <Grid display={'flex'} justifyContent={'end'} margin={'10vh'} marginRight={'5vh'}>
                                        <Button variant="contained" color="info" style={{margin: "1vh"}}>
                                            Cancel
                                        </Button>
                                        <Button onClick={this.submitBooking} variant="contained" color="success"
                                                style={{margin: "1vh"}}>
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

export default RentPage