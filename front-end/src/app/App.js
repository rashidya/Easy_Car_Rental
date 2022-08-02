
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
import BasicDatePicker from "../components/common/DatePicker";
import VehicleDetailBooking from "../pages/VehicleDetailBooking";
import CustomerDashBoard from "../pages/Customer";
import AdminDashBoard from "../pages/Admin";
import ManageCustomer from "../components/AdminDashBoard/manageCustomer";
import DriverDashBoard from "../pages/Driver";
import SignUp from "../pages/SignUp";
import SignInPage from "../pages/SignIn";
import Booking from "../components/CustomerDashBoard/booking";
import {AbcSharp} from "@mui/icons-material";
import DriverProfile from "../components/DriverDashBoard/profile";






export default function App() {


  return (

     /*  <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route path='browse' element={<Browse/>}/>
         <Route path='vehicleDetailsPage' element={<VehicleDetailBooking/>}/>
         <Route path='sighUpPage' element={<SignUp/>}/>
         <Route path='signInPage' element={<SignInPage/>}/>
         <Route path='customer' element={<CustomerDashBoard/>}/>
         <Route path='admin' element={<AdminDashBoard/>}/>
         <Route path='driver' element={<DriverDashBoard/>}/>
       </Routes>*/

<AdminDashBoard/>







  );
}

