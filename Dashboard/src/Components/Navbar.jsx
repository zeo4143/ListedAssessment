import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BiBell} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'

export default function Navbar() {
  return (
    <div className='navcontainer'>
      <div className="componentname">
        <h1 style={{fontSize: "24px"}}>Dashboard</h1>
      </div>

      <div className="navelements">
        <input 
          type="text"
          placeholder='Search...' 
          />
          <FiSearch className='searchicon'/>
          <BiBell className='bellicon'/>
          <FaUserCircle className='usericon'/>
      </div>

     
    </div>
  )
}
