import React from 'react'
import {FaUserCircle, FaTags} from 'react-icons/fa'
import {FiPieChart} from 'react-icons/fi'
import {MdSettingsSuggest, MdOutlineSchedule} from 'react-icons/md'


export default function Sidebar() {

  const elements = [
    {
      elementName: "Dashboard",
      icon : <FiPieChart/>
    },
    {
      elementName: "Transactions",
      icon: <FaTags/>
    }, 
    {
      elementName: "Schedules",
      icon: <MdOutlineSchedule/>
    }, 
    {
      elementName: "Users",
      icon: <FaUserCircle/>
    },
    {
      elementName: "Settings",
      icon: <MdSettingsSuggest/>
    }
  ]
  return (
    <div className='container'>
        <div className="components">
          <div>
            <h1 style={{fontSize: "36px"}}>Board</h1>
          </div>
          <div className='sidebarelements'>
            {elements.map((element, index) => (
              <div className="elements" key={index}>
                {element.icon}
                <p>{element.elementName}</p>
              </div>
            ))}
          </div>
        </div>
        
        
        <div className="support">
          <p>Help</p>
          <p>Contact Us</p>
        </div>
    </div>
  )
}
