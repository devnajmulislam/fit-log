/* import AddTodaysPlanBtn from "@/components/AddTodaysPlanBtn";
import SaveForLtrBtn from "@/components/SaveForLtrBtn";
import { getAllGymSteps } from "@/lib/gymSteps";
import { IGymSteps } from "@/types/gymSteps.type";
import Image from "next/image";

interface IWorkoutDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailPage = async ({ params }: IWorkoutDetailPageProps) => {
  // destracture dynamic card id
  const { id } = await params;

  // get gymsteps all data
  const allWorkOuts = await getAllGymSteps();

  // find dynamic id data from all gymsteps
  const workOut = allWorkOuts.find(
    (workOut: IGymSteps) => String(workOut.id) === String(id),
  );

  return (
    <section>
       // Details card container 
      <div className="bg-[#0d0f12] text-slate-100 p-4 md:p-8 lg:py-12 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
         // Left image 
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-[#16191e]">
            <Image
              src={workOut.image}
              alt={workOut.name}
              fill
              priority
              className="object-cover"
            />
          </div>

         // Right workout details 
          <div className="flex flex-col gap-6">
            // Header title & description 
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-3">
                {workOut.name}
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                {workOut.description}
              </p>
            </div>

            // Muscle badges 
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

            // Stats box
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

            // Instructions section 
            <div className="mt-2">
              <h2 className="text-lg font-bold uppercase text-white mb-4">
                Instructions
              </h2>
              <ol className="space-y-3 list-none">
                {workOut.instructions.map((step, idx) => (
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

            // Buttons
            <div className="flex flex-wrap items-center gap-4 pt-2">
              //Add to today's plan btn 
              <AddTodaysPlanBtn workOut={workOut} />
              //Save for later btn
              <SaveForLtrBtn workOut={workOut} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailPage; */


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
  const { id } = await params;
  const allWorkOuts = await getAllGymSteps();

  const workOut = allWorkOuts.find(
    (item: IGymSteps) => String(item.id) === String(id),
  );

  // Guard clause if workout isn't found
  if (!workOut) {
    notFound();
  }

  return (
    <section>
      <div className="bg-[#0d0f12] text-slate-100 p-4 md:p-8 lg:py-12 flex justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl bg-[#16191e]">
            <Image
              src={workOut.image}
              alt={workOut.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-3">
                {workOut.name}
              </h1>
              <p className="text-slate-400 text-sm md:text-base">
                {workOut.description}
              </p>
            </div>

            {/* Added explicit string / number types to map parameters */}
            <div className="flex flex-wrap gap-2">
              {workOut.gopus.map((group: string, index: number) => (
                <span
                  key={index}
                  className="badge bg-[#ccff00] text-black font-semibold border-none px-4 py-3 rounded-full text-xs"
                >
                  {group}
                </span>
              ))}
            </div>

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

            <div className="mt-2">
              <h2 className="text-lg font-bold uppercase text-white mb-4">
                Instructions
              </h2>
              <ol className="space-y-3 list-none">
                {/* Added explicit string / number types to map parameters */}
                {workOut.steps.map((step: string, idx: number) => (
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

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <AddTodaysPlanBtn workOut={workOut} />
              <SaveForLtrBtn workOut={workOut} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutDetailPage;
