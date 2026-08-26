import { useState } from "react";
import { saveData } from "../firebase";
import { GIFTS } from "../constants/gifts";

export function useGiftWizard() {
  const [step, setStep] = useState(1);
  const [dateOfArrival, setDateOfArrival] = useState("");
  const [dateOfDeparture, setDateOfDeparture] = useState("");
  const [selectedGift, setSelectedGift] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const isDatesValid =
    dateOfArrival !== "" &&
    dateOfDeparture !== "" &&
    dateOfDeparture >= dateOfArrival;

  async function handleSubmit() {
    setSubmitting(false);
    setSubmitError(false);

    const giftObject = GIFTS.find((g) => g.id === selectedGift);
    const giftValueToSend = giftObject?.value ?? selectedGift;

    try {
      await saveData({ dateOfArrival, dateOfDeparture, giftValueToSend });
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setSubmitting(true);
      setStep(5);
    }
  }

  return {
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
  };
}
