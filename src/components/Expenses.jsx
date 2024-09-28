import React from 'react'

const Expenses = ({expense}) => {
  return (

    <tr>
        <td>{expense.category}</td>
        <td>{expense.date}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}FCFA</td>
    </tr>
  )
}

export default Expenses