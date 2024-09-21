import React from 'react'
import Sidenav from '../../components/SideNav/Sidenav'
import Topnav from '../../components/TopNav/Topnav'
import './DashboardPage.css'
import Header from '../../components/Header/Header'
import Content from '../../components/Content/Content'

const DashboardPage = () => {
  return (
    <div>
        <Topnav/>  
        <Sidenav/>
        <Header title='Dashboard'/>
        <Content/>
          
    </div>
  )
}

export default DashboardPage