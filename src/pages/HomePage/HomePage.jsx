import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import homeimage from '../../assets/image-1.png'
import './HomePage.css'
import Button from '../../components/Button/Button'

const HomePage = () => {
  return (
    <div className='home-container'>
        <div  className='nav'>
           <img src={logo} alt="" className='logo' />
           <div className='btn-section'>
            <Link to="/signup"><Button text='Sign in' style={{backgroundColor: "#ffff", color:'#119f45'}}/></Link>
            <Link to="/login"><Button text='Login' style={{backgroundColor: "#ffff", color:'#119f45'}}/></Link>
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