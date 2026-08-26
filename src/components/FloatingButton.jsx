import { TAUNTS } from "../constants/taunts";
import { useFloatingPosition } from "../hooks/useFloatingPosition";

export function FloatingButton() {
  const { position, tauntIndex, containerRef, moveButton } = useFloatingPosition(TAUNTS.length);

  return (
    <div className="relative">
      {position && (
        <div className="bg-white text-transparent opacity-0 font-bold text-base px-5 py-2 rounded-3xl border border-transparent select-none pointer-events-none">
          Nie
        </div>
      )}
      <div
        ref={containerRef}
        className="flex flex-col items-center"
        style={
          position
            ? {
                position: "fixed",
                left: position.left,
                top: position.top,
                transition: "all 0.2s ease-out",
                zIndex: 50,
              }
            : {
                position: "relative",
              }
        }
      >
        {position && (
          <div className="absolute -top-11 whitespace-nowrap bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-md pointer-events-none select-none">
            {TAUNTS[tauntIndex]}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
          </div>
        )}

        <button
          type="button"
          className="bg-white text-black font-bold text-base px-5 py-2 rounded-3xl border border-black select-none shadow-sm"
          onMouseEnter={moveButton}
          onTouchStart={moveButton}
        >
          Nie
        </button>
      </div>
    </div>
  );
}
