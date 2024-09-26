import React from "react";
import "./ExpenseList.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import Button from "../Button/Button";
import { BiPencil, BiTrash } from "react-icons/bi";

const ExpenseList = () => {
  return (
    <div className="expenselist-container">
      <div className="expenselist-wrapper">
        <div className="expense-header">
          <SearchBar />
        <Link to='/addexpense'><Button text="Add Expense" /></Link>
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
            <tr className="list-row">
              <td>Category</td>
              <td>Date</td>
              <td>Description</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Food</td>
              <td>04/04/2024</td>
              <td>For the house</td>
              <td>10,000FCFA</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>04/04/2024</td>
              <td>For the house</td>
              <td>10,000FCFA</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>04/04/2024</td>
              <td>For the house</td>
              <td>10,000FCFA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
