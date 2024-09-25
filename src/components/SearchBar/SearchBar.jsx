import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search-section'>
    <p>SAVEIT</p>
    <div className='search'>
      <BiSearch className='search-icon'/>
      <input type="text" placeholder='Search' />
    </div>
  </div>
  )
}

export default SearchBar