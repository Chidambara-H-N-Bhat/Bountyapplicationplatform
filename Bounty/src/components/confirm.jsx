import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep, resetSteps } from "@/store/store";
import Button from "./Button";

export default function Confirm({ onEdit }) {
  const dispatch = useDispatch();

  const briefData = useSelector((state) => state.steps.steps.brief.data);
  const rewardsData = useSelector((state) => state.steps.steps.rewards.data);
  const backerData = useSelector((state) => state.steps.steps.backer?.data);

  const handleFinalSubmit = () => {
    const payload = {
      ...briefData,
      reward: rewardsData,
      backer: backerData,
    };
    console.log("Final Payload:", payload);

    
    dispatch(resetSteps());

    
    dispatch(setCurrentStep("result"));
  };

  return (
    <div className="w-full max-w-[718px] bg-white rounded-xl p-6 md:p-8 mt-24 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">

      
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F2937] mb-8 text-center md:text-left">
        Review & Confirm Bounty
      </h2>

      
      <div className="p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 mb-6 shadow-sm">
        <h3 className="font-semibold text-[16px] mb-3 text-[#1F2937] border-b pb-2">Brief Details</h3>
        <div className="space-y-2 text-[14px] text-gray-700">
          <p><span className="font-semibold text-[#1F2937]">Title:</span> {briefData.title}</p>
          <p><span className="font-semibold text-[#1F2937]">Description:</span> {briefData.description}</p>
          <p><span className="font-semibold text-[#1F2937]">Project:</span> {briefData.project}</p>
          <p><span className="font-semibold text-[#1F2937]">Type:</span> {briefData.bountyType}</p>
          <p><span className="font-semibold text-[#1F2937]">Dominant Core:</span> {briefData.dominantImpact}</p>
          <p><span className="font-semibold text-[#1F2937]">Mode:</span> {briefData.mode}</p>
          {briefData.mode === "Physical" && (
            <p><span className="font-semibold text-[#1F2937]">Location:</span> {briefData.location}</p>
          )}
        </div>
      </div>

      
      <div className="p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 mb-6 shadow-sm">
        <h3 className="font-semibold text-[16px] mb-3 text-[#1F2937] border-b pb-2">Reward Details</h3>
        <div className="space-y-2 text-[14px] text-gray-700">
          <p><span className="font-semibold text-[#1F2937]">Currency:</span> {rewardsData.currency}</p>
          <p><span className="font-semibold text-[#1F2937]">Total Reward:</span> {rewardsData.totalReward}</p>
          <p><span className="font-semibold text-[#1F2937]">Winners:</span> {rewardsData.winners}</p>
          <p><span className="font-semibold text-[#1F2937]">Expiration:</span> {rewardsData.expiration}</p>
          <p><span className="font-semibold text-[#1F2937]">Estimated Completion:</span> {rewardsData.days}d {rewardsData.hours}h {rewardsData.minutes}m</p>
          <p><span className="font-semibold text-[#1F2937]">Impact Certificate:</span> {rewardsData.hasImpactCert ? "Yes" : "No"}</p>
          {rewardsData.hasImpactCert && (
            <p><span className="font-semibold text-[#1F2937]">Impact Brief:</span> {rewardsData.impactBrief}</p>
          )}
          <p><span className="font-semibold text-[#1F2937]">SDGs:</span> {rewardsData.sdgs?.join(", ")}</p>
        </div>
      </div>

      
      {backerData && (
        <div className="p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 mb-6 shadow-sm">
          <h3 className="font-semibold text-[16px] mb-3 text-[#1F2937] border-b pb-2">Backer Details</h3>
          <div className="space-y-2 text-[14px] text-gray-700">
            <p><span className="font-semibold text-[#1F2937]">Name:</span> {backerData.name}</p>
            {backerData.logo && (
              <img
                src={URL.createObjectURL(backerData.logo)}
                alt="Backer Logo"
                className="w-28 h-28 object-cover border rounded-md mt-2 shadow"
              />
            )}
            {backerData.message && (
              <p><span className="font-semibold text-[#1F2937]">Message:</span> {backerData.message}</p>
            )}
          </div>
        </div>
      )}

      
      <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
        <Button
          text="Edit"
          onClick={onEdit}
          className="w-full md:w-auto bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 shadow-sm transition-all duration-200"
        />
        <Button
          text="Confirm Bounty"
          onClick={handleFinalSubmit}
          className="w-full md:w-auto bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-md transition-all duration-200"
        />
      </div>
    </div>
  );
}
