import React from 'react'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'

function Menu() {
  let location= useLocation();
  console.log(location);

  return (
    <div   className='App'style={{backgroundColor:"lightgrey", padding:"10px"}}>
        <Navigation></Navigation>
      <h2 style={{textAlign:"left",fontSize:"2rem"}}>Menu</h2>
      <h3>{location&& location.state && location.state.msg ? location.state.msg:"welcome to the page"}</h3>
    </div>
  )
}

export default Menu

