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

            bookingId:'',
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


            driver:{},

            vehicleBooking: {
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
                freeMileage: {dailyFreeMileage: '', monthlyFreeMileage: ''},
                vehicleAvailability: "AVAILABLE",
                refundableDamageFee: '',
                mileage: '',
                lastServiceMileage: ''
            }


        }
    }


    generateBookingId = async () =>{
        let res = await BookingService.generateBookingId();
        if (res.status === 200) {
            this.setState({
                bookingId:res.data.data
            })
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
            let data = res1.data.data;
            this.setState({
                vehicleBooking: {
                    vehicleId: data.vehicleId,
                    registrationNo: data.registrationNo,
                    color: data.color,
                    brand: data.brand,
                    noOfPassengers: data.noOfPassengers,
                    fuelType: data.fuelType,
                    vehicleType: data.vehicleType,
                    transmissionType: data.transmissionType,
                    pricePerExtraKM: data.pricePerExtraKM,
                    priceRate: {dailyRate: data.priceRate.dailyRate, monthlyRate: data.priceRate.monthlyRate},
                    freeMileage: {dailyFreeMileage: data.freeMileage.dailyFreeMileage, monthlyFreeMileage: data.freeMileage.monthlyFreeMileage},
                        vehicleAvailability: "AVAILABLE",
                        refundableDamageFee: data.refundableDamageFee,
                        mileage: data.mileage,
                        lastServiceMileage: data.lastServiceMileage
                    }
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
                    bookingId:this.state.bookingId,
                    driver:this.state.driver,
                    booking: {
                        bookingId: this.state.bookingId,
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
                                bookingId: this.state.bookingId,
                                vehicle: this.state.vehicleBooking
                                ,
                                booking: {
                                    bookingId: this.state.bookingId,
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
                                            bookingId:this.state.bookingId,
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
            bookingId: this.state.bookingId,
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
                    bookingId:this.state.bookingId,
                    vehicle: this.state.vehicleBooking
                    ,
                    booking: {
                        bookingId: this.state.bookingId,
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
        this.generateBookingId();
        this.loadData();
    }

    render() {
        return (

            <>
                <Grid height={'84vh'} display={"flex"} alignItems={"center"}>

                    <Box sx={{display: 'flex', flexWrap: 'wrap'}}
                         justifyContent={"center"}
                         alignItems={'center'}>

                        <Grid width={'95%'} height={'95%'} display={'flex'} justifyContent={'space-evenly'}
                              alignItems={'center'}
                        >
                            <Grid width={'50%'} height={'80%'} >
                                <Grid>
                                    <Typography variant={'h5'} marginBottom={'2vh'}>Customer Details</Typography>
                                    <Grid>


                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="First Name"
                                            value={this.state.customerBooking.name.firstName}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Last Name"
                                            value={this.state.customerBooking.name.lastName}
                                            sx={{m: 1, width: '35ch'}}
                                        />


                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Contact No"
                                            value={this.state.customerBooking.contactNo}
                                            sx={{m: 1, width: '35ch'}}
                                        />


                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Address"
                                            value={this.state.customerBooking.address}
                                            sx={{m: 1, width: '35ch'}}
                                        />


                                    </Grid>
                                </Grid>

                                <Grid marginTop={'2vh'}>
                                    <Typography variant={'h5'} marginBottom={'2vh'}>Vehicle Details</Typography>
                                    <Grid>


                                        <TextField
                                            disabled
                                            required
                                            label="Registration number"
                                            value={this.state.vehicleBooking.registrationNo}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            label="Brand "
                                            value={this.state.vehicleBooking.brand}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Type"
                                            value={this.state.vehicleBooking.vehicleType}
                                            sx={{m: 1, width: '35ch'}}
                                        />


                                        <TextField
                                            disabled
                                            required

                                            label="Color"
                                            value={this.state.vehicleBooking.color}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required

                                            label="No Of Passengers"
                                            value={this.state.vehicleBooking.noOfPassengers}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required

                                            label="Transmission Type"
                                            value={this.state.vehicleBooking.transmissionType}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            label="Fuel Type"
                                            value={this.state.vehicleBooking.fuelType}
                                            sx={{m: 1, width: '35ch'}}
                                        />


                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid width={'50%'} height={'80%'} >
                                <Grid>
                                    <Typography variant={'h5'} marginBottom={'2vh'}>Booking Details</Typography>
                                    <Grid>

                                        {/*<TextField
                                            required
                                            id="outlined-required"
                                            label="Booking Id"
                                            value={''}
                                            sx={{m: 1, width: '35ch'}}
                                        />*/}
                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Pick-Up Date"
                                            value={format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd")}
                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="PickUp Time "
                                            value={format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss")}

                                            sx={{m: 1, width: '35ch'}}
                                        />

                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Drop-off Date"
                                            value={format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")}

                                            sx={{m: 1, width: '35ch'}}
                                        />


                                        <TextField
                                            disabled
                                            required
                                            id="outlined-required"
                                            label="Drop-off Time"
                                            value={format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss")}

                                            sx={{m: 1, width: '35ch'}}
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