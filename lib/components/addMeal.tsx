'use client';

import { FormEvent, useState } from 'react';
import { FoodData, Ingredient } from '../types';
import AddMealEntry from './addMealEntry';

export default function AddMeal({
  selectedFoods,
  setAddMealBox,
  setModalOpen,
  setDisplayedMeals,
}: {
  selectedFoods: FoodData[];
  setAddMealBox: Function;
  setModalOpen: Function;
  setDisplayedMeals: Function;
}) {
  const [type, setType] = useState('Breakfast');

  async function submitHandler(e: FormEvent) {
    console.log('PLS?');
    e.preventDefault();
    let dataNamesAndAmounts: any = {};
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    for (const pair of formData.entries()) {
      dataNamesAndAmounts[pair[0]] = pair[1];
    }
    console.log('DATA NAME AND AMOUNT', dataNamesAndAmounts);
    let totalCalsThisMeal = 0;
    let ingredientsList: Ingredient[] = [];
    for (const ingName in dataNamesAndAmounts) {
      for (let i = 0; i < selectedFoods.length; i++) {
        if (ingName === selectedFoods[i].label) {
          let nutrients = selectedFoods[i].nutrients;
          let amount: number = dataNamesAndAmounts[ingName];
          totalCalsThisMeal += nutrients.calories * (amount / 100);
          ingredientsList.push({
            name: ingName,
            nutrients: {
              calories: nutrients.calories * (amount / 100),
              protein: nutrients.protein * (amount / 100),
              fat: nutrients.fat * (amount / 100),
              carbs: nutrients.carbs * (amount / 100),
              fibre: nutrients.fibre * (amount / 100),
            },
            amount: amount,
          });
        }
      }
      console.log('INGREDIENTS LIST', ingredientsList);
      console.log('TOTAL CALS', totalCalsThisMeal);
      const response = await fetch('/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: ingredientsList,
          userId: '652560db8f962632ac04d15f', //TODO REDUX FOR USER ID
          type: type,
          totalCals: totalCalsThisMeal,
        }),
      });
      const newMeal = await response.json();
      setDisplayedMeals((prev: FoodData[]) => [...prev, newMeal]);
      setAddMealBox(false);
    }
  }
  return (
    <div>
      <select
        name="Meal-type"
        defaultValue={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>

      <form onSubmit={submitHandler}>
        {selectedFoods.map((ingredient: FoodData) => (
          <AddMealEntry key={ingredient.foodId} ingredient={ingredient} />
        ))}
        <button type="button" onClick={() => setModalOpen(true)}>
          ADD THING
        </button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
