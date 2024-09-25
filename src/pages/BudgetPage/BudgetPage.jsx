import React from 'react'
import Topnav from '../../components/TopNav/Topnav'
import Sidenav from '../../components/SideNav/Sidenav'
import Header from '../../components/Header/Header'
import BudgetContent from '../../components/BudgetContent/BudgetContent'

const BudgetPage = () => {
  return (
    <div>
        <Topnav/>
        <Sidenav/>
        <Header title='Budget'/>
        <BudgetContent/>

    </div>
  )
}

export default BudgetPage