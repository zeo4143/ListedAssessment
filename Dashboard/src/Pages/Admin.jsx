import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

export default function Admin() {
  return (
    <div className='dashboard'>
        <div className='sidebar'>
            <Sidebar/>
        </div>
        <div className='mainpage'>
            <div className='navbar'>
                <Navbar/>
            </div>

            <div className='outlet'>
              <Outlet/>
            </div>
        </div>

    </div>
  )
}
