"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IGymSteps } from "@/types/gymSteps.type";
import { Bookmark, Calendar } from "lucide-react";
import { useContext } from "react";

const SaveForLtrBtn = ({ workOut }: { workOut: IGymSteps }) => {
  // Get data throug Context API
  const { saveForLater, setsaveForLater} = useContext(WorkoutsContext);

  // Button click to action
  const handleSaveForLaterBtn = () => {
    setsaveForLater([...saveForLater, workOut]);
    alert(`You have save "${workOut.name}" for later.`);
  };

  return (
    <button className="btn border border-slate-700 bg-[#14181f] hover:bg-slate-800 text-white font-medium normal-case rounded-xl px-6 flex items-center gap-2"  onClick={() => handleSaveForLaterBtn()}>
      <Bookmark className="w-4 h-4" />
      Save for later
    </button>
  );
};

export default SaveForLtrBtn;
