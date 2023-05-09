import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../Redux/Slice/authSlice'
import { useNavigate } from 'react-router-dom'
import '../Pages/CSS/Register.css'

function Register() {
const navigate = useNavigate()
const [userData,setUserData ]= useState()
const {user} = useSelector(state => state.auth)
const dispatch= useDispatch()

const Sign_in =(e)=>{

    e.preventDefault()

    dispatch(register(userData))
    }
    
    useEffect(()=>{
      if(user){
        navigate('/Dashboard')
      }

    },[user]) 




  return (
  
    <form className="registration-form">
      <h2 className="form-title">Register</h2>
      <div className="form-group">
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your full name" onChange={(e)=>{setUserData({...userData,Name:e.target.value})}} required></input>
      </div>
  <div className="form-group">
    <label>Email:</label>
    <input type="email" placeholder="Enter your email" onChange={(e)=>{setUserData({...userData,email:e.target.value})}} required></input>
  </div>
  <div className="form-group">
    <label>Password:</label>
    <input type="password" placeholder="Enter your password" onChange={(e)=>{setUserData({...userData,password:e.target.value})}} required></input>
    
  </div>
  <div className="form-group">
    <label>Confirm Password:</label>
    <input type="password" placeholder="Confirm your password" required></input>
    <a className="form-link" href="#">Already   have an account?</a>
  </div>
  <button type="submit" className="form-submit-btn" onClick={Sign_in}>Register</button>
</form>


  )
}

export default Register