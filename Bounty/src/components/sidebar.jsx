
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep } from "@/store/store";

const stepList = ["brief", "rewards", "backer"]; 

export default function Sidebar() {
  const dispatch = useDispatch();
  const stepsStatus = useSelector((state) => state.steps); 
  const { steps, currentStep } = stepsStatus; 

  const handleClick = (step) => {
    const stepIndex = stepList.indexOf(step);
   
    if (stepIndex === 0 || steps[stepList[stepIndex - 1]].completed) {
      dispatch(setCurrentStep(step));
    } else {
      alert("Complete previous steps first!");
    }
  };

  return (
    <>
    
    <div className="w-60 min-h-screen bg-[#e5e5e5] border-r border-gray-300 p-5">
      <div className="flex flex-col space-y-4">
        <h4 class="text-[#969696] text-sm font-semibold">Bounty Steps</h4>

        {stepList.map((step, index) => (
          <div
            key={step}
            onClick={() => handleClick(step)}
            className={`p-3 rounded-md cursor-pointer 
              ${currentStep === step ? "bg-blue-100 font-bold text-[#0085FF]" : "bg-transparent"} 
              ${steps[step].completed ? "text-green-600" : "text-black"} 
              ${steps[step].completed || step === "brief" ? "opacity-100" : "opacity-50"}
              hover:bg-gray-100`}
          >
            
            {`${index + 1}. ${step.charAt(0).toUpperCase() + step.slice(1)}`}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

  


