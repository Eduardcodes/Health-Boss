'use client';
import React from 'react';
import SessionList from './sessionList';
import ExerciseSession from './exerciseSession';
import SearchExercise from './searchExercise';
import ModalExercise from '@/app/modal/ModalExercise';
import { useState } from 'react';
import { CleanActivityData, ExcersizeSession } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const close = (
  <FontAwesomeIcon icon={faClose} size="2xl" style={{ color: '#292828' }} />
);

const back = (
  <FontAwesomeIcon
    icon={faAngleDoubleLeft}
    size="2xl"
    style={{ color: '#2de86b' }}
  />
);

export default function ExercisesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [addExcersizeBox, setAddExcersizeBox] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<CleanActivityData[]>([]);
  const [displayedExersizes, setDisplayedExcersizes] = useState<ExcersizeSession[]>([]);

  async function handleCancel() {
    setSelectedActivities([]);
    setAddExcersizeBox(false);
  }

  return (
    <div className="sectionMainPages">
      <section className="h-20 flex justify-between items-center  mx-5 mt-10">
        <button onClick={() => handleCancel()}>{back}</button>

        <h4 className="font-bold">My Exercises</h4>
        <Link href="/loggedin/profile">
          <Image
            src="/profile.jpg"
            alt="exercise icon"
            width={50}
            height={50}
            className="item-center text-mainWhite rounded-full border-2 border-mainGreen"
            priority={true}
          />
        </Link>
      </section>

      {addExcersizeBox ? (
        // <button onClick={() => handleCancel()}>Cancel</button>
        <button className="hidden"></button>
      ) : (
        <button
          className="buttonAddActivityOrFood"
          onClick={() => setAddExcersizeBox(true)}
        >
          Add New Exercise
        </button>
      )}

      {addExcersizeBox && (
        <ExerciseSession
          setDisplayedExcersizes={setDisplayedExcersizes}
          setModalOpen={setModalOpen}
          selectedActivities={selectedActivities}
          setSelectedActivities={setSelectedActivities}
          setAddExcersizeBox={setAddExcersizeBox}
        />
      )}
      <ModalExercise modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <SearchExercise
          setModalOpen={setModalOpen}
          setSelectedActivities={setSelectedActivities}
        />
      </ModalExercise>

      <div className={!addExcersizeBox ? `block` : 'hidden'}>
        {displayedExersizes && (
          <SessionList
            displayedExcersizes={displayedExersizes}
            setDisplayedExcersizes={setDisplayedExcersizes}
          />
        )}
      </div>

      <section
        className={
          !addExcersizeBox
            ? `cardBgPhoto flex flex-col h-28 bg-cover relative mt-3 cursor-pointer`
            : 'hidden'
        }
      >
        <div>
          <Image
            src="/images/exercise.jpg"
            alt="People doing exercises together"
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
