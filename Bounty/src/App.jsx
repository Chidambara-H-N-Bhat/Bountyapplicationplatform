import Sidebar from "./components/Sidebar";
import Brief from "./components/brief";
import { useSelector } from "react-redux";

export default function App() {
  const currentStep = useSelector((state) => state.steps.CurrentStep);

  const renderStep = () => {
    switch (currentStep) {
      case "brief":
        return <Brief />;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">{renderStep()}</div>
    </div>
  );
}
