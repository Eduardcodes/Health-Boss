'use client'

import {FormEvent, useState} from 'react'
import { FoodData, Ingredient } from '../types'
import AddMealEntry from './addMealEntry'

export default function AddMeal() {
  
  const [selectedIngredients, setSelectedFoods] = useState<FoodData[]>([])
  const [type, setType] = useState('Breakfast')
  
  async function submitHandler (e: FormEvent) {
    let dataNamesAndAmounts: any = {}
    const formElement = e.currentTarget as HTMLFormElement
    const formData = new FormData(formElement)
    for(const pair of formData.entries()){
      dataNamesAndAmounts[pair[0]] = pair[1]
    }
    let totalCalsThisMeal = 0
    let ingredientsList: Ingredient[] = []
    for(const ingName in dataNamesAndAmounts) {
      for(let i=0; i<selectedIngredients.length; i++) {
        if(ingName === selectedIngredients[i].label) {

          let nutrients = selectedIngredients[i].nutrients
          let amount: number = dataNamesAndAmounts[ingName]
          totalCalsThisMeal += nutrients.calories*(amount/100)
          ingredientsList.push({
            name: ingName,
            nutrients: {
              calories: nutrients.calories*(amount/100),
              protein: nutrients.protein*(amount/100),
              fat: nutrients.fat*(amount/100),
              carbs: nutrients.carbs*(amount/100),
              fibre: nutrients.fibre*(amount/100)
            },
            amount: amount
          })
        }
      }
      const request = await fetch('/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ingredients: ingredientsList,
          userId: 'placeholder', //TODO REDUX FOR USER ID
          type: type,
          totalCals: totalCalsThisMeal
        })
      })
      const newMeal = await request.json()
      //TODO lift state and set displayed meals 
    }
  }
  return (
    <div>
       <select name='Meal-type' 
       defaultValue={type}
       onChange={(e)=> setType(e.target.value)}>
          <option value='Breakfast'>Breakfast</option>
          <option value='Lunch'>Lunch</option>
          <option value='Dinner'>Dinner</option>
          <option value='Snack'>Snack</option>
        </select>
      <form onSubmit={submitHandler}>
        {selectedIngredients.map((ingredient: FoodData) => (<AddMealEntry ingredient={ingredient}/>))}
        <button type='submit'>Confirm</button>
      </form>
    </div>
  )
}
