import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    defaultValue=""
                    sx={{ m: 1, width: '40ch' }}
                />

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>

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
                    sx={{ m: 1, width: '67ch' }}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="NIC No"
                    defaultValue=""
                    sx={{ m: 1, width: '40ch' }}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Driving Lisence No"
                    defaultValue=""
                    sx={{ m: 1, width: '25ch' }}
                />


            </div>



        </Box>
    );
}
