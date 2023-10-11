'use client';
import { Meal } from '../types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const close = (
  <FontAwesomeIcon icon={faClose} size="2xl" style={{ color: '#2de86b' }} />
);

export default function MealCard({
  mealData,
  setDisplayedMeals,
}: {
  mealData: Meal;
  setDisplayedMeals: Function;
}) {
  const [details, setDetails] = useState(false);

  async function handleDelete(id: string) {
    const res: Response = await fetch('/api/meals', {
      method: 'DELETE',
      headers: {
        'Contet-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    });
    const data = await res.json();
    const { deletedItem } = data;
    console.log('DELETED ITEM', deletedItem);
    if (deletedItem.id) {
      setDisplayedMeals((prev: Meal[]) => {
        for (let i = 0; i < prev.length; i++) {
          if (prev[i].id === deletedItem.id) {
            prev.splice(i, 1);
          }
        }
        return [...prev];
      });
    } else {
      console.log('ITEM FAILED TO DELETE');
    }
    //TODO for above, create real alert
  }

  return (
    <div className="cardBackground " onClick={() => setDetails(!details)}>
      <div className="">
        <div className="flex justify-between items-center text-base font-semibold ">
          <h3 className=" font-semibold rounded-lg p-2 px-5 border-2 border-mainGreen shadow-lg">
            {mealData.type}
          </h3>
          <p className="">11/10/2023</p>
        </div>

        <div className="flex justify-between my-5 font-bold items-center">
          <p>Calories: </p>
          <p>{mealData.totalCals} cals</p>
          <button
            className="p-3  rounded-lg mt-2 text-base   font-bold"
            onClick={() => handleDelete(mealData.id)}
          >
            {close}
          </button>
        </div>
      </div>

      {details && (
        <ul>
          {mealData.ingredients.map((ingredient) => {
            return (
              <>
                <li>
                  {ingredient.name} {ingredient.amount}
                </li>
                <li>
                  Calories:{' '}
                  {ingredient.nutrients.calories * (ingredient.amount / 100)}
                </li>
                <li>
                  Protein:{' '}
                  {ingredient.nutrients.protein * (ingredient.amount / 100)}
                </li>
                <li>
                  Carbohydrates:
                  {ingredient.nutrients.carbs * (ingredient.amount / 100)}
                </li>
                <li>
                  Fibre:{ingredient.nutrients.fibre * (ingredient.amount / 100)}
                </li>
                <li>
                  Fat:{ingredient.nutrients.fat * (ingredient.amount / 100)}
                </li>
              </>
            );
          })}
        </ul>
      )}
    </div>
  );
}
