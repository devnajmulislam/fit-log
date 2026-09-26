'use client';
import { createContext, ReactNode, useState } from "react";

// create context
export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({ children }: {children: ReactNode}) => {
  // all stats
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saveForLater, setsaveForLater] = useState([]);


  // Function to remove from Today's Plan
  const removeFromPlan = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to remove from Saved
  const removeFromSaved = (id: number) => {
    setsaveForLater((prev) => prev.filter((item) => item.id !== id));
  };

  // Function to mark as done (e.g. remove from today's plan after completing)
  const markAsDone = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
  };


  // wrap all stats data with obj
  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    saveForLater,
    setsaveForLater,
    removeFromPlan,
        removeFromSaved,
        markAsDone,
  };

  // share through provider
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
