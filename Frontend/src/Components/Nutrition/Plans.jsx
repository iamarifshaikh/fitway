import React from "react";
import Navbar from "../Navbar/Navbar";
import PlanCard from "./PlanCard";

const NutritionPlans = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <PlanCard
            title="Pre Workout Diet"
            imgurl="https://www.verywellfit.com/thmb/U46Vt-nv2NM2cU2Qxso6vogH5Ak=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/pre-workout-meals-and-snacks-4135417-ADD-Color-V2-FINAL2-b010d4314f7c4034baf22b21854e7ef3.jpg"
            desc="Focus on carbohydrates as all pre-workout meals or snacks to provide the body with energy to last the full session. So, if energy levels are sub-optimal, then performance will suffer and have a consequent impact on our rate of adaptation."
          />
          <PlanCard
            title="Post Workout diet"
            imgurl="https://jackcityfitness.com/wp-content/uploads/shutterstock_1114851971-1-1.jpg"
            desc="The purpose of post-workout nutrition is two-fold, firstly, to promote muscle recovery and secondly to replenish energy. Therefore, the focus should once again be on consuming good quality protein and carb foods."
          />
        </div>
      </div>
    </>
  );
};

export default NutritionPlans;
