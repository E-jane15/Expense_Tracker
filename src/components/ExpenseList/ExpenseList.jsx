import React from "react";
import "./ExpenseList.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { BiPencil, BiTrash } from "react-icons/bi";
import expenses from '../../../src/expenses.json'
import Expenses from "../Expenses";
import AddExpense from '../AddExpense/AddExpense'
import { useState } from "react";

const ExpenseList = () => {
  const [addModal, setAddModal]= useState(false);
     const handleAdd = ()=>{
      setAddModal(true);
    } 

    

  return (
    <div className="expenselist-container">
       {addModal?(
        <AddExpense />
       ):undefined}

      <div className="expenselist-wrapper">
        <div className="expense-header">
          <SearchBar />
        <Button text="Add Expense" onClick={handleAdd} />
        </div>
        <div className="editdelete-section">
          <div className="edit-section">
            <BiPencil />
            <p>Edit</p>
          </div>
          <div className="delete-section">
            <BiTrash />
            <p>Delete</p>
          </div>
        </div>
        <table>
    <thead>
      <tr className="list-heading">
        <td>Category</td>
        <td>Date</td>
        <td>Description</td>
        <td>Amount</td>
      </tr>
    </thead>
    <tbody>
      
      {expenses.map((expense)=>(
           <Expenses key={expense.id} expense={expense}/>
        ))}
      
    </tbody>
  </table>
        
      </div>
    </div>
  );
};

export default ExpenseList;
