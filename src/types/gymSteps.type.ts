export interface IGymSteps {
  id: number
  name: string
  image: string
  muscleGroups: string[]
  equipment: string
  difficulty: string
  duration: number
  caloriesBurned: number
  sets: number
  reps: string
  rating: number
  description: string
  instructions: string[]
}


export type TabType = "todaysPlan" | "saved";
export type SortOption = "duration" | "caloriesBurned" | "rating";