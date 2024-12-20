import React from 'react'
import { BiBell, BiSearch} from 'react-icons/bi'
import profile from '../../assets/myavatar.jpg'
import SearchBar from '../SearchBar/SearchBar'
import './Topnav.css'

const Topnav = () => {
  return (
    <div className='topnav-container'> 
        <div className='topnav-wrapper'>
        <div className='search-section'>
          <p>SAVEIT</p>
           <SearchBar/>
          </div>

            <div className='user-section'>
                <BiBell className='notification'/>
                <img src={profile}/>
                <p>Jane</p>
          </div>
        </div>
    </div>
    
  )
}

export default Topnav