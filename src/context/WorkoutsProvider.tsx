'use client';
import { createContext, ReactNode, useState } from "react";

// create context
export const WorkoutsContext = createContext({});

const WorkoutsProvider = ({ children }: {children: ReactNode}) => {
  // all stats
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saveForLater, setsaveForLater] = useState([]);

  // wrap all stats data with obj
  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    saveForLater,
    setsaveForLater,
  };

  // share through provider
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
