import { FloatingHearts } from "./components/FloatingHearts";
import { useGiftWizard } from "./hooks/useGiftWizard";
import { AskView } from "./components/Steps/AskView";
import { GiftView } from "./components/Steps/GiftView";
import { ConfirmView } from "./components/Steps/ConfirmView";
import { DatesView } from "./components/Steps/DatesView";
import { DoneView } from "./components/Steps/DoneView";
import { AdminPanel } from "./components/AdminPanel";

function App() {
  const {
    isDatesValid,
    step,
    selectedGift,
    dateOfArrival,
    dateOfDeparture,
    submitting,
    submitError,
    setStep,
    setDateOfArrival,
    setDateOfDeparture,
    setSelectedGift,
    handleSubmit,
  } = useGiftWizard();

  const isAdmin =
    window.location.search.includes("admin") ||
    window.location.pathname === "/admin";

  return (
    <>
      <div className="flex min-h-screen items-center justify-center p-6">
        <FloatingHearts />

        {isAdmin ? (
          <AdminPanel />
        ) : (
          <>
            {step === 1 && <AskView onNext={() => setStep(2)} />}

            {step === 2 && <ConfirmView onNext={() => setStep(3)} />}

            {step === 3 && (
              <DatesView
                onNext={() => setStep(4)}
                dateOfArrival={dateOfArrival}
                dateOfDeparture={dateOfDeparture}
                setDateOfArrival={setDateOfArrival}
                setDateOfDeparture={setDateOfDeparture}
                isDatesValid={isDatesValid}
              />
            )}

            {step === 4 && (
              <GiftView
                handleSubmit={handleSubmit}
                submitting={submitting}
                selectedGift={selectedGift}
                setSelectedGift={setSelectedGift}
              />
            )}

            {step === 5 && (
              <DoneView
                dateOfArrival={dateOfArrival}
                dateOfDeparture={dateOfDeparture}
                selectedGift={selectedGift}
                submitError={submitError}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
