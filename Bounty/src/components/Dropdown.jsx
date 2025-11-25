export default function SelectField({
  label,
  value,
  onChange,
  Placeholder,
  options,
  required = false,
  className = "",
}) {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <label className="font-semibold text-[#40404099]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full bg-white border border-[#E5E5E5] rounded-[8px] p-2"
      >
        <option value="">{Placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

