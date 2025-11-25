export default function Button({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-[146px] h-[40px] bg-blue-600 text-white  rounded hover:bg-blue-700"
    >
        
      {text}
    </button>
  );
}
