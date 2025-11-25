import { useState, useRef, useEffect } from "react";

export default function MultiSelectDropdown({ options, value = [], onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Input / Placeholder */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[40px] border border-gray-300 rounded p-2 flex flex-wrap items-center gap-2 cursor-pointer bg-white"
      >
        {value.length === 0 && <span className="text-gray-400">{placeholder}</span>}

        {value.map((val) => (
          <div
            key={val}
            className="flex items-center gap-1 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded"
          >
            {val}
            <button type="button" onClick={(e) => { e.stopPropagation(); toggleOption(val); }}>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="checkbox"
                checked={value.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="cursor-pointer"
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
