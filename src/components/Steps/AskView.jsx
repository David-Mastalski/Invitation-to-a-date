import { Button } from "../Button";
import { Card, CardEyebrow } from "../Card";
import { FloatingButton } from "../FloatingButton";

export function AskView({ onNext }) {
  return (
    <Card>
      <CardEyebrow>Przed tobą bardzo ważne pytanie</CardEyebrow>
      <h1 className="font-heading font-semibold text-3xl leading-tight">
        A może przyjadę do Ciebie na kilka dni ?🥹
      </h1>

      <div className="flex items-center justify-center gap-4 mt-6">
        <Button onClick={onNext} className="font-bold">
          Tak😏
        </Button>
        <FloatingButton />
      </div>
    </Card>
  );
}
