import React from 'react'
import './header.css'

const Header = ({title}) => {
  return (
    <div className='header-container'>
        <div className='header-wrapper'>
            <p>{title}</p>
            <select name="" id="">
                <option value="">January</option>
                <option value="">February</option>
                <option value="">March</option>
                <option value="">April</option>
                <option value="">May</option>
                <option value="">June</option>
                <option value="">July</option>
                <option value="">August</option>
                <option value="">September</option>
                <option value="">October</option>
                <option value="">November</option>
                <option value="">December</option>
            </select>
        </div>
    </div>
  )
}

export default Header