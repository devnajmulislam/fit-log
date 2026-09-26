"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import React, { useContext } from "react";

const MyPlanPage = () => {
  const { todaysPlan, saveForLater } = useContext(WorkoutsContext);
  // console.log(todaysPlan, saveForLater, "todaysPlan", "Save for Leater");
  return (
    <div>
      <h2>Total TodaysPlan: {todaysPlan.length} <br/> Total SaveforLater: {saveForLater.length}</h2>
    </div>
  );
};

export default MyPlanPage;
