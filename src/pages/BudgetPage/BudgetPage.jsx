import React from 'react'
import Topnav from '../../components/TopNav/Topnav'
import Sidenav from '../../components/SideNav/Sidenav'
import Header from '../../components/Header/Header'

const BudgetPage = () => {
  return (
    <div>
        <Topnav/>
        <Sidenav/>
        <Header title='Budget'/>
        <div>
            <div></div>
            <div></div>
        </div>

    </div>
  )
}

export default BudgetPage