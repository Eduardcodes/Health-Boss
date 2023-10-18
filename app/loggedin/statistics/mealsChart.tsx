import { useUserStore } from '@/lib/store/store';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  registerables,
} from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { getChartData } from './utils/statSettersMeals';
import { ChartData } from '@/lib/types';

ChartJS.register(ArcElement, Tooltip, Legend, ...registerables);

export default function MealsChart() {
  const userData = useUserStore((state) => state.data);
  const [chartData, setChartData] = useState<ChartData>();
  const [option, setOption] = useState('Total');

  useEffect(() => {
    if (userData) setChartData(getChartData(option, userData.mealHistory));
  }, [option]);

  return (
    chartData && (
      <div className="cardBackground">
        <div className="flex mb-5 items-center justify-center gap-2">
          <h1 className="flex-1 font-bold text-lg">Food Chart Display </h1>
          <select
            className="buttonSelect flex-1"
            defaultValue="Total"
            onChange={(e) => setOption(e.currentTarget.value)}
          >
            <option>Total</option>
            <option>Breakfasts</option>
            <option>Lunches</option>
            <option>Dinners</option>
            <option>Snacks</option>
          </select>
        </div>

        <Chart
          type="bar"
          data={{
            labels: chartData.xAxis,
            datasets: [
              {
                label: 'Kcal Consumed',
                data: chartData.yAxis,
                borderWidth: 1,
                backgroundColor: 'rgba(46, 255, 116, 0.2)',
                borderColor: 'rgb(21, 173, 68)',
              },
            ],
          }}
          options={{
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    )
  );
}
