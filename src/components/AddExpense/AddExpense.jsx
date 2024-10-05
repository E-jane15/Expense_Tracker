import React, { useState } from 'react'
import Button from '../Button/Button'
import "./AddExpense.css"
import { BiX } from 'react-icons/bi'


const AddExpense = ({onAddExpense, onCancel}) => {
  const[category,setCategory] = useState("");
  const[amount,setAmount] = useState("");
  const[description,setDescription] = useState("");
  const[date,setDate] = useState("");
 
  //function to submit the form
  const handleSubmit = (e)=>{
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random(10000)), //code to generate id
      category,
      amount:+(amount),
      description,
      date
    };

    onAddExpense(newExpense);
    setCategory('');
    setAmount('');
    setDate('');
    setDescription('');
     
  }

  return (
    <div className='expense-container'>
    <BiX className='x-icon' onClick={onCancel} />
      <div className='expense-wrapper'>
            <h3>Add Expense</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-item'>
              <label htmlFor="">Category</label>
              <div className='select-field'>
              <select name="" id="" value={category} onChange={(e)=> setCategory(e.target.value)} >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Health">Health</option>
                <option value="Insurance">Insurance</option>
                <option value="Utilities">Utilities</option>
                <option value="Fuel">Fuel</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              </div>
            </div>
            <div className='form-item'>
              <label htmlFor="">Amount</label>
              <input 
              type="number"
              placeholder='Enter Amount'
              value={amount}
              onChange={(e)=>setAmount(e.target.value)}
              
              />
            </div>
            <div className='form-item' >
              <label htmlFor="">Description</label>
              <input 
              type="text" 
              placeholder='Enter Description'
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
            </div>
            <div className='form-item'>
              <label htmlFor="">Date</label>
              <input 
              type="date"  
              placeholder='Enter Date'
              value={date}
              onChange={(e)=>setDate(e.target.value)}

              />
            </div>
              <Button text='Add' type='submit'/>
          </form>
         
      </div>
  </div>
  )
}

export default AddExpense