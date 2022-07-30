import {Route, Routes} from "react-router-dom";
import Profile from "./profile";
import Booking from "./booking";
import ManageBooking from "./manageBooking";
import * as React from "react";

export default function Nav(){
    return(
        <Routes>
            <Route exact path="/" element={<Profile/>}/>
            <Route  path="/booking" element={<Booking/>}/>
            <Route  path="/manageBooking" element={<ManageBooking/>}/>
            {/*   <Route exact path="/logout" element={<LogOut/>}/>*/}
        </Routes>
    )
}