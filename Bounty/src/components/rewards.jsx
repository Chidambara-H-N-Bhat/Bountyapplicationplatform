import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep, saveStepData, completeStep } from "@/store/store";
import InputField from "./Input";
import SelectField from "./Dropdown";
import Button from "./Button";
import MultiSelectDropdown from "./checkbox";

export default function RewardsStep() {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.steps.steps.rewards.data);

  const [currency, setCurrency] = useState(storedData.currency || "");
  const [totalReward, setTotalReward] = useState(storedData.totalReward || "");
  const [winners, setWinners] = useState(storedData.winners || "");
  const [expiration, setExpiration] = useState(storedData.expiration || "");
  const [days, setDays] = useState(storedData.days || "");
  const [hours, setHours] = useState(storedData.hours || "");
  const [minutes, setMinutes] = useState(storedData.minutes || "");
  const [hasImpactCert, setHasImpactCert] = useState(storedData.hasImpactCert || false);
  const [impactBrief, setImpactBrief] = useState(storedData.impactBrief || "");
  const [sdgs, setSdgs] = useState(storedData.sdgs || []);
  const [errorMsg, setErrorMsg] = useState(""); // ✅ popup state

  const currencyOptions = ["USD", "EUR", "INR", "GBP"];
  const sdgOptions = ["No Poverty", "Zero Hunger", "Quality Education", "Gender Equality"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currency || !totalReward || !winners || !expiration) {
      setErrorMsg("Please fill all required fields!");
      return;
    }

    setErrorMsg("");

    const data = { currency, totalReward, winners, expiration, days, hours, minutes, hasImpactCert, impactBrief, sdgs };
    dispatch(saveStepData({ step: "rewards", data }));
    dispatch(completeStep("rewards"));
    dispatch(setCurrentStep("backer"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl bg-[#F7F7F7] border-x border-[#E5E5E5] rounded-lg p-4 sm:p-6 md:p-8 mt-10 mx-auto"
    >
      {/* Error popup */}
      {errorMsg && (
        <div className="w-full bg-red-100 border border-red-400 text-red-700 rounded p-2 mb-4">
          {errorMsg}
        </div>
      )}

      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#171717]">Bounty Reward</h2>
        <p className="text-xs sm:text-sm text-[#40404099]">Choose bounty reward token and set the amount</p>
      </div>

      {/* Budget */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-2 sm:gap-4 mb-6">
        <div className="sm:w-1/4">
          <SelectField options={currencyOptions} value={currency} onChange={setCurrency} />
        </div>
        <div className="sm:w-3/4">
          <InputField
            type="number"
            min="0"
            value={totalReward}
            onChange={(v) => setTotalReward(Math.max(0, v))}
          />
        </div>
      </div>

      {/* Winners */}
      <div className="mb-6">
        <label className="block text-sm font-normal text-[#171717] mb-1">How many Winners *</label>
        <InputField type="number" min="0" value={winners} onChange={(v) => setWinners(Math.max(0, v))} />
      </div>

      {/* Timeline */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-[#171717] mb-2">Timeline</h2>
        <label className="block text-sm font-normal text-[#171717] mb-1">Expiration Date *</label>
        <InputField type="date" value={expiration} onChange={setExpiration} />

        <div className="flex flex-wrap gap-2 mt-2">
          <InputField label="Days" type="number" min="0" value={days} onChange={(v) => setDays(Math.max(0, v))} inputClassName="w-20" />
          <InputField label="Hours" type="number" min="0" value={hours} onChange={(v) => setHours(Math.max(0, v))} inputClassName="w-20" />
          <InputField label="Minutes" type="number" min="0" value={minutes} onChange={(v) => setMinutes(Math.max(0, v))} inputClassName="w-20" />
        </div>
      </div>

      {/* Impact Certificate */}
      <div className="flex items-center gap-4 mb-4">
        <div
          onClick={() => setHasImpactCert(!hasImpactCert)}
          className={`w-10 h-5 rounded-full cursor-pointer transition-all duration-300 ${hasImpactCert ? "bg-orange-500" : "bg-gray-300"} relative`}
        >
          <div className={`w-4 h-4 bg-white rounded-full absolute top-[1px] transition-all duration-300 ${hasImpactCert ? "left-5" : "left-[1px]"}`}></div>
        </div>
        <label className="flex items-center font-inter font-semibold text-[16px] text-[#171717] mb-2">
            impact Certificate
          <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
            i
          </span>
          </label>
      </div>

      {hasImpactCert && (
        <InputField
          label="Impact Brief *"
          value={impactBrief}
          onChange={setImpactBrief}
          className="w-full mb-6 text-[#171717]"
        />
      )}

      

      {/* SDGs */}
      <div className="mb-6">
        <label className="flex items-center font-inter font-semibold text-[14px] text-[#171717] mb-2">
            SDGs*
          <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
            i
          </span>
          </label>
        <MultiSelectDropdown options={sdgOptions} value={sdgs} onChange={setSdgs} placeholder="Select SDGs" />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
        <button
          type="button"
          onClick={() => dispatch(setCurrentStep("brief"))}
          className="w-full sm:w-36 h-10 bg-white text-black border border-gray-300 rounded hover:bg-gray-100"
        >
          Back
        </button>
        <Button type="submit" text="Next" className="w-full sm:w-auto" />
      </div>
    </form>
  );
}
