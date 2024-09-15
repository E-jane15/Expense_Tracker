import React from 'react'
import Sidenav from '../../components/SideNav/Sidenav'
import Topnav from '../../components/TopNav/Topnav'
import './DashboardPage.css'
import Header from '../../components/Header/Header'

const DashboardPage = () => {
  return (
    <div>
        <Topnav/>  
        <Sidenav/>
        <Header/>
      
    </div>
  )
}

export default DashboardPage