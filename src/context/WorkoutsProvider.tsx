/* 'use client';
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

export default WorkoutsProvider; */

'use client';
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IGymSteps } from "@/types/gymSteps.type";

// 1. Define the Context interface
export interface WorkoutsContextType {
  todaysPlan: IGymSteps[];
  setTodaysPlan: Dispatch<SetStateAction<IGymSteps[]>>;
  saveForLater: IGymSteps[];
  setsaveForLater: Dispatch<SetStateAction<IGymSteps[]>>;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

// 2. Pass the interface to createContext (with undefined as default)
export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  // 3. Type state arrays with IGymSteps[] instead of []
  const [todaysPlan, setTodaysPlan] = useState<IGymSteps[]>([]);
  const [saveForLater, setsaveForLater] = useState<IGymSteps[]>([]);

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

  // Wrap all stats data with obj
  const sharedData: WorkoutsContextType = {
    todaysPlan,
    setTodaysPlan,
    saveForLater,
    setsaveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  // Share through provider
  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
