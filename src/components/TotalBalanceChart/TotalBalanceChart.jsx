import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import initialexpenses from '../../initialexpenses.json'

const TotalBalanceChart = () => {
   //const [chartData, setChartData] = useState({series:[],options:{}});
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
       series:[
        {
          name: 'Total Spent',
          data: [] //This will hold total amounts per category
        }
       ],
       options:{
        chart:{
          type: 'bar',
          height: 350
        },
        plotOptions:{
          bar:{
            horizontal:false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels:{
          enabled: false
        },
        stroke:{
          show:true,
          width:2,
          colors:['transparent']
        },
        xaxis:{
          categories:[]//categories will go in here
        },
        yaxis:{
          title:{
            text:'Amount Spent (FCFA)'
          }
        },
        fill:{
          opacity:1
        },
        title:{
          text: 'Total Amount Spent by Category',
          align: 'center',
          style:{
            fontSize: '20px',
            fontWeight: 'bold'
          }
        },
        tooltip:{
          y:{
            formatter: function(val){
              return `FCFA ${val}`
            }
          }
        }
       }
    })

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
        series:[
          {
            name: 'Total Spent',
            data: seriesData
          }
        ],
        options:{
          ...chartData.options,
          xaxis:{
            categories: categories
          }
        }
      });
    }, [expenses]);

  /* useEffect(()=>{
    const expenseAmount = initialexpenses.map((expense)=>(expense.amount));
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
   },[])*/

  return (
    <div className='chart-container'>
        <div className='chart-wrapper'>
        <Chart
        type='bar'
        
        height={230}
        series={chartData.series}
        options={chartData.options}
        />
        </div>
    </div>
  )
}

export default TotalBalanceChart