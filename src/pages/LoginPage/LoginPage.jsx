import React from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className='loginpage-container'>
    <div className='form-div'>
        <h1>Login</h1>
        <form action="">
            <div className='input-field' id="name-section">
                <FaUser className='icon'/>
                <input type="text" placeholder='Name'/>
            </div>
            
            <div className='input-field' id="name-section">
                <FaLock className='icon'/>
                <input type="password" placeholder='Password'/>
            </div>
            <Link to='/dashboard'><button >Log in</button></Link>
        </form>
      </div>
      </div>
    
  )
}

export default LoginPage