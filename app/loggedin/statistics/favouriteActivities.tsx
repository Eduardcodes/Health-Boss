'use client';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/lib/store/store';
import { mostPerformedActivities } from './utils/statSettersExercise';

export default function FavouriteActivitiesList() {
  const userData = useUserStore.getState().data;
  const [activities, setActivities] = useState<string[]>([]);
  // const [displayCount, setDisplayCount] = useState(5)

  useEffect(() => {
    if (userData?.exerciseHistory) {
      const exerciseHistory = userData.exerciseHistory;
      const list = mostPerformedActivities(exerciseHistory, 5);
      setActivities(list);
      console.log('FACE ACTIVITES', list);
    }
  }, [userData]);

  return (
    <div className="cardBackground flex flex-col gap-2">
      <h6 className="text-lg font-bold ">💖 Your favourite activities!</h6>
      {activities &&
        activities.map((activity, index) => {
          return (
            <div key={index}>
              <p className="font-semibold text-base text-mainGreen my-2">
                {activity} Kcal
              </p>
            </div>
          );
        })}
    </div>
  );
}
