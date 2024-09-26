import React from 'react'
import Chart from 'react-apexcharts'

const CategoryChart = () => {
  return (
    <div className='chart'>
        <Chart
        type='donut'
        
        series={[44,55,41,17]}
        options={{
            labels:['Apple', 'Mango','Orange', 'Watermelon'],
            plotOptions:{
              pie:{
                donut:{
                  size:'60%'
                },
                customScale:0.8
              }
            }
        }}
        />
    </div>
  )
}

export default CategoryChart