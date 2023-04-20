import React from 'react'
import { eventData } from '../Data/EventsData'

export default function Events() {
    console.log(eventData);
  return (
    <div>
        {eventData.map((item) => {
            return(
                <div className="eventData">
                    <span style={{backgroundColor: item.color, color: item.color}}>..</span>
                    <div>
                        <h3>{item.event}</h3>
                        <p>{item.time}</p>
                        <small>{item.location}</small>
                    </div>
                </div>    
            )    
        })}
    </div>
  )
}
