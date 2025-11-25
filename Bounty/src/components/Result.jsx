import { useSelector } from "react-redux";

export default function Result() {
  const briefData = useSelector((state) => state.steps.steps.brief.data);
  const rewardsData = useSelector((state) => state.steps.steps.rewards.data);
  const backerData = useSelector((state) => state.steps.steps.backer?.data);

  return (
    <div className="max-w-3xl w-full mx-auto bg-white rounded-xl p-6 sm:p-8 mt-16 shadow-lg hover:shadow-xl transition-shadow duration-300">

      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[#1F2937]">
        Bounty is published and live on Impact Miner!
      </h2>

      {/* Brief Section */}
      <div className="mb-6 p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#1F2937] border-b pb-2">
          Brief Details
        </h3>
        <div className="space-y-2 text-gray-700 text-[14px] sm:text-[15px]">
          <p><strong className="text-[#1F2937]">Title:</strong> {briefData.title}</p>
          <p><strong className="text-[#1F2937]">Description:</strong> {briefData.description}</p>
          <p><strong className="text-[#1F2937]">Project:</strong> {briefData.project}</p>
          <p><strong className="text-[#1F2937]">Type:</strong> {briefData.bountyType}</p>
          <p><strong className="text-[#1F2937]">Dominant Core:</strong> {briefData.dominantImpact}</p>
          <p><strong className="text-[#1F2937]">Mode:</strong> {briefData.mode}</p>
          {briefData.mode === "Physical" && (
            <p><strong className="text-[#1F2937]">Location:</strong> {briefData.location}</p>
          )}
        </div>
      </div>

      {/* Rewards Section */}
      <div className="mb-6 p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#1F2937] border-b pb-2">
          Rewards
        </h3>
        <div className="space-y-2 text-gray-700 text-[14px] sm:text-[15px]">
          <p><strong className="text-[#1F2937]">Currency:</strong> {rewardsData.currency}</p>
          <p><strong className="text-[#1F2937]">Total Reward:</strong> {rewardsData.totalReward}</p>
          <p><strong className="text-[#1F2937]">Winners:</strong> {rewardsData.winners}</p>
          <p><strong className="text-[#1F2937]">Expiration:</strong> {rewardsData.expiration}</p>
          <p><strong className="text-[#1F2937]">Estimated Completion:</strong> {rewardsData.days}d {rewardsData.hours}h {rewardsData.minutes}m</p>
          <p><strong className="text-[#1F2937]">Impact Certificate:</strong> {rewardsData.hasImpactCert ? "Yes" : "No"}</p>
          {rewardsData.hasImpactCert && (
            <p><strong className="text-[#1F2937]">Impact Brief:</strong> {rewardsData.impactBrief}</p>
          )}
          <p><strong className="text-[#1F2937]">SDGs:</strong> {rewardsData.sdgs?.join(", ")}</p>
        </div>
      </div>

      {/* Backer Section */}
      {backerData && (
        <div className="mb-6 p-5 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-[#1F2937] border-b pb-2">
            Backer
          </h3>
          <div className="space-y-2 text-gray-700 text-[14px] sm:text-[15px]">
            <p><strong className="text-[#1F2937]">Name:</strong> {backerData.name}</p>
            {backerData.logo && (
              <img
                src={URL.createObjectURL(backerData.logo)}
                alt="Backer Logo"
                className="w-28 sm:w-32 h-28 sm:h-32 object-cover border rounded-md mt-2 shadow"
              />
            )}
            {backerData.message && <p><strong className="text-[#1F2937]">Message:</strong> {backerData.message}</p>}
          </div>
        </div>
      )}

      <div className="text-center mt-6">
        <p className="text-green-600 font-semibold text-sm sm:text-base">
          ✅ Your bounty has been successfully created!
        </p>
      </div>
    </div>
  );
}

