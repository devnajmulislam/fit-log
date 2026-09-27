import Banner from "@/components/Banner";
import WorkoutsPage from "./work-outs/page";

export default function Home() {
  return (
    <div>
      {/* Banner section */}
      <Banner />
      {/* The library section */}
      <WorkoutsPage />
    </div>
  );
}
