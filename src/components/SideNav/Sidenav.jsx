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
            <a href=""><MdDashboard/><li>Dashboard</li></a>
            <Link to="/budget"><FaWallet/><li>Budget</li></Link>
            <a href=""><FaChartBar/><li>Analysis</li></a>
        </ul>
        <ul className='second-section-nav'>
          <a href=""><RiSettings2Fill/><li>Settings</li></a>
          <a href=""><BiLogOut/><li>Logout</li></a>
        </ul>
    </div>
  )
}

export default Sidenav