"use client";
import React, { useContext, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { WorkoutsContext } from "@/context/WorkoutsProvider";

// TypeScript interface
export interface IGymSteps {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned?: number;
  calories?: number; // Added fallback field
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

type TabType = "todaysPlan" | "saved";
type SortOption = "duration" | "caloriesBurned" | "rating";

export default function MyPlanPage() {
  const context = useContext(WorkoutsContext);

  const todaysPlan: IGymSteps[] = context?.todaysPlan || [];
  const saveForLater: IGymSteps[] = context?.saveForLater || [];
  const removeFromPlan = context?.removeFromPlan || ((id: number) => {});
  const markAsDone = context?.markAsDone || ((id: number) => {});
  const removeFromSaved = context?.removeFromSaved || ((id: number) => {});

  const [activeTab, setActiveTab] = useState<TabType>("todaysPlan");
  const [sortBy, setSortBy] = useState<SortOption>("duration");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // 1. Dynamic Live Summary
  const metrics = useMemo(() => {
    const list = activeTab === "todaysPlan" ? todaysPlan : saveForLater;
    const totalExercises = list.length;
    const totalMinutes = list.reduce((acc, curr) => acc + (Number(curr.duration) || 0), 0);
    const totalCalories = list.reduce(
      (acc, curr) => acc + (Number(curr.caloriesBurned ?? curr.calories) || 0),
      0
    );

    return { totalExercises, totalMinutes, totalCalories };
  }, [todaysPlan, saveForLater, activeTab]);

  // 2. Enhanced Sorting Logic (Supports Duration, Calories, & Rating)
  const activeList = useMemo(() => {
    const list = [...(activeTab === "todaysPlan" ? todaysPlan : saveForLater)];

    return list.sort((a, b) => {
      if (sortBy === "duration") {
        const valA = Number(a.duration) || 0;
        const valB = Number(b.duration) || 0;
        return valB - valA;
      }

      if (sortBy === "caloriesBurned") {
        const valA = Number(a.caloriesBurned ?? a.calories) || 0;
        const valB = Number(b.caloriesBurned ?? b.calories) || 0;
        return valB - valA;
      }

      if (sortBy === "rating") {
        const valA = Number(a.rating) || 0;
        const valB = Number(b.rating) || 0;
        return valB - valA;
      }

      return 0;
    });
  }, [todaysPlan, saveForLater, activeTab, sortBy]);

  const handleMarkAsDone = (item: IGymSteps) => {
    if (markAsDone) markAsDone(item.id);
    showToast(`"${item.name}" marked as done!`);
  };

  const handleRemove = (item: IGymSteps) => {
    if (activeTab === "todaysPlan") {
      if (removeFromPlan) removeFromPlan(item.id);
      showToast(`Removed "${item.name}" from Today's Plan`);
    } else {
      if (removeFromSaved) removeFromSaved(item.id);
      showToast(`Removed "${item.name}" from Saved items`);
    }
  };

  return (
    <section className="min-h-screen bg-[#0b0d10] text-white p-4 md:p-10 font-sans relative">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#a3e635] text-black font-semibold px-4 py-3 rounded-xl shadow-lg border border-black/10 transition-all duration-300">
          {toastMessage}
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight uppercase font-mono">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="border border-gray-800/80 bg-[#12151c] rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-3 divide-x divide-gray-800/80">
            <div className="flex flex-col gap-1 pl-2">
              <span className="text-xs text-gray-400 font-medium">Exercises</span>
              <span className="text-3xl md:text-4xl font-black text-[#a3e635] tracking-tight font-mono">
                {metrics.totalExercises}
              </span>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <span className="text-xs text-gray-400 font-medium">Minutes</span>
              <span className="text-3xl md:text-4xl font-black text-white tracking-tight font-mono">
                {metrics.totalMinutes}
              </span>
            </div>

            <div className="flex flex-col gap-1 pl-6">
              <span className="text-xs text-gray-400 font-medium">Calories</span>
              <span className="text-3xl md:text-4xl font-black text-white tracking-tight font-mono">
                {metrics.totalCalories}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs & Sort Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="bg-[#12151c] p-1 rounded-xl border border-gray-800/80 inline-flex">
            <button
              onClick={() => setActiveTab("todaysPlan")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "todaysPlan"
                  ? "bg-[#1f242d] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "saved"
                  ? "bg-[#1f242d] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-400 font-medium">Sort By</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="appearance-none bg-[#12151c] border border-gray-800 text-white text-xs font-medium py-2 pl-4 pr-8 rounded-xl focus:outline-none focus:border-gray-600 cursor-pointer"
              >
                <option value="duration">Duration</option>
                <option value="caloriesBurned">Calories</option>
                <option value="rating">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Card List & Empty State */}
        {activeList.length === 0 ? (
          <div className="border border-dashed border-gray-800/80 bg-[#12151c]/50 rounded-2xl p-16 flex flex-col items-center justify-center text-center space-y-3">
            <h3 className="text-lg font-black tracking-wider uppercase font-mono text-white">
              NOTHING HERE YET
            </h3>
            <p className="text-gray-400 text-xs max-w-sm">
              Browse the library and add a lift to get today moving.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block bg-[#a3e635] text-black font-semibold text-xs px-6 py-2.5 rounded-full hover:bg-[#8ece25] transition-all shadow-[0_0_15px_rgba(163,230,53,0.3)]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {activeList.map((item) => (
              <div
                key={item.id}
                className="bg-[#12151c] border border-gray-800/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-gray-700/80"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-28 h-16 rounded-xl overflow-hidden bg-gray-900 flex-shrink-0 border border-gray-800">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black tracking-wide uppercase font-mono text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      {item.equipment}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-0.5">
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path strokeLinecap="round" strokeWidth="2" d="M12 6v6l4 2" />
                        </svg>
                        {item.duration} min
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#a3e635]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-1.048c-2.5 1.248-4.945 3.33-6.108 6.273-1.071 2.712-.51 5.753 1.34 8.01a7.8 7.8 0 0012.33-1.921c1.378-2.827.817-6.233-1.036-8.528a1 1 0 00-1.442-.047 5.922 5.922 0 01-3.634 1.761 1 1 0 00-.73-.591 1 1 0 00-.705.158 5.908 5.908 0 01-3.328-1.782 1 1 0 00-1.282-.164 1 1 0 00-.236.275c-.381.657-.59 1.396-.59 2.148 0 1.237.491 2.378 1.341 3.228a4.978 4.978 0 007.03 0c.85-.85 1.341-1.991 1.341-3.228 0-.82-.249-1.616-.708-2.327z" clipRule="evenodd" />
                        </svg>
                        {item.caloriesBurned ?? item.calories ?? 0} kcal
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Link
                    href={`/work-outs/${item.id}`}
                    className="text-xs font-semibold bg-[#181c24] hover:bg-[#202632] border border-gray-700/60 text-white px-4 py-2 rounded-xl transition-all"
                  >
                    View Details
                  </Link>

                  {activeTab === "todaysPlan" && (
                    <button
                      onClick={() => handleMarkAsDone(item)}
                      className="text-xs font-bold bg-[#a3e635] hover:bg-[#8ece25] text-black px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all"
                    >
                      <svg
                        className="w-3.5 h-3.5 stroke-[3]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Mark as Done
                    </button>
                  )}

                  <button
                    onClick={() => handleRemove(item)}
                    className="p-2 text-gray-500 hover:text-gray-300 transition-colors"
                    title="Remove item"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}