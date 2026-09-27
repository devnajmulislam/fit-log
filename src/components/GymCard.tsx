import { Clock, Flame, Star } from "lucide-react";
import { IGymSteps } from "@/types/gymSteps.type";
import Image from "next/image";
import Link from "next/link";

interface GymCardProps {
  gymSteps: IGymSteps;
}

const GymCard = ({ gymSteps }: GymCardProps) => {
  return (
    // Clickable link as parent container to navigate
    <Link href={`/work-outs/${gymSteps.id}`}>
      {" "}
      {/* Parent */}
      <div className="bg-[#141416] text-white rounded-2xl overflow-hidden border border-gray-800/80 shadow-md mx-1 flex flex-col justify-between">
        {/* Top section */}
        <div>
          {/* Card image */}
          <div className="relative h-48 sm:h-52 w-full overflow-hidden">
            <Image
              src={gymSteps.image}
              alt={gymSteps.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="object-cover"
            />
          </div>

          {/* Card content */}
          <div className="p-5 space-y-3">
            {/* Muscle badges */}
            <div className="flex flex-wrap gap-2">
              {gymSteps.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#a3e635] text-black font-extrabold uppercase text-[10px] px-2.5 py-1 rounded-full tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Title & Equipment */}
            <div>
              <h2 className="text-xl font-black uppercase tracking-wide text-white leading-tight">
                {gymSteps.name}
              </h2>
              <p className="text-gray-400 text-xs font-medium mt-1">
                {gymSteps.equipment}
              </p>
            </div>
          </div>
        </div>

        {/* Card stats footer */}
        <div className="px-5 pb-4">
          <div className="border-t border-gray-800/80 pt-3 flex items-center justify-start gap-5 text-gray-400 text-xs font-medium">
            {/* time */}
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 stroke-[2]" />
              <span>{gymSteps.duration} min</span>
            </div>
            {/* calory */}
            <div className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 stroke-[2]" />
              <span>{gymSteps.caloriesBurned} kcal</span>
            </div>
            {/* rating */}
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 stroke-[2]" />
              <span>{gymSteps.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GymCard;
