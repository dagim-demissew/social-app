import React from 'react'
import '../styles/login.css'

function login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">dagims project3</h3>
                <span className="loginDescription">
                    connect with your frds and communicate happly
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" placeholder='Enter Your Email' className="loginInput"/>
                    <input type="Password" placeholder='Enter Your Password' className="loginInput"/>
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegister">Create Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login