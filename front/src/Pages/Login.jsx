import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './CSS/Login.css'

function Login() {

  return (
  <div className="login-page">
        <div className="login-side admin-side">
          <NavLink to='LoginAdmin' className="admin-link"> Connect As Admin </NavLink>
        </div>
        <div className="login-side user-side">
          <NavLink to='LoginUser' className="user-link"> Connect As User </NavLink>
        </div>
    <Outlet></Outlet>

  </div>
  ) ;

}
export default Login