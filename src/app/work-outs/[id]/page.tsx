import AddTodaysPlanBtn from "@/components/AddTodaysPlanBtn";
import SaveForLtrBtn from "@/components/SaveForLtrBtn";
import { getAllGymSteps } from "@/lib/gymSteps";
import { IGymSteps } from "@/types/gymSteps.type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IWorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  // Dynamic id destracturing
  const { id } = await params;
  // Get all gymsteps data
  const allWorkOuts = await getAllGymSteps();
  // Get the dynamic Card data
  const workOut = allWorkOuts.find(
    (item: IGymSteps) => String(item.id) === String(id),
  );

  // Guard clause if workout isn't found
  if (!workOut) {
    notFound();
  }

  return (
    <section>
      {/* Card parent */}
      <div className="bg-[#0d0f12] text-slate-100 p-4 md:p-8 lg:py-12 flex justify-center items-center">
        {/* Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* left side */}
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-[#16191e]">
            <Image
              src={workOut.image}
              alt={workOut.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* right side */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-3">
                {workOut.name}
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                {workOut.description}
              </p>
            </div>

            {/* yellow tags */}
            <div className="flex flex-wrap gap-2">
              {workOut.muscleGroups.map((group: string, index: number) => (
                <span
                  key={index}
                  className="badge bg-[#ccff00] text-black font-semibold border-none px-4 py-3 rounded-full text-xs"
                >
                  {group}
                </span>
              ))}
            </div>
            {/* table */}
            <div className="bg-[#14181f] border border-slate-800/80 rounded-2xl overflow-hidden divide-y divide-slate-800/60 text-sm">
              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Equipment
                </span>
                <span className="font-semibold text-white">
                  {workOut.equipment}
                </span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Difficulty
                </span>
                <span className="font-semibold text-white capitalize">
                  {workOut.difficulty}
                </span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Sets
                </span>
                <span className="font-semibold text-white">{workOut.sets}</span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Reps
                </span>
                <span className="font-semibold text-white">{workOut.reps}</span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Duration
                </span>
                <span className="font-semibold text-white">
                  {workOut.duration} min
                </span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Calories
                </span>
                <span className="font-semibold text-white">
                  {workOut.caloriesBurned} kcal
                </span>
              </div>

              <div className="flex justify-between items-center px-5 py-3.5">
                <span className="text-slate-400 font-medium uppercase text-xs">
                  Rating
                </span>
                <span className="font-semibold text-white">
                  {workOut.rating}
                </span>
              </div>
            </div>
            {/* numbaring list */}
            <div className="mt-2">
              <h2 className="text-lg font-bold uppercase text-white mb-4">
                Instructions
              </h2>
              <ol className="space-y-3 list-none">
                {/* number types to map parameters */}
                {workOut.instructions.map((step: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-slate-300 text-sm md:text-base"
                  >
                    <span className="font-semibold text-slate-400">
                      {idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            {/* bottom buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Add to today's plan btn */}
              <AddTodaysPlanBtn workOut={workOut} />
              {/* Save for later btn */}
              <SaveForLtrBtn workOut={workOut} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailPage;
