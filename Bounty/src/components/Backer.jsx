import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep, saveStepData, completeStep } from "@/store/store";
import InputField from "./Input";
import Button from "./Button";

export default function Backer() {
  const dispatch = useDispatch();
  const briefData = useSelector((state) => state.steps.steps.brief.data);
  const rewardsData = useSelector((state) => state.steps.steps.rewards.data);
  const backerData = useSelector((state) => state.steps.steps.backer.data);

  const [hasBacker, setHasBacker] = useState(false);
  const [backerName, setBackerName] = useState("");
  const [backerLogo, setBackerLogo] = useState(null); 
  const [backerMessage, setBackerMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 
  const [previewUrl, setPreviewUrl] = useState(null);

  
  useEffect(() => {
    if (backerData) {
      setHasBacker(true);
      setBackerName(backerData.name || "");
      setBackerMessage(backerData.message || "");
      
      if (backerData.logoPreview) {
        setPreviewUrl(backerData.logoPreview);
        setBackerLogo(null); 
      }
    }
  }, [backerData]);

  
  useEffect(() => {
    return () => {
      if (previewUrl && previewUrl.startsWith("blob:")) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackerLogo(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const removeLogo = () => {
    setBackerLogo(null);
    setPreviewUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!briefData?.title || !briefData?.description || !briefData?.bountyType || !briefData?.dominantImpact) {
      setErrorMsg("Please complete all required fields in the Brief step!");
      return;
    }
    if (!rewardsData?.currency || !rewardsData?.totalReward || !rewardsData?.winners || !rewardsData?.expiration) {
      setErrorMsg("Please complete all required fields in the Rewards step!");
      return;
    }
    if (hasBacker && (!backerName || (!backerLogo && !previewUrl))) {
      setErrorMsg("Please fill backer name and upload logo!");
      return;
    }
    if (!termsAccepted) {
      setErrorMsg("You must accept the terms & conditions!");
      return;
    }

    setErrorMsg("");
    setLoading(true);

    setTimeout(() => {
      const payload = hasBacker
        ? {
            name: backerName,
            message: backerMessage,
            logoPreview: previewUrl,
          }
        : null;

      dispatch(saveStepData({ step: "backer", data: payload }));
      dispatch(completeStep("backer"));
      dispatch(setCurrentStep("confirm"));
      setLoading(false);
    }, 500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[718px] bg-[#F7F7F7] border-x border-[#E5E5E5] rounded-lg p-6 mt-24 mx-auto relative"
    >
      {errorMsg && (
        <div className="w-full max-w-[576px] mx-auto mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-sm text-center">
          {errorMsg}
        </div>
      )}

      <h2 className="text-lg font-semibold mb-2">Backer</h2>
      <p className="text-[12px] text-[#40404099] mb-6">
        Select this option if you wish to display the bounty sponsor/backer’s logo and name on the bounty
      </p>

    
      <div className="flex items-center gap-4 mb-6">
        <div
          onClick={() => setHasBacker(!hasBacker)}
          className={`w-10 h-5 rounded-full cursor-pointer relative transition-colors duration-300 ${hasBacker ? "bg-orange-500" : "bg-gray-300"}`}
        >
          <div className={`w-4 h-4 bg-white rounded-full absolute top-[1px] transition-all duration-300 ${hasBacker ? "left-[20px]" : "left-[1px]"}`}></div>
        </div>
        <label className="text-sm font-semibold">Does the bounty have a sponsor or backer?</label>
      </div>

      {hasBacker && (
        <div className="space-y-4">
          <div>
            <label className="font-bold text-sm block mb-1">Enter sponsor or backer’s name *</label>
            <InputField
              value={backerName}
              Placeholder="Mention the name that will appear on bounties & impact certs"
              onChange={setBackerName}
              required
            />
          </div>

          <div>
            <label className="font-bold text-sm block mb-1">Backer Logo *</label>
            <div className="w-full border border-[#E5E5E5] bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center justify-between">
              {previewUrl ? (
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  <img src={previewUrl} alt="Logo" className="w-16 h-16 object-cover rounded border" />
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">{backerLogo?.name || "Uploaded Logo"}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4 w-full">
                  <button
                    type="button"
                    onClick={() => document.getElementById("logoUploader").click()}
                    className="text-4xl text-gray-400 hover:text-gray-500"
                  >
                    +
                  </button>
                  <p className="text-sm text-gray-500 mt-1 text-center">click to choose the file</p>
                  <p className="text-sm text-gray-500 mt-1 text-center">Max file size: 2 MB ; Ideal dimensions: 20x20 px</p>
                </div>
              )}

              {previewUrl && (
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="w-7 h-7 flex items-center justify-center border rounded-full text-red-500 font-bold text-sm"
                  >
                    ✕
                  </button>
                  <label className="cursor-pointer text-blue-500 text-xl">
                    ✏️
                    <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                  </label>
                </div>
              )}

              <input
                id="logoUploader"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleLogoChange}
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-sm block mb-1">Backer Message (Optional)</label>
            <InputField value={backerMessage} onChange={setBackerMessage} />
          </div>
        </div>
      )}

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="terms"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="terms" className="text-sm">
          I accept the Terms & Conditions
        </label>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
        <button
          type="button"
          onClick={() => dispatch(setCurrentStep("rewards"))}
          className="px-6 py-2 border border-[#D0D0D0] text-[#171717] rounded-md bg-white hover:bg-gray-100 w-full md:w-auto"
        >
          Back
        </button>

        <Button type="submit" text={loading ? "Creating..." : "Create Bounty"} className="w-full md:w-auto" />
      </div>
    </form>
  );
}
