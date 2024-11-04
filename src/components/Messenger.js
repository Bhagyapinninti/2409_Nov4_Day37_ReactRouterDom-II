import React from 'react'
import Navigation from './Navigation'

function Messenger() {
  return (
    <div  className='App' style={{backgroundColor:"lightgrey", padding:"10px"}}>
        <Navigation></Navigation>
      <h2 style={{textAlign:"left",fontSize:"2rem"}}>Messenger</h2>
    </div>
  )
}

export default Messenger
