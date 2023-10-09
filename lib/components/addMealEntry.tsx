import { Ingredient, FoodData } from "../types"
import {useState} from 'react'

export default function AddMealEntry({ingredient}:{ingredient: FoodData}) {
  
  const [amount, setAmount] = useState(100)

  
  return (
    <div>
      <form>
        {ingredient.label}:
        <input name={ingredient.label} type='number' 
        onChange={() => (e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}>
        </input>g
      </form>
      <div>
          <p>Calories: {ingredient.nutrients.calories*(amount/100)}</p>
          <p>Protein: {ingredient.nutrients.protein*(amount/100)}</p>
          <p>Carbohydrates: {ingredient.nutrients.carbs*(amount/100)}</p>
          <p>Fat: {ingredient.nutrients.fat*(amount/100)}</p>
          <p>Fibre: {ingredient.nutrients.fibre*(amount/100)}</p>
      </div>
    </div>
  )
}
