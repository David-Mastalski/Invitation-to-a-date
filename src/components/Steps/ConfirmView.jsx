import { Button } from "../Button";
import { Card } from "../Card";
import { LeadHeading } from "../LeadHeading";

export function ConfirmView({ onNext }) {
  return (
    <Card>
      <h2 className="font-heading font-semibold text-2xl leading-tight">
        Czekaj! Naprawdę chcesz się ze mną spotkać?😮
      </h2>
      <LeadHeading>Byłem pewny że odpowiesz „nie".</LeadHeading>
      <Button className="mt-6 text-sm" onClick={onNext}>
        Dobra, ustalmy szczegóły
      </Button>
    </Card>
  );
}
