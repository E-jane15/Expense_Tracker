import React from 'react'
import { BiSearch } from 'react-icons/bi'
import './SearchBar.css'

const SearchBar = ({onChange, value}) => {
  return (
      <div className='search'>
          <BiSearch className='search-icon'/>
          <input type="text" placeholder='Search' onChange={onChange} value={value}/>
      </div>
  )
}

export default SearchBar