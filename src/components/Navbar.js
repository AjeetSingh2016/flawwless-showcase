import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-10 fixed top-0 left-0 right-0 flex z-40">
      <div className="w-3/5 sm:w-1/4 bg-blue-500 flex pl-10 flex items-center">
        <NavLink>
          <button className="text-white">Home</button>
        </NavLink>
      </div>

      <div className="w-2/5 sm:w-3/4 bg-blue-500 flex justify-around items-center">
        <NavLink to="/about">
          <button className="text-white">About</button>
        </NavLink>

        <NavLink to="/t&C">
          <button className="text-white">T&C</button>
        </NavLink>

        <NavLink to="/privacy">
          <button className="text-white">Privacy Policy</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
