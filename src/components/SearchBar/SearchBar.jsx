import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

const SearchBar = () => {
  return (
      <div className='search'>
          <BiSearch className='search-icon'/>
          <input type="text" placeholder='Search' />
      </div>
  )
}

export default SearchBar