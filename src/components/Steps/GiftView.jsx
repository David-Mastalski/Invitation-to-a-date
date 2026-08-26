import { Gift } from "lucide-react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Gifts } from "../Gifts";

export function GiftView({ handleSubmit, submitting, selectedGift, setSelectedGift }) {
  return (
    <Card>
      <h2 className="font-heading font-semibold text-2xl leading-tight">
        Co mam Ci przywieźć ?
      </h2>

      <Gifts selectedGift={selectedGift} setSelectedGift={setSelectedGift} />
      {selectedGift && (
        <Button
          className="mt-6 flex items-center justify-self-center gap-2 "
          fadeIn
          disabled={submitting}
          onClick={handleSubmit}
        >
          <Gift size={18} />
          {submitting ? "Wysyłam..." : "Wybierz to"}
        </Button>
      )}
    </Card>
  );
}
