import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Grid} from "@material-ui/core";
import {logDOM} from "@testing-library/react";



export default function BrowseDatePicker(props) {
    const [value, setValue] = React.useState(null);



    return (
        <Grid style={{width:'50%', backgroundColor:'white',borderRadius:'5px',margin:'2px'}}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    width={props.width}
                    label={props.label}
                    value={ (props.label ==="PickUp-Date")?localStorage.getItem("pickUpDate"):localStorage.getItem("returnDate")
                    }
                    onChange={
                        (newValue)=>{

                            (props.label ==="PickUp-Date")?localStorage.setItem("pickUpDate",newValue):localStorage.setItem("returnDate",newValue)

                            setValue(newValue)
                        }


                    }

                    dateFormat="YYYY-MM-dd"
                    renderInput={(params) => <TextField {...params} size={'small'} />}
                />
            </LocalizationProvider>
        </Grid>

    );
}

