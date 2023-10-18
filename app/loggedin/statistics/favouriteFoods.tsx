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
      const mealHistory = userData.mealHistory;
      const list = mostEatenFoods(mealHistory, 5);
      setActivities(list);
      console.log('FAVE FOODS', list);
    }
  }, [userData]);

  return (
    <div className="cardBackground flexflex-col gap-2">
      <h2 className="text-lg font-bold "> 💖 Your favourite foods!</h2>
      {favouriteFoods &&
        favouriteFoods.map((food, index) => {
          return (
            <div key={index}>
              <p className="font-semibold text-base text-mainGreen my-2">
                {food}
              </p>
            </div>
          );
        })}
    </div>
  );
}
