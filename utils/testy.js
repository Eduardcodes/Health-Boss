//API call to use db method for autofill search
// import { Nutrients, FoodData } from "@/lib/types"

export const getAutoFillResults = async (currentInput) => {
  //api requires empty spaces to be replaced with %20
  const transformedInput = currentInput.replace(/\s+/g, '%20');
  const res = await fetch(
    `https://api.edamam.com/auto-complete?app_id=4fd7bfa8&app_key=%2090a867d4fdf8ecfdc3258b489ab7fbbc%09&q=${transformedInput}&limit=6`
  );
  const arrayOfFoods = await res.json();
  return arrayOfFoods;
};

export const getFoodData = async (food) => {
  const res = await fetch(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=4fd7bfa8&app_key=90a867d4fdf8ecfdc3258b489ab7fbbc&ingr=${food}&nutrition-type=cooking`
  );
  const dirtyData = await res.json();
  const arrayOfFoods = dirtyData.hints;
  const cleanedData = arrayOfFoods.map((item) => {
    const foodObj = item.food;
    return {
      foodId: foodObj.foodId,
      label: foodObj.label,
      nutrients: {
        calories: foodObj.nutrients.ENERC_KCAL
          ? Number(foodObj.nutrients.ENERC_KCAL.toFixed(2))
          : 0,
        protein: foodObj.nutrients.PROCNT
          ? Number(foodObj.nutrients.PROCNT.toFixed(2))
          : 0,
        fat: foodObj.nutrients.FAT
          ? Number(foodObj.nutrients.FAT.toFixed(2))
          : 0,
        carbs: foodObj.nutrients.CHOCDF
          ? Number(foodObj.nutrients.CHOCDF.toFixed(2))
          : 0,
        fibre: foodObj.nutrients.FIBTG
          ? Number(foodObj.nutrients.FIBTG.toFixed(2))
          : 0,
      },
      image: foodObj.image || '',
    };
  });
  return cleanedData;
};

export const getActivitiesList = async () => {
  const res = await fetch(
    'https://api.api-ninjas.com/v1/caloriesburnedactivities',
    {
      method: 'GET',
      headers: {
        'X-Api-Key': 'M3E6uLa4vo3d5xnU6I5/YQ==P8C5PsirDGOxDnro',
      },
    }
  );
  const data = await res.json();
  const arrayOfActivities = data.activities;
  return arrayOfActivities;
};
export const cleanTheData = (arrayOfActivities) => {};

export const getActivityDetails = async (activity, weight) => {
  let arrayOfActivities = [];
  if (weight) {
    const res = await fetch(
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
    const res = await fetch(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`,
      {
        method: 'GET',
        headers: {
          'X-Api-Key': 'M3E6uLa4vo3d5xnU6I5/YQ==P8C5PsirDGOxDnro',
        },
      }
    );
    arrayOfActivities = await res.json();
  }
  const cleanData = arrayOfActivities.map((activity) => {
    return {
      activity: activity.name,
      caloriesPerHour: activity.calories_per_hour,
    };
  });
  return cleanData;
};
export const getAutoFillSuggestions = (currentInputValue, activitiesList) => {
  const firstToUpperCase =
    currentInputValue.charAt(0).toUpperCase() + currentInputValue.slice(1);
  const filteredArr = activitiesList.filter(
    (activity) =>
      activity.includes(firstToUpperCase) && activity[0] === firstToUpperCase[0]
  );
  return filteredArr;
};
