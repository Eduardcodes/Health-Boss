'use client';
import { FormEvent, useState } from 'react';
import { FoodData, Ingredient, Meal } from '../types';
import AddMealEntry from './addMealEntry';
import { useUserStore } from '../store/store';
import { User } from '../types';

export default function AddMeal({
  selectedFoods,
  setSelectedFoods,
  setAddMealBox,
  setModalOpen,
  setDisplayedMeals,
}: {
  selectedFoods: FoodData[];
  setAddMealBox: React.Dispatch<React.SetStateAction<boolean>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedMeals: React.Dispatch<React.SetStateAction<Meal[]>>;
  setSelectedFoods: React.Dispatch<React.SetStateAction<FoodData[]>>;
}) {
  const userData = useUserStore((state) => state.data);
  const setUser = useUserStore((state) => state.setUser);
  const [type, setType] = useState('Breakfast');

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    let dataNamesAndAmounts: any = {};
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    for (const pair of formData.entries()) {
      dataNamesAndAmounts[pair[0]] = pair[1];
    }

    let totalCalsThisMeal = 0;
    let ingredientsList: Ingredient[] = [];
    delete dataNamesAndAmounts['Meal-type'];

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

      setSelectedFoods([]);
      console.log('INGREDIENTS LIST', ingredientsList);
      console.log('TOTAL CALS', totalCalsThisMeal);
    }
    const response = await fetch('/api/meals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: ingredientsList,
        userId: userData?.id, //TODO REDUX FOR USER ID
        type: type,
        totalCals: totalCalsThisMeal,
      }),
    });
    const newMeal = await response.json();
    setDisplayedMeals((prev: Meal[]) => [...prev, newMeal]);
    setAddMealBox(false);
    if (userData) {
      const newUser: User = {
        ...userData,
        mealHistory: [...userData.mealHistory, newMeal],
      };
      setUser(newUser);
    }
  }
  return (
    <div className="mx-4">
      <form className="mt-5" onSubmit={submitHandler}>
        {selectedFoods.map((ingredient: FoodData) => (
          <AddMealEntry key={ingredient.foodId} ingredient={ingredient} />
        ))}
        <div
          className="inputLogin text-center"
          onClick={() => setModalOpen(true)}
        >
          Add food item 🍌
        </div>

        <div className="flex justify-around mt-5 gap-2">
          <div className="flex-1">
            <select
              className="buttonSelect w-full"
              name="Meal-type"
              defaultValue={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>

          <div className="flex-1">
            <button
              name="confirm"
              className={`buttonConfirm w-full`}
              type="submit"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
