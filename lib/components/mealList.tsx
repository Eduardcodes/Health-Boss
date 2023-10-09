'use client'
import MealCard from "./mealCard"
import { Meal } from "../types"
import { useEffect } from "react"

export default function MealList({displayedMeals, setDisplayedMeals}:{displayedMeals:Meal[], setDisplayedMeals: Function}) {

  
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
