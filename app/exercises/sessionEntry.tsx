'use client';
import { useState } from 'react';
import { CleanActivityData } from '@/lib/types';

export default function SessionEntry({
  activity,
  setSelectedActivities,
}: {
  activity: CleanActivityData;
  setSelectedActivities: Function;
}) {
  const [duration, setDuration] = useState(60);

  function handleClose(activity: CleanActivityData) {
    setSelectedActivities((prev: CleanActivityData[]) => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].activity === activity.activity) {
          prev.splice(i, 1);
        }
      }
      return [...prev];
    });
  }

  return (
    <div>
      <div>
        {activity.activity}:
        <input
          name={activity.activity}
          type="number"
          onChange={(e) => setDuration(Number(e.target.value))}
        ></input>{' '}
        minutes
        <button type="button" onClick={() => handleClose(activity)}>
          X
        </button>
      </div>
      <div>
        <h3>
          Calories Burned:{' '}
          {(activity.caloriesPerHour * (duration / 60)).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
