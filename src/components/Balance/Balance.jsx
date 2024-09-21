import React from 'react'
import './Balance.css'

const Balance =()=>{
    return(
        <div className='balance-container'>
            <p>Current balance</p>
            <h2>100,000 FCFA</h2>
            <div className='balance-flex'>
                <div className='income'>
                  <p>Total income</p>
                  <h3>200,000 FCFA</h3>
                </div>
                <div>
                    <p>Total Spending</p>
                    <h3>100,000 FCFA</h3>
                </div>
                
            </div>
        </div>
    )
}
export default Balance;