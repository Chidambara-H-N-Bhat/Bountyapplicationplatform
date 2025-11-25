import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, saveStepData, completeStep } from "@/store/store";
import InputField from "@/components/Input";
import SelectField from "@/components/Dropdown";
import RadioGroup from "@/components/Radio";
import Button from "@/components/Button";

export default function Brief() {
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.steps.steps.brief.data);

  
  const [title, setTitle] = useState(storedData?.title || "");
  const [description, setDescription] = useState(storedData?.description || "");
  const [project, setProjectType] = useState(storedData?.project || "");
  const [bountyType, setBountyType] = useState(storedData?.bountyType || "");
  const [dominantImpact, setDominantImpact] = useState(storedData?.dominantImpact || "");
  const [mode, setMode] = useState(storedData?.mode || "Digital");
  const [location, setLocation] = useState(storedData?.location || "");
  const [errorMsg, setErrorMsg] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !bountyType || !dominantImpact) {
      setErrorMsg("Please fill all required fields!"); 
      return;
    }

    setErrorMsg("");

    dispatch(
      saveStepData({
        step: "brief",
        data: { title, description, project, bountyType, dominantImpact, mode, location },
      })
    );

    dispatch(completeStep("brief"));
    dispatch(setCurrentStep("rewards"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[718px] bg-[#F7F7F7] rounded-lg border-x border-[#E5E5E5] p-6 mt-24 mx-auto relative"
    >
      
      {errorMsg && (
        <div className="w-full max-w-[576px] mx-auto mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
          {errorMsg}
        </div>
      )}

     
      <div className="w-full max-w-[576px] mx-auto mb-6">
        <label className="flex items-center font-inter font-semibold text-[16px] text-[#171717] mb-2">
          Bounty Title*
        </label>

        <InputField
          required
          value={title}
          onChange={setTitle}
          placeholder="Type your bounty’s title"
          max={40}
          counter
          className="w-full"
          inputClassName="w-full font-inter font-semibold text-[16px] text-[#171717]"
        />
      </div>

      
      <div className="w-full max-w-[576px] mx-auto flex flex-col gap-2 mb-6">
        <label className="flex items-center font-inter font-semibold text-[14px] text-[#171717] mb-2">
          Bounty Description 
          <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
            i
          </span>
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
          placeholder="Briefly describe what the bounty does"
          className="w-full h-24 rounded-[8px] bg-white border border-[#E5E5E5] text-[#171717] p-2"
        />
        <p className="text-sm text-gray-500 text-right">character limit: {description.length}/1000</p>
      </div>

      
      <div className="w-full max-w-[574px] mx-auto mb-6 flex flex-col gap-2">
        <label className="font-inter font-semibold text-[14px]">Project</label>
        <SelectField
          value={project}
          Placeholder="Choose a project to link the bounty"
          onChange={setProjectType}
          options={["Project A", "Project B"]}
          className="w-full h-10 rounded-[8px] text-[#171717] border border-[#E5E5E5] bg-white"
        />
      </div>

      
      <div className="w-full max-w-[576px] mx-auto flex flex-col md:flex-row gap-4 mb-6 mt-10">
        <div className="flex-1">
          <label className="flex items-center font-inter font-semibold text-[14px] text-[#171717] mb-2">
            Bounty Type
            <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
              i
            </span>
          </label>
          <SelectField
            Placeholder="Choose category"
            value={bountyType}
            onChange={setBountyType}
            options={["Content", "Design", "Development", "Marketing", "Other"]}
            className="w-50"
          />
        </div>
        <div className="flex-2">
          <label className="flex items-center font-inter font-semibold text-[14px] text-[#171717] mb-2">
            Dominant Impact Core
            <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
              i
            </span>
          </label>
          <SelectField
            Placeholder="Choose core"
            value={dominantImpact}
            onChange={setDominantImpact}
            options={["Water", "Earth", "Social", "Energy"]}
            className="w-50"
          />
        </div>
      </div>

      
      <div className="w-full max-w-[574px] mx-auto mb-6 mt-10">
        <label className="flex items-center font-inter font-semibold text-[14px] text-[#171717] mb-2">
          Bounty Mode
          <span className="w-4 h-4 flex items-center justify-center text-xs font-bold text-white bg-[#737373] rounded-full ml-2">
            i
          </span>
        </label>
        <RadioGroup value={mode} onChange={setMode} options={["Digital Bounty", "Physical Bounty"]} />

        {mode === "Physical Bounty" && (
          <div className="mt-10 flex flex-col gap-4">
            <InputField
              label={
                <>
                  <span>Enter Location</span>
                  <span className="block text-sm font-normal">City/Town where the bounty is live</span>
                </>
              }
              required
              value={location}
              onChange={setLocation}
              placeholder="Type in the location where the bounty should be available"
              className="w-full h-9"
            />

            {location && (
              <div className="mt-10 h-64 w-full border rounded overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`}
                ></iframe>
              </div>
            )}
          </div>
        )}
      </div>

      
      <div className="flex flex-col md:flex-row justify-end gap-4 mt-30 w-full max-w-[576px] mx-auto">
        <Button type="submit" text="Next" className="w-full md:w-auto" />
      </div>
    </form>
  );
}
