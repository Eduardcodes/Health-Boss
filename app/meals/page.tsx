import {useState} from 'react'
import Modal from "../ed/components/Modal"
import MealList from '@/lib/components/mealList'
import MealCard from '@/lib/components/mealCard'
import { FoodData, Meal } from '@/lib/types'

export default function MealsPage() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedFoods, setSelectedFoods] = useState<FoodData[]>([])
  const [displayedMeals, setDisplayedMeals] = useState<Meal[]>([])
  
  return (
   <button onClick={()=>setModalOpen(true)}>Add Meal</button>
   <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
    
   </Modal>
  )
}
