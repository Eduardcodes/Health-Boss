'use client';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/lib/store/store';
import { averageCaloriesBurnedPrevSessions } from './utils/statSettersExercise';
import { ChangeEvent } from 'react';

export default function AverageBurnedCalories() {
  const userData = useUserStore.getState().data;
  const [period, setPeriod] = useState(7);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    console.log('USER DATA IN STATS', userData);
    if (userData?.exerciseHistory) {
      const exerciseHistory = userData.exerciseHistory;
      const { calorieCount } = averageCaloriesBurnedPrevSessions(
        exerciseHistory,
        period
      );

      setAverage(calorieCount);
      console.log('BURNED CALORIES', calorieCount);
    }
  }, [userData, period]);

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    setPeriod(Number(e.target.value));
  }

  return (
    <div className="cardBackground flex flex-col gap-2">
      <h6 className="text-lg font-bold">💪 Your average calories burned</h6>
      <div className="flex justify-between items-center text-base">
        <h5 className="flex-1">Over the last:</h5>
        <div className="flex flex-1 gap-2 items-center">
          <select className="buttonSelect" onChange={(e) => handleChange(e)}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
          </select>{' '}
          <p className="">exercises</p>
        </div>
      </div>
      <div>
        <p className="font-semibold text-mainGreen">
          {average.toFixed(2)} Kcal
        </p>
      </div>
    </div>
  );
}
