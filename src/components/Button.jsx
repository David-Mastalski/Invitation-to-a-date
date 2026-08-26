export function Button({ children, onClick, className="", fadeIn }) {
  return (
    <button
      className={`bg-[#C81E5C] text-white font-semibold text-base outline-none px-5 py-2 rounded-3xl shadow-[0_10px_24px_rgba(200,30,92,0.35)] cursor-pointer transition-all hover:-translate-y-0.5 active:scale-95 ${className} ${fadeIn && 'animate-fadeIn'}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
