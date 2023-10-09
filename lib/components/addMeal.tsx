'use client'

import {useState} from 'react'
import { Ingredient } from '../types'

export default function addMeal() {
  
  const [selectedFoods, setSelectedFoods] = useState<Ingredient[]>([])
  

  return (
    <div>
      <button>Confirm</button>
    </div>
  )
}
