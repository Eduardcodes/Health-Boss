'use client'
import React from 'react'
import SessionList from './sessionList'
import ExerciseSession from './exerciseSession'
import SearchExercise from './searchExercise'
import Modal from '@/app/ed/components/Modal'
import { useState } from 'react'
import { CleanActivityData, Session } from '@/lib/types'

export default function ExercisesPage() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [addSessionBox, setAddSessionBox] = useState(false)
  const [selectedActivities, setSelectedActivities] = useState<CleanActivityData[]>([])
  const [displayedSessions, setDisplayedSessions] = useState<Session[]>([])
  
  async function handleCancel() {
    setSelectedActivities([])
    setAddSessionBox(false)
  }

  return (
    <div>
      {addSessionBox ? 
      <button onClick={()=>handleCancel()}>Cancel</button>
      :
      <button onClick={()=> setAddSessionBox(true)}>Log New Exercise Session</button>}

      {addSessionBox && 
      <ExerciseSession 
        setDisplayedSessions={setDisplayedSessions} 
        setModalOpen={setModalOpen}
        selectedActivities={selectedActivities} 
        setSelectedActivities={setSelectedActivities} 
        setAddSessionBox={setAddSessionBox}
        />} 
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SearchExercise setModalOpen={setModalOpen} setSelectedActivities={setSelectedActivities}/>
      </Modal>
  
      {displayedSessions && 
      <SessionList 
        displayedSessions={displayedSessions} 
        setDisplayedSessions={setDisplayedSessions}/>}
    </div>
  )
}
