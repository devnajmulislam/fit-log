'use client';
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { IGymSteps } from "@/types/gymSteps.type";

// interface for Context
export interface WorkoutsContextType {
  todaysPlan: IGymSteps[];
  setTodaysPlan: Dispatch<SetStateAction<IGymSteps[]>>;
  saveForLater: IGymSteps[];
  setsaveForLater: Dispatch<SetStateAction<IGymSteps[]>>;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
}

// Create Context
export const WorkoutsContext = createContext<WorkoutsContextType | undefined>(undefined);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  // type state arrays as IGymSteps[]
  const [todaysPlan, setTodaysPlan] = useState<IGymSteps[]>([]);
  const [saveForLater, setsaveForLater] = useState<IGymSteps[]>([]);
// remove from today's plan
  const removeFromPlan = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
  };
// remove from plan
  const removeFromSaved = (id: number) => {
    setsaveForLater((prev) => prev.filter((item) => item.id !== id));
  };
// remove as mark as done 
  const markAsDone = (id: number) => {
    setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
  };

  const sharedData: WorkoutsContextType = {
    todaysPlan,
    setTodaysPlan,
    saveForLater,
    setsaveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;