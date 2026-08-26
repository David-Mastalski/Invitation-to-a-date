import { Button } from "../Button";
import { Card } from "../Card";
import { LeadHeading } from "../LeadHeading";

export function DatesView({
  onNext,
  dateOfArrival,
  dateOfDeparture,
  setDateOfArrival,
  setDateOfDeparture,
  isDatesValid,
}) {
  return (
    <Card>
      <h2 className="font-heading font-semibold text-2xl leading-tight">
        Kiedy mam przyjechać ?
      </h2>
      <LeadHeading>Wybierz daty, które Ci pasują.</LeadHeading>

      <div className="mt-6 text-left">
        <label className="mb-1.5 block text-sm font-semibold">
          Data mojego przyjazdu
        </label>
        <input
          type="date"
          value={dateOfArrival}
          onChange={(e) => setDateOfArrival(e.target.value)}
          className="w-full rounded-xl border-[1.5px] border-[#ecd9e2] bg-white px-3.5 py-3 text-sm outline-none focus:border-sunset"
        />
      </div>
      <div className="mt-3 text-left">
        <label className="mb-1.5 block text-sm font-semibold ">
          Data mojego wyjazdu
        </label>
        <input
          type="date"
          value={dateOfDeparture}
          onChange={(e) => setDateOfDeparture(e.target.value)}
          className="w-full rounded-xl border-[1.5px] border-[#ecd9e2] bg-white px-3.5 py-3 text-sm outline-none focus:border-sunset"
        />
      </div>

      {isDatesValid && (
        <Button className="mt-6" fadeIn onClick={onNext}>
          Dobra, jeszcze jeden szczegół...
        </Button>
      )}
    </Card>
  );
}
