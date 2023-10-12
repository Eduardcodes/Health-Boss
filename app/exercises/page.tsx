'use client';
import React from 'react';
import SessionList from './sessionList';
import ExerciseSession from './exerciseSession';
import SearchExercise from './searchExercise';
import ModalExercise from '@/app/ed/components/ModalExercise';
import { useState } from 'react';
import { CleanActivityData, Session } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

const back = (
  <FontAwesomeIcon
    icon={faAngleDoubleLeft}
    size="2xl"
    style={{ color: '#2de86b' }}
  />
);

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
      <section className="h-20 flex justify-between items-center  mx-5 mt-10">
        <button onClick={() => setAddSessionBox(!addSessionBox)}>{back}</button>
        <h4 className="font-bold">My Exercises</h4>
        <Link href="/profile">
          <Image
            src="/profile.jpg"
            alt="exercise icon"
            width={50}
            height={50}
            className="item-center text-mainWhite rounded-full border-2 border-mainGreen"
          />
        </Link>
      </section>

      {addSessionBox ? (
        <button onClick={() => handleCancel()}>Cancel</button>
      ) : (
        <button
          className="buttonAddActivityOrFood"
          onClick={() => setAddSessionBox(true)}
        >
          Add New Exercise
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
      <ModalExercise modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SearchExercise
          setModalOpen={setModalOpen}
          setSelectedActivities={setSelectedActivities}
        />
      </ModalExercise>

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
