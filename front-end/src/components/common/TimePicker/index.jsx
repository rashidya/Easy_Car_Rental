import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Grid} from "@material-ui/core";

export default function BasicTimePicker(props) {
    const [value, setValue] = React.useState(null);

    return (

        <Grid style={{width: '50%', backgroundColor: 'white', borderRadius: '5px',margin:'2px'}}>
            < LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                    label={props.label}
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>

    );
}