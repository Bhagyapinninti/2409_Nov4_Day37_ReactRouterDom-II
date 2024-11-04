import React, { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom"

function Login() {
  let navigate= useNavigate();
  let emailInputRef =useRef();
  let PasswordInputRef =useRef();
  return (
    <div className='App' style={{backgroundColor:"lightgrey", padding:"10px"}}>

        <h1 style={{color:"dodgerblue", fontSize:"3rem", position:"relative", top:"50px"}}>facebook</h1>

      <form style={{display:"inline-block",backgroundColor:"white",border:"0px", borderRadius:"10px", boxShadow:"5px 5px 5px grey", margin:"40px"}}>
        <h4 style={{fontSize:"1.2rem"}}>Log in to Facebook</h4>


        <div style={{margin:"20px"}}>
            <label style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>Email</label>
            <input ref={emailInputRef}></input>
        </div>

        <div style={{margin:"20px"}}>
            <label  style={{display:"inline-block", width:"150px", fontSize:"1.2rem", textAlign:"left"}}>Password</label>
            <input ref={PasswordInputRef}></input>
        </div>

        <div style={{margin:"20px"}}>
            <button  style={{backgroundColor:"dodgerblue", color:"white", fontSize:"1.1rem"}}
            onClick={()=>{

              let typedEmail= emailInputRef.current.value;
              let typedPassword =PasswordInputRef.current.value;
             if(typedEmail=="bhagya@gmail.com" && typedPassword=="bhagya22"){
              navigate("/menu",{state:{msg:"Welcome to the Page.."}});
             }
             else{
              alert("Incorrect Email/Password.");  
             }
              
            }}
            >Log in</button>
            
        </div>

       <p style={{color:"blue"}}>Forgotten account?  <Link to="/signup">Sign up</Link></p>
      </form>

      <br></br>
      <br></br>
  
    </div>
  )
}

export default Login
