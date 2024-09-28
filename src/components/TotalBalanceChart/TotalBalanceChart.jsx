import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import expenses from '../../expenses.json'

const TotalBalanceChart = () => {
   const [chartData, setChartData] = useState({series:[],options:{}});

   useEffect(()=>{
    const expenseAmount = expenses.map((expense)=>(expense.amount));
    setChartData({
      series:[{
        name: "Expenses",
        data: expenseAmount
      }],
      options:{
        chart:{
          type: 'bar',
          height: 200
        },

      }
    })
   },[])

  return (
    <div className='chart-container'>
        <div className='chart-wrapper'>
        <Chart
        type='bar'
        width={600}
        height={200}
        series={chartData.series}
        options={chartData.options}
        />
        </div>
    </div>
  )
}

export default TotalBalanceChart