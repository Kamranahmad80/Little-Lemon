import React from 'react'
import logo from "../assets/Logo.svg"
export const Nav = () => {
  return (
    <div>
        <img src={logo} alt="logo" />
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservation">Reservation</a></li>
            <li><a href="#order">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </div>
  )
}
