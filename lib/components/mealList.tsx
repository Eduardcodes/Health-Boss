'use client'
import MealCard from "./mealCard"
import { Meal } from "../types"
import { useEffect,useState } from "react"

export default function mealList() {

  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([])
  
  useEffect(()=> {

    getMeals().then(res => setDisplayedMeals(res))

  }, [])

  async function getMeals() {
    const res: Response = await fetch('/api/meals')
    const allMeals = await res.json() as Meal[]
    return allMeals
  }
  return (
    <div>
      {displayedMeals.map((meal: Meal)=>{
        return <MealCard mealData={meal} setDisplayedMeals = {setDisplayedMeals}></MealCard>
      })}
    </div>
  )
}
