import React from 'react'
import './Budget.css'

const Budget = () => {
  return (
    <div className='budgetcontainer'>
        <div className='budgetwrapper'>
            <div className='flex-div'>
              <h4>Budget Folder</h4>
                <a href="">Create Folder</a>
            </div>
            <div className='budget-list'>
               <h4>Personal Needs</h4>
               <p>23/08/2024</p>
            </div>
            <div className='budget-list'>
                <h4>Personal Needs</h4>
                <p>23/08/2024</p>
            </div>
            <div className='budget-list'>
                <h4>Personal Needs</h4>
                <p>23/08/2024</p>
            </div>
        </div>
    </div>
  )
}

export default Budget