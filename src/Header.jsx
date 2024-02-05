

import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        /*  color: "#161616" */
        color: "#fc2003"
    }

    /*    function fakeLogOut() {
           localStorage.removeItem("loggedin")
       } */

    return (
        <header className=" bg-black bg-opacity-10 text-xl fixed top-0 flex flex-row justify-end sm:pr-10 pr-5 pt-7 pb-7 sm:gap-3 gap-1 w-full 
         text-center  text-orange-300 py-2">

            <Link
                className="site-logo hover:text-orange-400" to="/pocetne">Pocetna</Link>
            {/*  <nav> */}
            <NavLink className="hover:text-orange-400"
                to="/login"
                style={({ isActive }) => isActive ? activeStyles : null}
            >
                Sign In
            </NavLink>
            {/*     <NavLink 
                className="hover:text-orange-400"
                    to="Bihac"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Bihac
                </NavLink> */}
            <NavLink
                className="hover:text-orange-400"
                to="/register"
                style={({ isActive }) => isActive ? activeStyles : null}
            >
                <span className="bg-orange-400 w-[80%] text-white h-10 p-3 pl-5 pr-5 hover:bg-orange-500 rounded-lg " > Register</span>
            </NavLink>
            {/*   <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link> */}
            {/*  <button onClick={fakeLogOut}>X</button> */}
            {/*  </nav> */}
        </header>
    )
}