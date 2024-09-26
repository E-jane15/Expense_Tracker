import React from 'react'
import Button from '../Button/Button'

const AddExpense = () => {
  return (
    <div>
        <div>
            <div>
                <h3>Add Expense</h3>
            </div>
            <form action="">
                <label htmlFor="">Category</label>
                <input type="text" placeholder='Enter Category' />
                <label htmlFor="">Amount</label>
                <input type="text" placeholder='Enter Amount'/>
                <label htmlFor="">Description</label>
                <input type="text" placeholder='Enter description'/>
                <label htmlFor="">Date</label>
                <input type="date"  placeholder='Enter date'/>
                <Button text='Add'/>
            </form>
        </div>
    </div>
  )
}

export default AddExpense