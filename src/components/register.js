import React from 'react'
import '../styles/register.css'

function register() {
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
                        <input type="text" placeholder='First Name' className="loginInput"/>
                        <input type="text" placeholder='Last Name' className="loginInput"/>
                        <input type="number" placeholder='Phone Number' className="loginInput"/>
                        <input type="Email" placeholder='Enter Your Email' className="loginInput"/>
                        <input type="Password" placeholder='Enter Your Password' className="loginInput"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegister">Login</button>
                    </div>
                </div>
            </div>
        </div>
      )
  
}

export default register