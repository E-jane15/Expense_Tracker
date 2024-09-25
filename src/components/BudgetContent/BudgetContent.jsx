import React from 'react'
import Budget from '../Budget/Budget.jsx'
import './BudgetContent.css'
import ExpenseList from '../ExpenseList/ExpenseList.jsx'

const BudgetContent = () => {
  return (
    <div className='budgetcontent-container'>
        <div className='budgetcontent-wrapper'>
           <div className='content-column1'>
            <Budget/>
           </div>
            <div className='content-column2'> 
              <ExpenseList/>
            </div>
        </div>
        
    </div>
  )
}

export default BudgetContent