import React, { Profiler } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,Link
 
} from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import SignUp from "../screens/home";
// import Home from "../screens/home";
import Notfound from "../screens/Notfond";
import Profile from "../screens/profile";
import Services from "../screens/services";

export default function AppRouter() {
  return (
    <Router>
        {/* <Link to="/">Home </Link>  <br/>  */}
        {/* <Link to="services">services </Link><br/>
        <Link to="about">about </Link><br/>
        <Link to="Contact">Contact </Link><br/> */}
      <Routes>
     <Route path="/" element={<SignUp/>}/>
     <Route path="profile/:id" element={<Profile />}/>
     <Route path="profile/:id/services" element={<Services />}/>
     <Route path="profile/:id/about" element={<About />}/>
     <Route path="profile/:id/services/contact" element={<Contact />}/>
     
     <Route path="*" element={<Notfound/>}/>

      </Routes>
    </Router>
  );
}

