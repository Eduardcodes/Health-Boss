'use client';
import React from 'react';
import SessionList from './sessionList';
import ExerciseSession from './exerciseSession';
import SearchExercise from './searchExercise';
import Modal from '@/app/ed/components/Modal';
import { useState } from 'react';
import { CleanActivityData, Session } from '@/lib/types';
import Image from 'next/image';

export default function ExercisesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [addSessionBox, setAddSessionBox] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<
    CleanActivityData[]
  >([]);
  const [displayedSessions, setDisplayedSessions] = useState<Session[]>([]);

  async function handleCancel() {
    setSelectedActivities([]);
    setAddSessionBox(false);
  }

  return (
    <div className="sectionMainPages">
      {addSessionBox ? (
        <button onClick={() => handleCancel()}>Cancel</button>
      ) : (
        <button onClick={() => setAddSessionBox(true)}>
          Log New Exercise Session
        </button>
      )}

      {addSessionBox && (
        <ExerciseSession
          setDisplayedSessions={setDisplayedSessions}
          setModalOpen={setModalOpen}
          selectedActivities={selectedActivities}
          setSelectedActivities={setSelectedActivities}
          setAddSessionBox={setAddSessionBox}
        />
      )}
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SearchExercise
          setModalOpen={setModalOpen}
          setSelectedActivities={setSelectedActivities}
        />
      </Modal>

      {displayedSessions && (
        <SessionList
          displayedSessions={displayedSessions}
          setDisplayedSessions={setDisplayedSessions}
        />
      )}

      <section
        className={
          !addSessionBox
            ? `cardBgPhoto flex flex-col h-28 bg-cover relative mt-3 cursor-pointer`
            : 'hidden'
        }
      >
        <div>
          <Image
            src="/images/exercise.jpg"
            alt="exercise icon"
            fill={true}
            style={{ objectFit: 'cover' }}
            className="absolute rounded-lg  opacity-40"
            priority={true}
          />
        </div>
        <div className="z-10 flex flex-col  ">
          <p className="text-lg font-bold">Ask ideas for exercises </p>
          <p className="text-lg font-bold">with our AI FitBot</p>
        </div>
      </section>
    </div>
  );
}
