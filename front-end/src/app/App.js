import '../App.css';
import Home from "../pages/Home/index";


import React from "react";

import "../pages/SignUp/index";


import {Route, Routes} from "react-router-dom";

import {makeStyles} from "@material-ui/core/styles";
import {withStyles} from "@mui/styles";

import SignIn from "../pages/SignUp";
import Browse from "../pages/Browse";
import BasicDatePicker from "../components/common/DatePicker";
import VehicleDetailBooking from "../pages/VehicleDetailBooking";




import SignUp from "../pages/SignUp";
import SignInPage from "../pages/SignIn";

import {AbcSharp} from "@mui/icons-material";

import ManageCustomer from "../components/AdminDashBoard/ManageCustomer/manageCustomer";
import ManageVehicle from "../components/AdminDashBoard/ManageVehicle/manageVehicle";
import DashBoard from "../components/AdminDashBoard/DashBoard/dashBoard";
import ManageBooking from "../components/AdminDashBoard/ManageBooking/manageBooking";
import IncomeReports from "../components/AdminDashBoard/IncomeReports/incomeReports";
import AdminDashBoard from "../components/AdminDashBoard/Drawer";
import CustomerDashBoard from "../components/CustomerDashBoard/Drawer";
import Profile from "../components/CustomerDashBoard/Profile/profile";
import RentCar from "../components/CustomerDashBoard/RentCar/booking";
import Bookings from "../components/CustomerDashBoard/Bookings/manageBooking";
import DriverProfile from "../components/DriverDashBoard/Profile/profile";
import DriverSchedule from "../components/DriverDashBoard/DriverSchedule/schedule";
import DriverDashBoard from "../components/DriverDashBoard/Drawer";


export default function App() {


    return (



        <Routes>

            <Route exact path='/' element={<Home/>}/>
            <Route path='sighUpPage' element={<SignUp/>}/>
            <Route path='signInPage' element={<SignInPage/>}/>
            <Route path='browse' element={<Browse/>}/>

            <Route path="/adminDashBoard" element={<AdminDashBoard/>}>
                <Route index element={<DashBoard/>}/>
                <Route path="manageCustomer" element={<ManageCustomer/>}/>
                <Route path="manageVehicle" element={<ManageVehicle/>}/>
                <Route path="manageBooking" element={<ManageBooking/>}/>
                <Route path="incomeReports" element={<IncomeReports/>}/>
            </Route>

            <Route path="/customerDashBoard" element={<CustomerDashBoard/>}>
                <Route index element={<Profile />}/>
                <Route path="rentCar" element={<RentCar/>}/>
                <Route path="bookings" element={<Bookings/>}/>

            </Route>

            <Route path="/driverDashBoard" element={<DriverDashBoard/>}>
                <Route index element={<DriverProfile/>}/>
                <Route path="schedule" element={<DriverSchedule/>}/>

            </Route>

        </Routes>


    );
}

