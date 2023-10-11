'use client'
import { CleanActivityData, Session } from "@/lib/types"
import { useState, useEffect } from "react"
import { FormEvent } from "react"
import { getAutoFillSuggestions, getActivityDetails, getActivitiesList } from "@/utils/exercise-database"

export default function SearchExercise(
  {setSelectedActivities, setModalOpen}:
  {setSelectedActivities: React.Dispatch<React.SetStateAction<CleanActivityData[]>>,
  setModalOpen:React.Dispatch<React.SetStateAction<boolean>>}) {

  const [allActivities, setAllActivities] = useState<string[]>([])
  const [options, setOptions] = useState<string[]>([])
  const [searchDisplay, setSearchDisplay] = useState<CleanActivityData[]>([])

  useEffect(()=>{
    getAllActivities()
  }, [])

  async function getAllActivities(){
    const list = await getActivitiesList() as string[]
    console.log(list)
    setAllActivities(list)
  }
  
  async function handleChange (e: React.ChangeEvent<HTMLInputElement>) {
    const activitiesList =  getAutoFillSuggestions(e.target.value, allActivities)
    console.log(activitiesList)
    setOptions(activitiesList)
  }
  async function handleSelect(activity: string) {
    const activityData = await getActivityDetails(activity, 160) //TODO REDUX FOR USER WEIGHT
    console.log('SELECT', activityData)
    setSearchDisplay(activityData)
  }
  async function handleSubmit(e: FormEvent<HTMLInputElement>) {
    e.preventDefault()
    const activityData = await getActivityDetails(e.currentTarget.value, 160)  //TODO REDUX FOR USER WEIGHT
    setSearchDisplay(activityData)
  }
  function handleAdd(food: CleanActivityData) {
    setSelectedActivities((prev: CleanActivityData[]) => [...prev, food])
    setModalOpen(false)
  }

  return (
    <div>
      <div>
        <form >
          <input type="text" name="search" placeholder="Search foods..." 
          onChange={(e)=> handleChange(e)}></input>
        </form>
      </div>
      {options && options.map(option => <p onClick={()=> handleSelect(option)}>{option}</p>)}
      {searchDisplay && searchDisplay.map(activity => {
        return (
          <div>
            <div>
              <h2>{activity.activity}</h2>
              <h3>{activity.caloriesPerHour}</h3>
            </div>
            <button onClick={()=> handleAdd(activity) }>+</button>
            </div>
            )
            })}
          </div>
    )
}
