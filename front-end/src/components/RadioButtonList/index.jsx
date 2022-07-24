import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';

import Typography from '@mui/joy/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function GroupCheckboxes() {
    const [noOfPassengers, setNoOfPassengers] = React.useState('');

    const handleChange = (event) => {
        setNoOfPassengers(event.target.value);
    };

    return (
        <Box>

            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} style={{fontWeight:'bold'}}>
                Vehicle Category
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">

                        <Checkbox label="Luxury" variant={'outlined'} style={{margin:'3px'}}/>


                        <Checkbox  label="Premium" variant={'outlined'} style={{margin:'3px'}} />

                        <Checkbox  label="Regular"  variant={'outlined'} style={{margin:'3px'}}/>

            </Box>


            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} style={{fontWeight:'bold',marginTop:'5%'}}>
                Transmisson Type
            </Typography>
            <Box role="group" aria-labelledby="sandwich-group">


                        <Checkbox label="Auto" variant={'outlined'} style={{margin:'3px'}} />

                        <Checkbox  label="Manual" variant={'outlined'}  style={{margin:'3px'}}/>



            </Box>

            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} style={{fontWeight:'bold',marginTop:'5%'}}>
                Fuel Type
            </Typography>
            <Box role="group" aria-labelledby={'sandwich-group'}>

                        <Checkbox label="Petrol" variant={'outlined'} style={{margin:'3px'}}  />

                        <Checkbox  label="Diesel" variant={'outlined'} style={{margin:'3px'}} />



            </Box>

            <Typography id="sandwich-group" level="body2" fontWeight="lg" mb={1} style={{fontWeight:'bold',marginTop:'5%'}}>
                Brand(Make)
            </Typography>
            <Box role="group" aria-labelledby={'sandwich-group'} marginBottom={'5%'}>

                <Checkbox label="Toyota Premio" variant={'outlined'} style={{margin:'3px'}}  />

                <Checkbox  label="Mercedes" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="BMW i8" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Toyota Axio" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Toyota Allion" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Perodua Bezza" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Toyota Corolla " variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Toyota Prius " variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Perodua Axia " variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Suzuki Celerio" variant={'outlined'} style={{margin:'3px'}} />
                <Checkbox  label="Suzuki Alto" variant={'outlined'} style={{margin:'3px'}} />



            </Box>

            <FormControl sx={{  minWidth: 140 }} size="small" >
                <InputLabel id="demo-select-small">Passengers</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={noOfPassengers}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>

                </Select>
            </FormControl>


        </Box>

    );
}
