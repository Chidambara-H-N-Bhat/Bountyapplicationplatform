import Sidebar from "./components/Sidebar";
import Brief from "./components/brief";
import RewardsStep from "./components/rewards";
import Backer from "./components/Backer";
import Confirm from "./components/confirm";
import Result from "./components/Result";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentStep } from "./store/store";

export default function App() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.steps.CurrentStep);

  const renderStep = () => {
    switch (currentStep) {
      case "brief":
        return <Brief />;
      case "rewards":
        return <RewardsStep />;
      case "backer":
        return <Backer />;
      case "confirm":
        return <Confirm onEdit={() => dispatch(setCurrentStep("brief"))} />;
      case "result":
        return <Result />;
      default:
        return <Brief />;
    }
  };

  const steps = ["brief", "rewards", "backer", "confirm", "result"];

  return (
    <>
      {/* Fixed step icons */}
      <div className="fixed top-0 left-0 right-0 flex flex-wrap justify-center gap-3 sm:gap-6 z-50 bg-[#F7F7F7] p-2 shadow">
        {steps.map((step, index) => {
          const currentStepIndex = steps.indexOf(currentStep);
          const isCompleted = index < currentStepIndex;
          const isActive = index === currentStepIndex;

          return (
            <div
              key={index}
              className={`
                w-8 h-8 flex items-center justify-center rounded-full border text-sm font-medium shadow-sm
                ${isCompleted
                  ? "border-blue-500 bg-blue-100 text-blue-600"
                  : isActive
                  ? "border-blue-500 bg-blue-100 text-blue-600"
                  : "border-gray-300 bg-gray-100 text-gray-600"
                }
              `}
            >
              {isCompleted ? "✔" : index + 1}
            </div>
          );
        })}
      </div>

      {/* Main layout */}
      <div className="flex flex-col md:flex-row min-h-screen mt-16 md:mt-20 overflow-x-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 p-4 md:p-6">
          {renderStep()}
        </div>
      </div>
    </>
  );
}
