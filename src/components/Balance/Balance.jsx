import React, { useState, useEffect } from 'react'
import './Balance.css'
import Button from '../Button/Button';
import { calculateTotal } from '../ExpenseList/ExpenseList';

const Balance =()=>{
 
  const [income,setIncome] = useState(100000);
  const[editing, setEditing] = useState(false);
  const [tempIncome, setTempIncome] = useState(income);
   //function to toggle editing
   const handleEdit=()=>{
    setEditing(true);
   } 
  //function to handle input change
  const handleInputChange =(e)=>{
      setTempIncome(e.target.value);
  };
  useEffect(() => {
    const localIncome = JSON.parse(localStorage.getItem("income"));
    if (localIncome) {
      setIncome(localIncome);
    } else {
      setIncome(10000);
    }

  }, []);

  //function to save new income
  const handleSave=()=>{
    setIncome(tempIncome);
    localStorage.setItem("income", JSON.stringify(tempIncome))
    setEditing(false);
  }
  const Total = calculateTotal();
  const balance = income-Total;
    return(
        <div className='balance-container'>
            <div>
            <p>Current balance</p>
            <h2>{balance} FCFA</h2>
            <div className='balance-flex'>
                <div className='income'>
                  <p>Total income</p>
                  <h3>{income}FCFA</h3>
                </div>
                <div>
                    <p>Total Spending</p>
                    <h3>{Total} FCFA</h3>
                </div>  
            </div>
            </div>
            <div>
                {!editing?(
                    <Button text='Edit' style={{backgroundColor: "#ffff", color:'#000'}} onClick={handleEdit}/>
                ):(  
                    <div>
                    <input type="number" value={tempIncome} onChange={handleInputChange} />
                    <Button text='Save' style={{backgroundColor:'#fff', color:'#000'}} onClick={handleSave}/>
                    </div>
                )}
                
            </div>
        </div>
    )
}
export default Balance;