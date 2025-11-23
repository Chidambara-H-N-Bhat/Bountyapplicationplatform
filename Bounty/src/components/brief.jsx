import { useState } from "react";

export default function Brief() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [project, setProjectType] = useState("")
  const [bountyType, setBountyType] = useState("");
  const [dominantImpact, setDominantImpact] = useState("");
  const [mode, setMode] = useState("Digital");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !project || !bountyType || !dominantImpact || (mode === "Physical" && !location)) {
      alert("Please fill all required fields.");
      return;
    }
    // Save data or move to next step
    const formData = { title, description, project, bountyType, dominantImpact, mode, location };
    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg bg-[#e5e5e5] rounded shadow space-y-4">
      {/* Bounty Title */}
      <div>
        <label className="block font-semibold mb-1"><h3>Bounty Title </h3><span className="text-red-500">*</span></label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value.slice(0, 40))}
          placeholder="Type your bounty’s title"
          className="w-full p-2 border rounded bg-[#FFFFFF]"
        />
        <p className="text-sm text-gray-500">{title.length}/40 characters</p>
      </div>

      {/* Bounty Description */}
      <div>
        <label className="block font-semibold mb-1">Bounty Description <span className="text-red-500">*</span></label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter bounty description"
          className="w-full p-2 border rounded h-24 bg-[#FFFFFF]"
        />
      </div>

            
      <div>
        <label className="block font-semibold mb-1">Project <span className="text-red-500">*</span></label>
        <select
          value={project}
          onChange={(e) => setProjectType(e.target.value)}
          className="w-full p-2 border rounded bg-[#FFFFFF]"
        >
          <option value="">Choose a project to link the bounty</option>
        </select>
      </div>


      {/* Bounty Type Dropdown */}
      <div className="flex gap-4">
        <div className="w-1/2">
        <label className="block font-semibold mb-1">Bounty Type</label>
        <select
          value={bountyType}
          onChange={(e) => setBountyType(e.target.value)}
          className="w-full p-2 border rounded bg-[#FFFFFF]"
        >
          <option value="">Choose category</option>
          <option value="Content">Content</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Dominant Impact Core Dropdown */}
      <div className="w-1/2">
        <label className="block font-semibold mb-1">Dominant Impact Core</label>
        <select
          value={dominantImpact}
          onChange={(e) => setDominantImpact(e.target.value)}
          className="w-full p-2 border rounded bg-[#FFFFFF]"
        >
          <option value="">Choose core</option>
          <option value="Water">Water</option>
          <option value="Earth">Earth</option>
          <option value="Social">Social</option>
          <option value="Energy">Energy</option>
        </select>
      </div>
      </div>

      {/* Bounty Mode Radio Group */}
      <div>
        <label className="block font-semibold mb-1">Bounty Mode</label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="Digital"
              checked={mode === "Digital"}
              onChange={(e) => setMode(e.target.value)}
            />
            <span>Digital</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="Physical"
              checked={mode === "Physical"}
              onChange={(e) => setMode(e.target.value)}
            />
            <span>Physical</span>
          </label>
        </div>
      </div>

      {/* Location (conditional) */}
      {mode === "Physical" && (
        <div>
          <label className="block font-semibold mb-1">Location <span className="text-red-500">*</span></label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="w-full p-2 border rounded bg-[#FFFFFF]"
          />
        </div>
      )}

      {/* Submit / Next Button */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Next
      </button>
    </form>
  );
}
