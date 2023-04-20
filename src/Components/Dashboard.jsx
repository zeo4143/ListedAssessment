import React from 'react'
import { insights } from '../DataCharts/Data/InsightsData'
import LineChart from '../DataCharts/Charts/LineChart'
import PieChart from '../DataCharts/Charts/PieChart'
import Events from '../DataCharts/Charts/Events'
export default function Dashboard() {
  return (
    <div className='DashboardContainer'>
        {insights.map((item, index) => (
        <div className='cardelements' key={index} style={{background: item.color}}>
          <div className="icon" style={{fontSize: "24px"}}>
            {item.icon}
          </div>
          <div className="numbers">
            <p>{item.name}</p>
            <h1 style={{fontSize: "24px", margin : "0.5rem"}}>{item.number}</h1>
          </div>
        </div>
      ))}
      
      <div className='lineChart'>
        <LineChart /> 
      </div>
      <div className='pieChart'>
        <PieChart/>
      </div>
      <div className='events'>
        <Events/>
      </div>
    </div>
  )
}
