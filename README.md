# Fit Log

Fit Log is a simple gym workout management web application built with Next.js. It allows users to browse different exercises, view workout details, add exercises to today's workout plan, and save workouts for later.

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Context API
* React Toastify
* Next.js Image
* Next.js Link

## Key Features

### 1. Workout Library

The **Workout Library** displays different gym exercises in a responsive card layout. Workout data is loaded using the `getAllGymSteps()` function from `@/lib/gymSteps`.

### 2. Workout Details

Users can open a specific workout to see its complete details, including:

* Workout name
* Description
* Muscle groups
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories burned
* Rating
* Step-by-step instructions

The dynamic workout page uses the workout `id` to find and display the correct exercise.

### 3. Today's Workout Plan

Users can add workouts to their **Today's Plan**. The plan keeps track of selected exercises and shows useful summary information such as:

* Total exercises
* Total workout minutes
* Total calories

The workout plan is managed using **Context API** through `WorkoutsProvider`.

### 4. Save Workouts for Later

Users can save exercises for later instead of adding them directly to today's plan. The **My Plan** page has separate tabs for:

* Today's Plan
* Saved

Users can also remove saved workouts whenever they want.

### 5. Sort, Complete & Manage Workouts

The My Plan page provides several useful workout management features. Users can:

* Sort workouts by duration
* Sort workouts by calories
* Sort workouts by rating
* Mark today's workouts as completed
* Remove workouts from the plan
* View workout details
* Get toast messages when an action is completed

## Project Structure

Some of the main files and components used in the project:

* `app/layout.tsx` — Main layout, Navbar, Footer, Context Provider and ToastContainer
* `app/page.tsx` — Home page with Banner and Workout Library
* `work-outs/page.tsx` — Workout library page
* `work-outs/[id]/page.tsx` — Dynamic workout details page
* `my-plan/page.tsx` — Today's Plan and Saved workouts
* `components/` — Reusable UI components such as Navbar, Footer, GymCard and workout buttons
* `context/WorkoutsProvider.tsx` — Manages workout plan and saved workout state
* `lib/gymSteps.ts` — Handles workout data
* `types/gymSteps.type.ts` — TypeScript types for workout data

## About the Project

I built this project to practice building a real-world workout application with **Next.js, TypeScript, Context API, and Tailwind CSS**. While building it, I focused on working with dynamic routes, reusable components, state management, data handling, and responsive UI.