import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import './SignUpPage.css'

const SignUpPage = () => {
  return (
    <div className='signup-container'>
      <div className='form-div'>
       <h1>Sign Up</h1>
        <form action="">
        <div className='input-field' id="name-section">
            <FaUser className='icon'/>
            <input type="text" placeholder='Name'/>
        </div>
        <div className='input-field' id="name-section">
            <FaEnvelope className='icon'/>
            <input type="email" placeholder='Email'/>
        </div>
        <div className='input-field' id="name-section">
            <FaLock className='icon'/>
            <input type="password" placeholder='Password'/>
        </div>
        <p>Already have and account? 
          <Link to="/login">Click Here</Link></p>
        <button >Sign Up</button>
        </form>
      </div>
  </div>
  )
}

export default SignUpPage