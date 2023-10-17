'use client';
import { useState, useEffect } from 'react';
import { useUserStore } from '@/lib/store/store';
import { mostEatenFoods } from './utils/statSettersMeals';

export default function FavouriteFoods() {
  const userData = useUserStore.getState().data;
  const [favouriteFoods, setActivities] = useState<string[]>([]);
  // const [displayCount, setDisplayCount] = useState(5)

  useEffect(() => {
    if (userData?.mealHistory) {
      const mealHistory = userData.mealHistory
      const list = mostEatenFoods(mealHistory, 5);
      setActivities(list);
      console.log('FAVE FOODS',list)
    }
  }, [userData]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="mx-6 text-lg ">Your favourite foods!</h2>
      {favouriteFoods &&
        favouriteFoods.map((food, index) => {
          return (
            <div key={index} className={`cardBackground my-0`}>
              <p className="font-semibold">{food}</p>
            </div>
          );
        })}
    </div>
  );
}
