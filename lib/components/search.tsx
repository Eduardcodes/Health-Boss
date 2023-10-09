import { useState } from "react"
import { FoodData } from "../types"
import { getAutoFillResults, getFoodData } from "@/utils/food-database"

export default function SearchPopup(
  {setSelectedFoods}
  :{setSelectedFoods: Function}) {
  
  const [foods, setFoods] = useState<string[]>([])
  const [searchDisplay, setSearchDisplay] = useState<FoodData[]>([])
  
  async function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const foodsList = await getAutoFillResults(e.target.value)
    setFoods(foodsList)
  }
  async function handleSelect(food: string) {
    const foodsWithData = await getFoodData(food)
    setSearchDisplay(foodsWithData)
  }

  return (
    <div>
      <div>
        <form>
          <input type="text" name="search" placeholder="Search foods..." onChange={()=> handleChange}></input>
        </form>
      </div>
      {foods && foods.map(food => <p onClick={()=> handleSelect(food)}>{food}</p>)}
      {searchDisplay && searchDisplay.map(food => {
        return (
          <div>
            <img src={`${food.image}`}/>
            <div>
              <h2>{food.label}</h2>
              <p>Nutrition Data (Per 100g):</p>
              <p>Calories: {food.nutrients.calories}</p>
              <p>Protein: {food.nutrients.protein}</p>
              <p>Carbohydrates: {food.nutrients.carbs}</p>
              <p>Fat: {food.nutrients.fat}</p>
              <p>Fibre: {food.nutrients.fibre}</p>
            </div>
            <button onClick={()=> setSelectedFoods((prev: FoodData[]) => [...prev, food])}>+</button>
          </div>
        )
      })}
    </div>
  )
}
