import React from 'react'
import Chart from 'react-apexcharts'

const CategoryChart = () => {
  return (
    <div>
        <Chart
        type='pie'
        width={200}
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
  )
}

export default CategoryChart