import BookingTable from '../../components/BookingTable'
import DatePicker from '../../components/DatePicker'
import TimePicker from '../../components/TimePicker'
import {Grid} from "@material-ui/core";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import * as React from "react";

export default function ManageBooking() {
    return(
        <Grid>


            <Grid>
                <BookingTable/>
            </Grid>
        </Grid>
    )
}