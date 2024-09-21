import React from 'react'
import Chart from 'react-apexcharts'

const TotalBalanceChart = () => {
  return (
    <div className='chart-container'>
        <div className='chart-wrapper'>
        <strong className='chart-title'>Total Balance</strong>
        <Chart
        type='bar'
        width={600}
        height={200}
        series={[
            {
                name:'Company1',
                data:[100,200,300,400]
            },
            {
                 name:'Company2',
                 data:[150,450,350,450]
            }
        ]}
        options={{
            colors:("#000", '')
        }}
        />
        </div>
    </div>
  )
}

export default TotalBalanceChart