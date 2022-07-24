
import '../App.css';
import Home from "../pages/Home/index";


import React from "react";
import "../pages/Customer/style.css";
import "../pages/SignUp/index";


import {Route, Routes} from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {withStyles} from "@mui/styles";

import SignIn from "../pages/SignUp";
import Browse from "../pages/Browse";
import BasicDatePicker from "../components/DatePicker";
import VehicleDetailBooking from "../pages/VehicleDetailBooking";
import CustomerDashBoard from "../pages/Customer";
import AdminDashBoard from "../pages/Admin";
import ManageCustomer from "../components/AdminDashBoard/manageCustomer";
import DriverDashBoard from "../pages/Driver";
import SignUp from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import Booking from "../pages/Reservation";






export default function App() {


  return (
     /* <div style={{display:'flex'}}>
        <Drawer />
        <Routes>
        {/!*  <Route exact from="/" render={props => <Home {...props} />} />
          <Route exact path="/contact" render={props => <Contact {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />*!/}

            <Route  path='/' element={<Home/>}/>
            <Route  path='/about' element={<About/>}/>
            <Route  path='/contact' element={<Contact/>}/>
         {/!*   <Route  path='/home' element={<Home/>}/>
            <Route  path='/home' element={<Home/>}/>*!/}
        </Routes>
      </div>*/

      <AdminDashBoard/>
  );
}

