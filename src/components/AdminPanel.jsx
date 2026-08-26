import { useEffect, useState } from "react";
import { Card } from "./Card";
import { fetchData } from "../firebase";
import { LeadHeading } from "./LeadHeading";

export function AdminPanel() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const results = await fetchData();
        setData(results);
      } catch (err) {
        console.error(err);
        setError("Nie udało się pobrać danych");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading)
    return (
      <Card>
        <p>Ładowanie odpowiedzi...</p>
      </Card>
    );
  if (error)
    return (
      <Card>
        <p className="text-red-500">{error}</p>
      </Card>
    );

  return (
    <Card>
      <h2 className="font-heading font-semibold text-2xl leading-tight">
        Odpowiedź
      </h2>

      {!data ? (
        <LeadHeading>Nikt jeszcze nie wypełnił formularza ⏳</LeadHeading>
      ) : (
        <div className="mt-6 space-y-3 text-left">
          <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200">
            <span className="mb-1.5 block text-xs font-semibold text-[var(--purple-text)]">
              Data przyjazdu
            </span>
            <p className="font-medium text-zinc-800">
              {data.dateOfArrival || "Brak"}
            </p>
          </div>

          <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200">
            <span className="mb-1.5 block text-xs font-semibold text-[var(--purple-text)]">
              Data wyjazdu
            </span>
            <p className="font-medium text-zinc-800">
              {data.dateOfDeparture || "Brak"}
            </p>
          </div>

          <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200">
            <span className="mb-1.5 block text-xs font-semibold text-[var(--purple-text)]">
              Wybrała:
            </span>
            <p className="font-medium">{data.gift || "Brak"}</p>
          </div>
        </div>
      )}
    </Card>
  );
}
