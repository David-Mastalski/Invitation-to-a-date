import { GIFTS } from "../constants/gifts";

export function Gifts({ selectedGift, setSelectedGift }) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-6">
      {GIFTS.map((g) => {
        const selected = selectedGift === g.id;

        return (
          <button
            onClick={() => {
              setSelectedGift(g.id)
            }}
            key={g.id}
            type="button"
            disabled={g.disabled}
            title={g.disabled ? "Nie ma szans XDD" : g.value}
            className={`text-[15px] font-medium px-2.5 py-4 rounded-2xl select-none transition-all
              ${
                g.disabled
                  ? "bg-zinc-100 border border-zinc-300 opacity-60 cursor-not-allowed"
                  : selected
                    ? "outline-2 outline-offset-2 outline-[#C81E5C] bg-[#fcf2f6] text-[#C81E5C] cursor-pointer"
                    : "bg-[#f7f7f7] text-zinc-800 cursor-pointer hover:shadow-[0_0_12px_rgba(200,30,92,0.35)]"
              }
            `}
          >
            {g.value}
            {g.disabled && <div className="text-[11px]">Niedostępny 😅</div>}
          </button>
        );
      })}
    </div>
  );
}
