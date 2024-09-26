import React from 'react'
import './CategoryHistory.css'

const CategoryHistory = () => {
  return (
    <div>
        <div className='history-wrapper'>
      <p>Category History</p>
       <div className='history-header'>
          <p>Category</p>
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
       </div>
       <div className='history-content'>
            <p>Food</p>
            <p>22/04/2024</p>
            <p>Indomie</p>
            <p>1400FCFA</p>
       </div>
       <div className='history-content'>
            <p>Electronics</p>
            <p>22/04/2024</p>
            <p>Headset</p>
            <p>14000FCFA</p>
       </div>
       
       </div>
    </div>
  )
}

export default CategoryHistory