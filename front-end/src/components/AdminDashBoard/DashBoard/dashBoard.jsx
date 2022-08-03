import {Component} from "react";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import AdminDashBoardService from "../../../services/AdminDashBoardService";

class DashBoard extends Component {


    constructor(props) {
        super(props);

        this.state={

            dashBoardSummery:{
                noOfRegisteredUsers:'',
                noOfBookingsForToday:'',
                noOfAvailableCars:'',
                noOfReservedCars:'',
                noOfActiveBookings:'',
                noOfAvailableDrivers:'',
                noOfOccupiedDrivers:'',
                noOfCarsNeedMaintenance:'',
                noOfCarsNeedToBeRepaired:''
            },


        }
    }


    loadData = async () => {
        let res = await AdminDashBoardService.fetchData();

        if (res.status === 200) {
            const summery=res.data.data;
            this.setState({

                dashBoardSummery:{
                    noOfRegisteredUsers:summery.noOfRegisteredUsers,
                    noOfBookingsForToday:summery.noOfBookingsForToday,
                    noOfAvailableCars:summery.noOfAvailableCars,
                    noOfReservedCars:summery.noOfReservedCars,
                    noOfActiveBookings:summery.noOfActiveBookings,
                    noOfAvailableDrivers:summery.noOfAvailableDrivers,
                    noOfOccupiedDrivers:summery.noOfOccupiedDrivers,
                    noOfCarsNeedMaintenance:summery.noOfCarsNeedMaintenance,
                    noOfCarsNeedToBeRepaired:summery.noOfCarsNeedToBeRepaired
                },
            });
        }
        console.log(this.state.data)    // print customers array

    };


    componentDidMount() {
        this.loadData();
    }



    render() {
        return (
            <Grid component={'main'}>
                <Grid display={"flex"} height={"84vh"} justifyContent={'space-evenly'} flexWrap={"wrap"}>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                            <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                                <Typography  style={{color:'white'}}>Registered Users</Typography>
                            </Grid>
                            <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                                <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfRegisteredUsers}</Typography>
                            </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Bookings for Today</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfBookingsForToday}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Available Cars</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfAvailableCars}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Reserved Cars</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfReservedCars}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Active Bookings</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfActiveBookings}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Available Drivers</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfAvailableDrivers}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Occupied Drivers</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfOccupiedDrivers}</Typography>
                        </Grid>



                    </Grid>
                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Cars Need Maintenance</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfCarsNeedMaintenance}</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Cars Need to Repaired</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>{this.state.dashBoardSummery.noOfCarsNeedToBeRepaired}</Typography>
                        </Grid>



                    </Grid>

                </Grid>
            </Grid>
        )
    }

}


export default DashBoard