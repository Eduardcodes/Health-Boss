'use client'
import {useState} from 'react'
import Modal from "../ed/components/Modal"
import MealList from '@/lib/components/mealList'
import MealCard from '@/lib/components/mealCard'
import AddMeal from '@/lib/components/addMeal'
import AddMealEntry from '@/lib/components/addMealEntry'
import SearchPopup from '@/lib/components/search'
import { FoodData, Meal } from '@/lib/types'

export default function MealsPage() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [addMealBox, setAddMealBox] = useState(false)
  const [selectedFoods, setSelectedFoods] = useState<FoodData[]>([])
  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([])
  
  return (
  <div>
   <button onClick={()=> setAddMealBox(!addMealBox)}>{!addMealBox? 'Add Meal' : 'Cancel'}</button>

   {addMealBox && <AddMeal setDisplayedMeals={setDisplayedMeals} setModalOpen={setModalOpen}
    selectedFoods={selectedFoods} setAddMealBox={setAddMealBox}/>} 

   <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
    <SearchPopup setModalOpen={setModalOpen} setSelectedFoods={setSelectedFoods}></SearchPopup>
   </Modal>
   
   {displayedMeals && <MealList displayedMeals={displayedMeals} setDisplayedMeals={setDisplayedMeals}/>}
  </div>
  )
}
