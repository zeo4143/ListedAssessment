import React, { useState } from 'react'
import { pieData } from '../Data/PieChartData'
import { Pie } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
 } from 'chart.js'

 ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
 )

export default function PieChart() {

    const [data, setData] = useState({
        labels : pieData.may_june.map((item) => (item.type)),
        datasets:[
            {
                label : "Guest",
                data: pieData.may_june.map((item) => (item.sales)),
                backgroundColor: ['#98D89E', '#F6DC7D', '#EE8484'],
                borderColor:'#fff',
                pointBorderColor:'transparent',
                pointBorderWidth:4,
                tension:0.5

            },
        ]
    })

    const options = {

        resposive: true,
        maintainAspectRatio: false,
        
        plugins: {
            legend:{
                position: 'right',
                // align: 'center',
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                    boxHeight: 10,
                    font: {
                        // size: 14
                    }
                }
    
            },
        }
    }
  return (
    <div>
        <Pie data={data} options={options}/>
    </div>
  )
}
