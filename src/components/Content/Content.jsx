import React from 'react'
import './Content.css'
import Balance from '../Balance/Balance'
import TotalBalanceChart from '../TotalBalanceChart/TotalBalanceChart'
import CategoryChart from '../CategoryChart/CategoryChart'
import BudgetFolder from '../BudgetFolder/BudgetFolder'
import CategoryHistory from '../CategoryHistory/CategoryHistory'

const Content = () => {
  return (
    <div className='content-container'>
        <div className='content-wrapper'>
            <div className='column-1'>
               <Balance/>
               <div className='chart-budget'>
                <strong className='chart-title'>Total Balance</strong>
               <TotalBalanceChart/>
               <BudgetFolder/>
               </div>
            </div>
            <div className='column-2'>
                <h4>Expense Review</h4>
                <CategoryChart/>
                <p className='goal'>Goal: Lorem ipsum dolor sit, amet consectetur adipisicrepellendus dicta. Libero odit reprehenderit illo mollitia.</p>
                <CategoryHistory/>
            </div>
        </div>
    </div>
  )
}

export default Content