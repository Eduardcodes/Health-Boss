'use client';
import MealCard from './mealCard';
import { Meal } from '../types';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function MealList({
  displayedMeals,
  setDisplayedMeals,
}: {
  displayedMeals: Meal[];
  setDisplayedMeals: Function;
}) {
  const session = useSession();

  useEffect(() => {
    if(session?.data?.user.id !== undefined)
    getMeals().then((res) => setDisplayedMeals(res));
  }, [session?.data?.user.id]);

  async function getMeals() {
    const res: Response = await fetch(`/api/meals/${session?.data?.user.id}`);
    const data = await res.json();
    const allMeals = data.allMeals;

    if (Array.isArray(allMeals)) return allMeals;
    else return null;
  }

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
