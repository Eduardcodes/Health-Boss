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
    <div className="flex flex-col w-screen px-5">
      <div>
        <form>
          <input
            className="inputLogin"
            type="text"
            name="search"
            placeholder="Search foods..."
            onChange={(e) => handleChange(e)}
          ></input>
        </form>
      </div>
      {foods &&
        foods.map((food, index) => (
          <p
            className="text-base text-center"
            key={index}
            onClick={() => handleSelect(food)}
          >
            {food}
          </p>
        ))}
      {searchDisplay &&
        searchDisplay.map((food) => {
          return (
            <div
              className={`bg-darkBlack rounded-lg my-3 max-w-sm shadow-md p-4 flex w-full `}
              key={food.foodId}
            >
              {/* <img src={`${food.image}`} alt={food.label} /> */}
              <div className="max-w-2xl">
                <Image
                  src={food.image}
                  width={70}
                  height={70}
                  alt={food.label}
                  className="rounded-full self-center text-xs"
                />
                <h2 className="font-bold text-lg border-b-2 border-mainGreen">
                  {food.label}
                </h2>
              </div>
              <div>
                <div className="text-base">
                  <h3 className="font-semibold">Nutrition Data (Per 100g):</h3>
                  <p>Calories: {food.nutrients.calories}</p>
                  <p>Protein: {food.nutrients.protein}</p>
                  <p>Carbohydrates: {food.nutrients.carbs}</p>
                  <p>Fat: {food.nutrients.fat}</p>
                  <p>Fibre: {food.nutrients.fibre}</p>
                </div>
              </div>
              <button
                className="bg-lightGreen text-mainBlack rounded-full w-4 h-4"
                onClick={() => handleAdd(food)}
              >
                +
              </button>
            </div>
          );
        })}
    </div>
  );
}
