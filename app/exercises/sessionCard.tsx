'use client'
import { Session } from "@/lib/types";
import { useState } from "react";

export default function SessionCard(
  {session, setDisplayedSessions}:
  {session: Session, setDisplayedSessions: React.Dispatch<React.SetStateAction<Session[]>>}) 
  {

    const [details, setDetails] = useState(false)

    async function handleDelete(id: string){
      
      setDisplayedSessions((prev: Session[]) => {
        for(let i=0; i<prev.length; i++){
          if(prev[i].id === id) {
            prev.splice(i,1)
          }
        }
        return [...prev]
      })
      const res: Response = await fetch('/api/exercises', {
        method: 'DELETE',
        headers: {
          'Contet-Type':'application/json'
        },
        body: JSON.stringify({id: id})
      })
      const data = await res.json()
      const {deletedItem} = data
      console.log('DELETED ITEM',deletedItem)
      //TODO for above, create real alert
    }
    
    return (
      <div >
      <div>
        <div>
          <h3>{session.time}</h3>
          <p>Total Calories Burned: {session.caloriesBurned}</p>
        </div>
        <button onClick={() => handleDelete(session.id)}>
          X
        </button>
      </div>
    {details && <ul>
        {session.activities.map((activity) => {
          return (
          <>
          <li>{activity.activity} {activity.duration} minutes</li>
          <li>Calories Burned: {activity.calsBurned}</li>
          </>
          )
        })}
      </ul>
    }
    <button onClick={()=> setDetails(!details)}>{details ? 'Fewer Details' : 'Show More Details'}</button>
    </div>
    )
}
