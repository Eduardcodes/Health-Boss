'use client';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/lib/store/store';
import { averageCaloriesPreviousMeals } from './utils/statSettersMeals';
import { ChangeEvent } from 'react';

export default function AverageCaloriesConsumed() {
  
  const userData = useUserStore.getState().data;
  const [period, setPeriod] = useState(7);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (userData?.mealHistory) {
      const mealHistory = userData.mealHistory
      const { calorieCount } = averageCaloriesPreviousMeals(
        mealHistory,
        period
      );
      setAverage(calorieCount);
      console.log('CONSUMENT', calorieCount)
    }
  }, [userData, period]);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setPeriod(Number(e.target.value));
  }

  return (
    <div className="flex flex-col gap-2">
      <h6 className="mx-6 text-lg ">
        Your average calories consumed over the last (choose) meals
      </h6>
      <select onChange={(e) => handleChange(e)}>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
        <option>35</option>
        <option>40</option>
      </select>{' '}
      <div className={`cardBackground my-0`}>
        <p className="font-semibold">{average.toFixed(2)} Kcal</p>
      </div>
    </div>
  );
}
