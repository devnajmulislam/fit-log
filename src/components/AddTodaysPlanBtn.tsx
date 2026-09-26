"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IGymSteps } from "@/types/gymSteps.type";
import { Calendar } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

const AddTodaysPlanBtn = ({ workOut }: { workOut: IGymSteps }) => {
  // Get data throug Context API
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutsContext);

  // Button click to action
  const handleTodaysPlanBtn = () => {
    setTodaysPlan([...todaysPlan, workOut]);
    toast.success(`You have added "${workOut.name}" on today's plan.`);
  };

  return (
    <button
      className="btn border-none bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold normal-case rounded-xl px-6 flex items-center gap-2"
      onClick={() => handleTodaysPlanBtn()}
    >
      <Calendar className="w-4 h-4" />
      Add to today's plan
    </button>
  );
};

export default AddTodaysPlanBtn;





