import {Component} from "react";
import {Grid} from "@mui/joy";
import Typography from "@mui/joy/Typography";

class AdminDashBoard extends Component {

    render() {
        return (
            <Grid component={'main'}>
                <Grid display={"flex"} width={'81vw'} height={"84vh"} justifyContent={'space-evenly'} flexWrap={"wrap"}>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                            <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                                <Typography  style={{color:'white'}}>Registered users</Typography>
                            </Grid>
                            <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                                <Typography  style={{fontSize:'60px'}}>11</Typography>
                            </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Bookings for Today</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Available Cars</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Reserved Cars</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Active Bookings</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Available Drivers</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Occupied Drivers</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>
                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Need Maintaince</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                    <Grid width={'28%'} height={'28%'} display={"flex"} justifyContent={'center'} flexDirection={'column'}>

                        <Grid height={"30%"} style={{backgroundColor: 'cadetblue'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{color:'white'}}>Need to Repaired</Typography>
                        </Grid>
                        <Grid height={"70%"} style={{backgroundColor: 'silver'}} display={"flex"} alignItems={'center'} justifyContent={'center'}>
                            <Typography  style={{fontSize:'60px'}}>11</Typography>
                        </Grid>



                    </Grid>

                </Grid>
            </Grid>
        )
    }

}


export default AdminDashBoard