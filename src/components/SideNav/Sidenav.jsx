import React from 'react'
import { Link } from 'react-router-dom'
import {  BiLogOut } from 'react-icons/bi'
import { FaChartBar, FaWallet } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { RiSettings2Fill } from 'react-icons/ri'
import './Sidenav.css'

const Sidenav = () => {
  return (
    <div className='sidenav-container'>
        <ul>
            <Link to="/dashboard" className='nav-option'><MdDashboard/><li>Dashboard</li></Link>
            <Link to="/budget" className='nav-option'><FaWallet/><li>Budget</li></Link>
            <a href="" className='nav-option'><FaChartBar/><li>Analysis</li></a>
        </ul>
        <ul className='second-section-nav'>
          <a href="" className='nav-option'><RiSettings2Fill/><li>Settings</li></a>
          <a href="" className='nav-option'><BiLogOut/><li>Logout</li></a>
        </ul>
    </div>
  )
}

export default Sidenav