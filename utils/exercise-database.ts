import { CleanActivityData, DirtyActivityData } from '../lib/types';

export const getActivitiesList = async () => {
  const res: Response = await fetch(
    'https://api.api-ninjas.com/v1/caloriesburnedactivities',
    {
      method: 'GET',
      headers: {
        'X-Api-Key': 'M3E6uLa4vo3d5xnU6I5/YQ==P8C5PsirDGOxDnro',
      },
    }
  );
  const data = await res.json();
  const arrayOfActivities: string[] = data.activities;
  console.log(arrayOfActivities);
  return arrayOfActivities;
};

export const getActivityDetails = async (activity: string, weight?: number) => {
  let arrayOfActivities = [];

  console.log('ACTIVITY', `${activity}`);
  if (weight) {
    const res: Response = await fetch(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}&weight=${weight}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'M3E6uLa4vo3d5xnU6I5/YQ==P8C5PsirDGOxDnro',
        },
      }
    );
    arrayOfActivities = await res.json();
  } else {
    const res: Response = await fetch(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'M3E6uLa4vo3d5xnU6I5/YQ==P8C5PsirDGOxDnro',
        },
      }
    );
    arrayOfActivities = (await res.json()) as DirtyActivityData[];
    console.log('ARRAY IN ELSE STATEMENT', arrayOfActivities);
  }
  console.log('ARRAOY OUTSIDE ELSE STATEMENT', arrayOfActivities);
  const cleanData: CleanActivityData[] = arrayOfActivities.map(
    (activity: DirtyActivityData) => {
      return {
        activity: activity.name,
        caloriesPerHour: activity.calories_per_hour,
      };
    }
  );
  console.log('CLEAN DATA', cleanData);
  return cleanData;
};

export const getAutoFillSuggestions = (
  currentInputValue: string,
  activitiesList: string[]
) => {
  const firstToUpperCase =
    currentInputValue.charAt(0).toUpperCase() + currentInputValue.slice(1);
  const filteredArr = activitiesList.filter(
    (activity) =>
      activity.includes(firstToUpperCase) && activity[0] === firstToUpperCase[0]
  );
  return filteredArr;
};
