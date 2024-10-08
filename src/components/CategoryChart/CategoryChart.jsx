import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import initialexpenses from '../../initialexpenses.json'

const CategoryChart = () => {
  const [expenses, setExpenses] = useState(initialexpenses);

  useEffect(() => {
    const localExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (localExpenses) {
      setExpenses(localExpenses);
    } else {
      setExpenses(initialexpenses);
    }

  }, []);



    const [chartData,setChartData] = useState({
       series:[],
       options:{
        chart:{
          type: 'pie',
        },
        labels:[], //Categories will go in here
        title:{
          text: 'Total Amount Spent by Category',
          align: 'center',
        },
       }
    });

    //function to aggregate expenses by category

    const calculateTotalPerCategory = ()=>{
         const categoryTotals ={};
         console.log(expenses)
         expenses.forEach(expense =>{
          if(categoryTotals[expense.category]){
            categoryTotals[expense.category]+= +expense.amount;
          } else{
            categoryTotals[expense.category]= +expense.amount;
          }
         });
         return categoryTotals;
    }

    useEffect(()=>{
      const totals= calculateTotalPerCategory();
      const categories = Object.keys(totals); // Categories
      const seriesData = Object.values(totals); //Totals for each category
      //update chart data
      setChartData({
        ...chartData,
        series: seriesData,
        options:{
          ...chartData.options,
            labels: categories
        }
      });
    }, [expenses]);



  return (
    <div className='chart'>
        <Chart
        series={chartData.series}
        options={chartData.options}
        type='pie'
        width='500'
        />
    </div>
  )
}

export default CategoryChart