import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
const SkillChart = () => {
    var wtSkills = ["HTML", "CSS", "Boostrap"]
    const [chartData, setChartData] = useState({})
    const chart = () => {
        setChartData({
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            dataset: [
                {
                    label: 'level of thicknesss',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return (
        <div>
            <Bar data={chartData} style={{width:"600px", height:"300px"}} />
        </div>
    );
}

export default SkillChart
