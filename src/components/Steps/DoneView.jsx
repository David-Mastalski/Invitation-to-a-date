import { GIFTS } from "../../constants/gifts";
import { Card } from "../Card";

export function DoneView({
  dateOfArrival,
  dateOfDeparture,
  selectedGift,
  submitError,
}) {
  return (
    <Card>
      <h2 className="font-heading font-semibold text-2xl leading-tight">
        <span className="text-5xl block mb-3">🎉</span>
        Super! Zapisz sobie to wydarzenie w kalendarzu 😉
      </h2>

      <p className="mt-4 text-sm text-[var(--purple-text)]">
        Przyjazd: <strong>{dateOfArrival}</strong> · Wyjazd:{" "}
        <strong>{dateOfDeparture}</strong>.
      </p>

      <p className="mt-1 text-sm text-[var(--purple-text)]">
        Wezmę ze sobą:{" "}
        <strong>
          {(() => {
            const currentGift = GIFTS.find((g) => g.id === selectedGift);
            return currentGift?.summaryLabel ?? currentGift?.value ?? "Brak";
          })()}
        </strong>
      </p>

      {submitError && (
        <p className="leading-tight text-[var(--error-red)] text-xs font-medium my-3">
          (Uwaga: nie udało się zapisać danych — daj mi znać przez Messenger, na
          wszelki wypadek 🙈)
        </p>
      )}

      <p className="mt-6 font-semibold">Do zobaczenia u Ciebie 🚗</p>
    </Card>
  );
}
