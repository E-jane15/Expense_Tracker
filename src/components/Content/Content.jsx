import React from 'react'
import './Content.css'
import Balance from '../Balance/Balance'
import TotalBalanceChart from '../TotalBalanceChart/TotalBalanceChart'
import CategoryChart from '../CategoryChart/CategoryChart'
import BudgetFolder from '../BudgetFolder/BudgetFolder'

const Content = () => {
  return (
    <div className='content-container'>
        <div className='content-wrapper'>
            <div className='column-1'>
               <Balance/>
               <TotalBalanceChart/>
               <BudgetFolder/>
            </div>
            <div className='column-2'>
                <CategoryChart/>
            </div>
        </div>
    </div>
  )
}

export default Content