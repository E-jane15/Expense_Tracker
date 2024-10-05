import React from "react";
import "./ExpenseList.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { BiPencil, BiTrash } from "react-icons/bi";
import initialexpenses from "../../../src/initialexpenses.json";
import Expenses from "../Expenses";
import AddExpense from "../AddExpense/AddExpense";
import { useState } from "react";


const ExpenseList = () => {
  const [expenses, setExpenses] = useState(initialexpenses);
  const [search, setSearch] = useState("");
  const [addModal, setAddModal] = useState(false);

  //function to add expenses
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setAddModal(false); // Close the form after adding the expense
  };

  //function that shows the add expense form when add expense button is clicked
  const handleAdd = () => {
    setAddModal(true);
  };
  //function to close the expense form
  const handleCancel = () => {
    setAddModal(false);
  };
  //function to filter expenses
  const filteredExpenses = expenses.filter((expense) =>
    expense.category.toLowerCase().includes(search.toLowerCase())
  );




  return (
    <div className="expenselist-container">
      {/* Displaying the expense form if it isn't yet by clicking the addexpense button*/}
      {addModal ? (
        <AddExpense onAddExpense={addExpense} onCancel={handleCancel} />
      ) : undefined}

      <div className="expenselist-wrapper">
        <div className="expense-header">
          <SearchBar onChange={(e) => setSearch(e.target.value)} />
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
            {/*Looping through the expenses and displaying them in the expense list*/}
            {filteredExpenses.map((expense) => (
            
                <Expenses key={expense.id} expense={expense} />
             
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};



export default ExpenseList;

export const calculateTotal = ()=>{
  
  const [expenses, setExpenses] = useState(initialexpenses);
  return expenses.reduce((total, expense)=>{
    return total = (total += +expense.amount)
  },0);
}