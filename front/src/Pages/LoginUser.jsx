import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Slice/authSlice'
import './CSS/LoginUser.css'
function LoginUser() {
    const [userData,setUserData ]= useState()
    const{user}=useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate =useNavigate()
const Sign_Up =(e)=>{
    e.preventDefault()
    dispatch(login(userData))
    
}
useEffect(()=>{
    if(user)
    navigate('/Dashboard')
},[user])
useEffect(() => {
  const form = document.querySelector('.user-connect-form');
  form.classList.add('slide-in');
}, []);

  return (
<>
  <div className='Container'>
    <form className="user-connect-form">
      <h2 className="form-title">User Connect</h2>
      <label> Email :</label>
      <input type='email' placeholder='Enter your email' onChange={(e)=>{setUserData({...userData,email:e.target.value})}}></input>
      <label> Password :</label>
      <input type='password' placeholder='Enter your password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}}></input>
      <button type='submit' onClick={Sign_Up} > Sign In </button>
      <p className="signup-link">Don't have an account? <a href="/register">Sign up</a></p>
    </form>
    <div className="slogan">
      <p>You are New Beauty</p>
      <p>Reveal it</p>
    </div>
    
  </div>

</>
  )
}

export default LoginUser