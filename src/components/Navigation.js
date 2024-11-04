import React from 'react'
import { Link, NavLink } from "react-router-dom"
function Navigation() {
  return (
    <nav style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/messenger">Messenger</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
      <NavLink to="/account">Account</NavLink>
      <NavLink to="/">Signout</NavLink>
    </nav>
  )
}

export default Navigation
