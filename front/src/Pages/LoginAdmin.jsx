/* import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Redux/Slice/authSlice'
import './CSS/LoginAdmin.css'
function LoginAdmin() {
    const [userData,setUserData ]= useState()
    const{user}=useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate =useNavigate()
const Sign_Up =(e)=>{
    e.preventDefault()
    dispatch(login(userData))
    console.log(user)
}
useEffect(()=>{
    if(user){
        
          navigate('/Dashboard')
          
            }                  
   
    
},[user])

  return (
    <form className="admin-connect-form">
  <h2 className="form-title-admin">Admin Connect</h2>
  <label> Email :</label>
  <input type='email' placeholder='Enter your email' onChange={(e)=>{setUserData({...userData,email:e.target.value})}}></input>
  <label> Password :</label>
  <input type='password' placeholder='Enter your password' onChange={(e)=>{setUserData({...userData,password:e.target.value})}}></input>
  <button type='submit' onClick={Sign_Up} > Sign In </button>
</form>

  )
}

export default LoginAdmin */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../Redux/Slice/authSlice'
import './CSS/LoginAdmin.css'


function LoginAdmin() {
  const [userData, setUserData] = useState()  
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const Sign_Up = (e) => {
    e.preventDefault()
    dispatch(loginAdmin(userData))
    console.log(user)
  }

  useEffect(() => {
    if (user) {
      navigate('/Dashboard')
    }
  }, [user])
  useEffect(() => {
    const form = document.querySelector('.admin-connect-form');
    form.classList.add('slide-in');
  }, []);
  return (
  <>
  <div className='Container'>
    <form className="admin-connect-form">
      
      <h2 className="form-title-admin">Admin Connect</h2>
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}></input>
      <label>Password:</label>
      <input type="password" placeholder="Enter your password" onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}></input>
      <button type="submit" onClick={Sign_Up}>Sign In</button>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
    </form>
    <div className="slogan">
      <p>You are New Beauty</p>
      <p>Reveal it</p>
    </div>
  </div>
</>

  )
}

export default LoginAdmin
