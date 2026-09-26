import AddTodaysPlanBtn from "@/components/AddTodaysPlanBtn";
import { getAllGymSteps } from "@/lib/gymSteps";
import { IGymSteps } from "@/types/gymSteps.type";
import { Bookmark, Calendar } from "lucide-react";
import Image from "next/image";

interface IWorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  const { id } = await params;
  const allWorkOuts = await getAllGymSteps();
  const workOut = allWorkOuts.find(
    (workOut: IGymSteps) => String(workOut.id) === String(id),
  );
  // console.log(workOut, "got Data");
  return (
    <div className="bg-[#0d0f12] text-slate-100 p-4 md:p-8 lg:p-12 flex justify-center items-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image */}
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-[#16191e]">
          <Image
            src={workOut.image}
            alt={workOut.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Column: Workout Details */}
        <div className="flex flex-col gap-6">
          {/* Header Title & Description */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-wider uppercase text-white mb-3">
              {workOut.name}
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {workOut.description}
            </p>
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2">
            {workOut.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="badge bg-[#ccff00] text-black font-semibold border-none px-4 py-3 rounded-full text-xs"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Stats Box / Card Container */}
          <div className="bg-[#14181f] border border-slate-800/80 rounded-2xl overflow-hidden divide-y divide-slate-800/60 text-sm">
            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Equipment
              </span>
              <span className="font-semibold text-white">
                {workOut.equipment}
              </span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Difficulty
              </span>
              <span className="font-semibold text-white capitalize">
                {workOut.difficulty}
              </span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Sets
              </span>
              <span className="font-semibold text-white">{workOut.sets}</span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Reps
              </span>
              <span className="font-semibold text-white">{workOut.reps}</span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Duration
              </span>
              <span className="font-semibold text-white">
                {workOut.duration} min
              </span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Calories
              </span>
              <span className="font-semibold text-white">
                {workOut.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between items-center px-5 py-3.5">
              <span className="text-slate-400 font-medium uppercase tracking-wider text-xs">
                Rating
              </span>
              <span className="font-semibold text-white">{workOut.rating}</span>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="mt-2">
            <h2 className="text-lg font-bold tracking-wider uppercase text-white mb-4">
              Instructions
            </h2>
            <ol className="space-y-3 list-none">
              {workOut.instructions.map((step, idx) => (
                <li
                  key={idx}
                  className="flex gap-3 text-slate-300 text-sm md:text-base leading-relaxed"
                >
                  <span className="font-semibold text-slate-400 shrink-0">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
<AddTodaysPlanBtn workOut={workOut}/>

            <button className="btn border border-slate-700 bg-[#14181f] hover:bg-slate-800 text-white font-medium normal-case rounded-xl px-6 flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default WorkoutDetailPage;
