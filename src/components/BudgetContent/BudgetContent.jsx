import React from 'react'
import Budget from '../Budget/Budget.jsx'
import './BudgetContent.css'

const BudgetContent = () => {
  return (
    <div className='budgetcontent-container'>
        <div className='budgetcontent-wrapper'>
           <div className='content-column1'>
            <Budget/>
           </div>
            <div className='content-column2'> Hi</div>
        </div>
        
    </div>
  )
}

export default BudgetContent