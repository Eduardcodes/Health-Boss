'use client';
import { useState } from 'react';
import { FoodData } from '../types';
import { getAutoFillResults, getFoodData } from '@/utils/food-database';
import Image from 'next/image';

export default function SearchPopup({
  setSelectedFoods,
  setModalOpen,
}: {
  setSelectedFoods: Function;
  setModalOpen: Function;
}) {
  const [foods, setFoods] = useState<string[]>([]);
  const [searchDisplay, setSearchDisplay] = useState<FoodData[]>([]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const foodsList = await getAutoFillResults(e.target.value);
    console.log(foodsList);
    setFoods(foodsList);
  }
  async function handleSelect(food: string) {
    const foodsWithData = await getFoodData(food);
    setSearchDisplay(foodsWithData);
  }
  function handleAdd(food: FoodData) {
    setSelectedFoods((prev: FoodData[]) => [...prev, food]);
    setModalOpen(false);
  }

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            name="search"
            placeholder="Search foods..."
            onChange={(e) => handleChange(e)}
          ></input>
        </form>
      </div>
      {foods &&
        foods.map((food) => <p onClick={() => handleSelect(food)}>{food}</p>)}
      {searchDisplay &&
        searchDisplay.map((food) => {
          return (
            <div key={food.foodId}>
              <img src={`${food.image}`} alt={food.label} />
              <div>
                <h2>{food.label}</h2>
                <p>Nutrition Data (Per 100g):</p>
                <p>Calories: {food.nutrients.calories}</p>
                <p>Protein: {food.nutrients.protein}</p>
                <p>Carbohydrates: {food.nutrients.carbs}</p>
                <p>Fat: {food.nutrients.fat}</p>
                <p>Fibre: {food.nutrients.fibre}</p>
              </div>
              <button onClick={() => handleAdd(food)}>+</button>
            </div>
          );
        })}
    </div>
  );
}
