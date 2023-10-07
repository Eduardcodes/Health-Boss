export type Nutrients = {
    calories: number
    protein: number
    fat: number
    carbs: number
    fibre: number
}

export type FoodData = {
    foodId: string
    label: string
    nutrients: Nutrients
    image: string
}

export type CleanActivityData = {
    activity: string
    caloriesPerHour: number
}

export type DirtyActivityData = {
    name: string
    calories_per_hour: number
    duration_minutes: number
    total_calories: number
}