import { useUserStore } from '@/lib/store/store'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, registerables } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { useEffect, useState } from 'react';
import moment from 'moment';
import { getChartData } from './utils/statSettersExercise';
import { ChartData } from '@/lib/types';

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

export default function MealsChart() {
  
  const userData = useUserStore(state => state.data)
  const [chartData, setChartData] = useState<ChartData>()
  const [option, setOption] = useState('Total')

  
  useEffect(()=>{
    if(userData) setChartData(getChartData(option, userData.exerciseHistory ))
  },[option])

  return (
    chartData && <div>
      Exercise Chart
      Display <select defaultValue='Total' onChange={(e)=>setOption(e.currentTarget.value)}>
        <option>Total</option>
        <option>Early Morning</option>
        <option>Late Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
      <Chart 
      type='bar' 
      data={{
        labels: chartData.xAxis,
        datasets: [{
          label: 'Kcal Consumed',
          data: chartData.yAxis,
          borderWidth: 1
        }]
      }}
      options= {{
      scales: {
        y: {
          beginAtZero: true
        }
      }
      }}
       />
    </div>
  )
}
