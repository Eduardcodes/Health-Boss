'use client'
import { Meal } from "../types"
import {useState} from 'react'

export default function MealCard ({mealData, setDisplayedMeals}:{mealData: Meal, setDisplayedMeals: Function}) {
  
  const [details, setDetails] = useState(false)

  async function handleDelete(id: string){
    const res: Response = await fetch('/api/meals', {
      method: 'DELETE',
      headers: {
        'Contet-Type':'application/json'
      },
      body: JSON.stringify({id: id})
    })
    const deletedItem = await res.json() as Meal
    if(deletedItem.id) {
      setDisplayedMeals((prev: Meal[]) => {
        for(let i=0; i<prev.length; i++){
          if(prev[i].id === deletedItem.id) {
            prev.splice(i,1)
          }
        }
        return [...prev]
      })
    } else {
      console.log('ITEM FAILED TO DELETE')
    }
    //TODO for above, create real alert

  }

  return (
    <div onClick={()=> setDetails(!details)}>
      <div>
        <div>
          <h3>{mealData.type}</h3>
          <p>Calories: {mealData.totalCal}</p>
        </div>
        <button onClick={() => handleDelete(mealData.id)}>
          X
        </button>
      </div>
    {details && <ul>
        {mealData.ingredients.map((ingredient) => {
          return (
          <>
          <li>{ingredient.name}</li>
          <li>{ingredient.nutrients.calories}</li>
          <li>{ingredient.nutrients.protein}</li>
          <li>{ingredient.nutrients.carbs}</li>
          <li>{ingredient.nutrients.fibre}</li>
          <li>{ingredient.nutrients.fat}</li>
          </>
          )
        })}
      </ul>
    }
    </div>
  )
}

