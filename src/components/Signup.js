import React from 'react'
import { Link } from "react-router-dom"

function Signup() {
  return (
    <div style={{backgroundColor:"lightgrey", padding:"10px"}}>

        <h1 style={{color:"dodgerblue", fontSize:"3rem", position:"relative", top:"50px"}}>facebook</h1>

        <form style={{display:"inline-block",backgroundColor:"white",border:"0px", borderRadius:"10px", boxShadow:"5px 5px 5px grey", margin:"20px"}}>
        
        <h2>Create a new account</h2>
        <p>It's quick and easy.</p>
        <hr></hr>
        
        <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>First name</label>
        <input></input>
      </div>

      <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>Surname</label>
        <input></input>
      </div>

      <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"210px", fontSize:"1.2rem", textAlign:"left"}}>Date of birth</label>
        <input type="date"></input>
      </div>

      <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"125px", fontSize:"1.2rem", textAlign:"left"}}>Gender</label>
        
        <input type='radio' className='inputRadio' name='gender'></input>
        <label className='inputLabel'>Male</label>
        <input type="radio" className='inputRadio' name="gender"></input>
        <label className='inputLabel'>Female</label>
        <input type="radio" className='inputRadio' name='gender'></input>
        <label className='inputLabel'>Others</label>
        </div>

      <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>Email</label>
        <input></input>
      </div>

      <div style={{margin:"20px"}}>
        <label style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>Password</label>
        <input></input>
      </div>

      <div style={{margin:"20px"}}>
        <button type="button" style={{backgroundColor:"dodgerblue", color:"white", fontSize:"1.1rem"}}>Sign Up</button>
       </div>

      <p style={{color:"blue"}}>Already have an account? <Link to="/">Login</Link></p>
        </form>

        
        
      
    </div>
  )
}

export default Signup
