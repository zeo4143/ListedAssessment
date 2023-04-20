import React, { useState } from 'react'
import { lineData } from '../Data/LineChartData'
import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
 } from 'chart.js'

 ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
 )

export default function LineChart() {

    const [data, setData] = useState({
        labels : lineData.may_june.map((item) => (item.Week)),
        datasets:[
            {
                label : "Guest",
                data: lineData.may_june.map((item) => (item.Guest)),
                backgroundColor:'#E9A0A0',
                borderColor:'#E9A0A0',
                pointRadius: 0, 
                tension:0.5

            },
            {
                label : "User",
                data: lineData.may_june.map((item) => (item.User)),
                backgroundColor:'#9BDD7C',
                borderColor:'#9BDD7C',
                pointRadius: 0, 
                tension:0.5
            },
        ]
    })

    const options = {
        resposive: true,
        maintainAspectRatio: false,
        
        plugins: {
            legend:{
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    boxWidth: 7,
                    boxHeight: 7,
                    font: {
                        size: 14
                    },
                    margin: 10
                }
    
            }
        },
        scales: {
            x: {
                ticks: {
                    beginAtZero: true,
                },
                grid: {
                    display: false
                },
                
            },
            y: {
                
            }
        }
    }
    console.log(data);
  return (    
    <Line data={data} options={options} />
  )
}
