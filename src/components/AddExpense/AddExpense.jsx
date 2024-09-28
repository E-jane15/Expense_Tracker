import React, { useState } from 'react'
import Button from '../Button/Button'
import "./AddExpense.css"
import { BiX } from 'react-icons/bi'


const AddExpense = () => {

  return (
    <div className='expense-container'>
      <BiX className='x-icon'/>
        <div className='expense-wrapper'>
              <h3>Add Expense</h3>
            <form>
              <div className='form-item'>
                <label htmlFor="">Category</label>
                <div className='select-field'>
                <select name="" id="" >
                  <option value="">Select Category</option>
                  <option value="">Food</option>
                  <option value="">Transportation</option>
                  <option value="">Health</option>
                  <option value="">Insurance</option>
                  <option value="">Utilities</option>
                  <option value="">Fuel</option>
                  <option value="">Entertainment</option>
                </select>
                </div>
              </div>
              <div className='form-item'>
                <label htmlFor="">Amount</label>
                <input 
                type="text"
                placeholder='Enter Amount'
                
                />
              </div>
              <div className='form-item' >
                <label htmlFor="">Description</label>
                <input 
                type="text" 
                placeholder='Enter Description'
               
                />
              </div>
              <div className='form-item'>
                <label htmlFor="">Date</label>
                <input 
                type="date"  
                placeholder='Enter Date'
                
                />
              </div>
                <Button text='Add' type={SubmitEvent}/>
            </form>
           
        </div>
    </div>
  )
}

export default AddExpense