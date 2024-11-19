import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'
import './SignUpPage.css'
import Button from '../../components/Button/Button'

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
          <Link to="/login" className='login-link' > Click Here</Link></p>
       <Button text='Sign Up'/>
        </form>
      </div>
  </div>
  )
}

export default SignUpPage