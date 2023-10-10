'use client';
import { Ingredient, FoodData } from '../types';
import { useState } from 'react';

export default function AddMealEntry({ ingredient }: { ingredient: FoodData }) {
  const [amount, setAmount] = useState(100);

  return (
    <div>
      {ingredient.label}:
      <input
        name={ingredient.label}
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      ></input>{' '}
      grams
      <div>
        <p>
          Calories:{' '}
          {(ingredient.nutrients.calories * (amount / 100)).toFixed(2)}
        </p>
        <p>
          Protein: {(ingredient.nutrients.protein * (amount / 100)).toFixed(2)}
        </p>
        <p>
          Carbohydrates:{' '}
          {(ingredient.nutrients.carbs * (amount / 100)).toFixed(2)}
        </p>
        <p>Fat: {(ingredient.nutrients.fat * (amount / 100)).toFixed(2)}</p>
        <p>Fibre: {(ingredient.nutrients.fibre * (amount / 100)).toFixed(2)}</p>
      </div>
    </div>
  );
}
