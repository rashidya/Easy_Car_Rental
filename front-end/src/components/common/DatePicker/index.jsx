import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@material-ui/core";



export default function BasicDatePicker(props) {
    const [value, setValue] = React.useState(null);



    return (
        <Grid style={{width:'50%', backgroundColor:'white',borderRadius:'5px',margin:'2px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label={props.label}
                    value={props.value}
                    onChange={props.onChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </Grid>

    );
}

