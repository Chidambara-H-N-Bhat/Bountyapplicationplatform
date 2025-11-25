function InputField({ label, required = false, value, onChange, placeholder, max, counter, type = "text", className = "", inputClassName = "" }) {
  return (
    <div className={`flex flex-col gap-1  relative  ${className}`}>
      <label className="font-semibold">
        {label} {required}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => {
          if (type === "text") onChange(e.target.value.slice(0, max));
          else if (type === "number") onChange(e.target.valueAsNumber);
          else onChange(e.target.value);
        }}
        placeholder={placeholder}
        className={`h-[40px] bg-white border border-[#E5E5E5] rounded-[8px] p-2 ${type === "date" ? "pr-10" : ""} ${inputClassName}`}
      />

      {counter && type === "text" && (
        <p className="text-sm text-gray-500 text-right mr-1">
          character limit: {value.length}/{max}
        </p>
      )}
    </div>
  );
}


export default InputField;
