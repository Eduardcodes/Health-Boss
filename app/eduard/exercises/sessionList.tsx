'use client'
import { Session } from "@/lib/types";
import { useEffect, useState } from "react";
import SessionCard from "./sessionCard";

export default function SessionList(
  {displayedSessions, setDisplayedSessions}:
  {displayedSessions: Session[],
   setDisplayedSessions: React.Dispatch<React.SetStateAction<Session[]>>
  }) {

  

  useEffect(()=>{
    getAllSessions()
  },[])

  async function getAllSessions() {
    const res: Response = await fetch('/api/exercises/652560db8f962632ac04d15f')
    const data = await res.json()
    const allSessions = data.allSessions as Session[]
    if(Array.isArray(allSessions)){
      setDisplayedSessions(allSessions)
    } 
    else return null
  }
  return (
       
      <div>
        {displayedSessions && displayedSessions.map((session: Session)=>{
          return <SessionCard session={session} setDisplayedSessions = {setDisplayedSessions}/>
        })}
      </div>
     
  )
}
