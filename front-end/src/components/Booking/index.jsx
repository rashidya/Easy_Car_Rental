import * as React from 'react';
import Box from '@mui/material/Box';


import TextField from '@mui/material/TextField';

import Typography from "@mui/material/Typography";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import Divider from "@mui/material/Divider";

export default function InputAdornments() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
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
                            <Button variant="contained" color="success" style={{margin:"1vh"}}>
                                Place Booking
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>






        </Box>
    );
}
