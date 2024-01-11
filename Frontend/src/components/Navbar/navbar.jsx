import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '/logo.png'
import './navbar.css'
function Navbar() {
  return (
    <nav className="">

      <ul className="flex  flex-wrap   py-3 justify-evenly  items-center font-bold  ">

      <NavLink  to="/">
        <img src={Logo}  className=" w-14 h-14 "  alt="" />
      </NavLink>
  
        <li>
          <NavLink className=" hover:text-green-600" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink  className=" hover:text-green-600" to="/news">
            NEWS
          </NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-600" to="/events">EVENTS</NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-600" to="/socialActivity">SOCIAL ACTIVITY</NavLink>
        </li>
        <li>
          <NavLink className=" hover:text-green-600" to="/donate">DONATE</NavLink>{" "}
        </li>
        <li>
          <NavLink className=" hover:text-green-600" to="/login">LOGIN</NavLink>{" "}
        </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
