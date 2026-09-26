"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { IGymSteps } from "@/types/gymSteps.type";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const SaveForLtrBtn = ({ workOut }: { workOut: IGymSteps }) => {
  // Get data throug Context API
  const { saveForLater, setsaveForLater } = useContext(WorkoutsContext);

  // Button click to action
  const handleSaveForLaterBtn = () => {
    setsaveForLater([...saveForLater, workOut]);
    // Show notification via Toaster
    toast.info(`You saved "${workOut.name}" for later.`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <button
      className="btn border border-slate-700 bg-[#14181f] hover:bg-slate-800 text-white font-medium normal-case rounded-xl px-6 flex items-center gap-2"
      onClick={() => handleSaveForLaterBtn()}
    >
      <Bookmark className="w-4 h-4" />
      Save for later
    </button>
  );
};

export default SaveForLtrBtn;
