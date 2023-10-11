export type User = {
  id: string;
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  exerciseHistory: Exercise[];
  mealHistory: Meal[];
  createdAt: Date;
  updatedAt: Date;
};



//Meal related types
export type Meal = {
  id: string;
  ingredients: Ingredient[];
  userId: string;
  user: User;
  type?: string;
  totalCals: number;
};

export type Ingredient = {
  name: string;
  nutrients: Nutrients;
  amount: number;
};

export type Nutrients = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fibre: number;
};

export type FoodData = {
  foodId: string;
  label: string;
  nutrients: Nutrients;
  image: string;
};

//Exercise related types

export type Exercise = {
  id: string;
  activity: string;
  duration: string;
  caloriesBurned: Number;
  createdAt: Date;
  userId: string;
  user: User;
};

export type CleanActivityData = {
  activity: string;
  caloriesPerHour: number;
};

export type DirtyActivityData = {
  name: string;
  calories_per_hour: number;
  duration_minutes: number;
  total_calories: number;
};
