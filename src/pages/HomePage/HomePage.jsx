import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import homeimage from '../../assets/image-1.png'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-container'>
        <div  className='nav'>
           <img src={logo} alt="" className='logo' />
           <div className='btn-section'>
            <Link to="/signup"><button className='btn'>Sign up</button></Link>
            <Link to="/login"><button className='btn'>Log in</button></Link>
           </div>
        </div>
        <div className='home-content'>
          <div>
          <p>The gate way to better <br></br>spending habits!</p>
          <Link to="/signup"><button className='btn'>Get started</button></Link>
          </div>
        <img src={homeimage} alt="" />
        </div>
        
    </div>
  )
}

export default HomePage