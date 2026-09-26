import GymCard from "@/components/GymCard";
import { getAllGymSteps } from "@/lib/gymSteps";
import { IGymSteps } from "@/types/gymSteps.type";

const WorkoutsPage = async () => {
  const gymCards = await getAllGymSteps();

  return (
    <section id="library" className="w-full bg-[#0a0a0c] text-white py-10 sm:py-12">
      {/* Container aligned strictly with Navbar grid */}
      <div className="container mx-auto space-y-8">
        {/* Header Content */}
        <div className="space-y-1 mx-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
            THE LIBRARY
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-normal">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gymCards.map((gymCard: IGymSteps) => (
            <GymCard key={gymCard.id} gymSteps={gymCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutsPage;
