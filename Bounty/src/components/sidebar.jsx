import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep } from "@/store/store";
import { useState } from "react";

const stepList = ["brief", "rewards", "backer"];
const stepLayout = {
  brief: { top: "217px", w: "62px" },
  rewards: { top: "246px", w: "93px" },
  backer: { top: "275px", w: "79px" },
};

export default function Sidebar() {
  const dispatch = useDispatch();
  const CurrentStep = useSelector((state) => state.steps.CurrentStep);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (step) => {
    dispatch(setCurrentStep(step));
    if (window.innerWidth < 768) setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Fixed */}
      <button
        className="fixed top-5 left-5 z-50 w-10 h-10 justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Top Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
            isOpen ? "rotate-45" : "translate-y-[-6px] rotate-0"
          }`}
        ></span>
        {/* Middle Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        {/* Bottom Line */}
        <span
          className={`absolute block h-0.5 w-6 bg-black transition-transform duration-300 origin-center ${
            isOpen ? "-rotate-45" : "translate-y-[6px] rotate-0"
          }`}
        ></span>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[#F7F7F7] border-x border-[#E5E5E5] rounded-lg p-5 z-40
          transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Bounty Steps Title */}
        <h4 className="text-[#969696] text-sm w-[140px] h-[24px] absolute top-[181px] left-[67px]">
          Bounty Steps
        </h4>

        {/* Steps */}
        {stepList.map((step, index) => (
          <div
            key={step}
            onClick={() => handleClick(step)}
            className={`absolute left-[67px] font-inter font-bold text-[16px] leading-[24px]
              ${CurrentStep === step ? "text-[#0085FF]" : "text-[#969696]"}
              cursor-pointer`}
            style={{ top: stepLayout[step].top, width: stepLayout[step].w }}
          >
            {`${index + 1}. ${step.charAt(0).toUpperCase() + step.slice(1)}`}
          </div>
        ))}
      </div>

      {/* Overlay for small screens */}
      {isOpen && window.innerWidth < 768 && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

