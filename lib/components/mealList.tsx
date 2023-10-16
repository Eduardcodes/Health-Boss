'use client';
import MealCard from './mealCard';
import { Meal } from '../types';
import { useEffect } from 'react';
import { useUserStore } from '../store/store';

export default function MealList({
  displayedMeals,
  setDisplayedMeals,
}: {
  displayedMeals: Meal[];
  setDisplayedMeals: Function;
}) {

  const userData = useUserStore(state => state.data)

  useEffect(() => {
    getMeals().then((res) => setDisplayedMeals(res));
  }, []);
  console.log(userData)

  async function getMeals() {
    const res: Response = await fetch(`/api/meals/${userData?.id}`);
    const data = await res.json();
    const allMeals = data.allMeals;

    if (Array.isArray(allMeals)) return allMeals;
    else return null;
  }
  console.log(displayedMeals)
  return (
    <div>
      {displayedMeals &&
        displayedMeals.map((meal: Meal) => {
          return (
            <MealCard
              key={meal.id}
              mealData={meal}
              setDisplayedMeals={setDisplayedMeals}
            ></MealCard>
          );
        })}
    </div>
  );
}
