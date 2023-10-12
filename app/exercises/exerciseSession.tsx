'use client';
import { useState, FormEvent } from 'react';
import { CleanActivityData, NewSessionList, Session } from '@/lib/types';
import SessionEntry from './sessionEntry';

export default function ExerciseSession({
  setModalOpen,
  setAddSessionBox,
  setDisplayedSessions,
  selectedActivities,
  setSelectedActivities,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAddSessionBox: React.Dispatch<React.SetStateAction<boolean>>;
  setDisplayedSessions: React.Dispatch<React.SetStateAction<Session[]>>;
  selectedActivities: CleanActivityData[];
  setSelectedActivities: React.Dispatch<
    React.SetStateAction<CleanActivityData[]>
  >;
}) {
  const [time, setTime] = useState('morning');

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    let activityNamesAndDurations: any = {};
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    for (const pair of formData.entries()) {
      activityNamesAndDurations[pair[0]] = pair[1];
    }
    let calsBurnedThisSesssion = 0;
    let activityList: NewSessionList[] = [];
    for (const activityName in activityNamesAndDurations) {
      for (let i = 0; i < selectedActivities.length; i++) {
        if (activityName === selectedActivities[i].activity) {
          let duration: number = activityNamesAndDurations[activityName];
          calsBurnedThisSesssion +=
            selectedActivities[i].caloriesPerHour * (duration / 60);
          activityList.push({
            activity: activityName,
            calsBurned: selectedActivities[i].caloriesPerHour * (duration / 60),
            duration: duration,
          });
        }
      }
    }
    const response = await fetch('/api/exercises', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activities: activityList,
        caloriesBurned: calsBurnedThisSesssion,
        time: time,
        userId: '652560db8f962632ac04d15f', //TODO REDUX FOR USER ID
      }),
    });
    const { newSession } = await response.json();
    console.log(newSession);
    setDisplayedSessions((prev) => [...prev, newSession]);
    setAddSessionBox(false);
  }
  return (
    <div>
      <select
        name="Meal-type"
        defaultValue={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="Breakfast">Early Morning</option>
        <option value="Lunch">Late Morning</option>
        <option value="Dinner">Afternoon</option>
        <option value="Snack">Evening</option>
      </select>

      <form onSubmit={submitHandler}>
        {selectedActivities.map((activity: CleanActivityData, i: number) => (
          <SessionEntry
            key={i}
            setSelectedActivities={setSelectedActivities}
            activity={activity}
          />
        ))}
        <button type="button" onClick={() => setModalOpen(true)}>
          ADD THING
        </button>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}
