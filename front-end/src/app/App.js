
import '../App.css';
import Home from "../pages/Home/index";
import About from "../pages/Customer/about";

import React from "react";
import "../pages/Customer/style.css";
import "../pages/SignIn/index";


import {Route, Routes} from "react-router-dom";
import Drawer from "../pages/Customer/drawer";
import { makeStyles } from "@material-ui/core/styles";
import {withStyles} from "@mui/styles";
import Contact from "../pages/Customer/contact";
import SignIn from "../pages/SignIn";
import Browse from "../pages/Browse";
import BasicDatePicker from "../pages/components/DatePicker";
import VehicleDetailBooking from "../pages/VehicleDetailBooking";
import CustomerDashBoard from "../pages/Customer";
import AdminDashBoard from "../pages/Admin";






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

