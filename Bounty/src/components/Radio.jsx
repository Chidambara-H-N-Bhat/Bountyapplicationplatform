export default function RadioGroup({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-semibold">{label}</label>

      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-1">
            <input
              type="radio"
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange(e.target.value)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
