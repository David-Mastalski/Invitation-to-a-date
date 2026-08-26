import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const DOCUMENT_ID = "demo_response";
const COLLECTION_NAME = "demo_collection"

export async function saveData({
  dateOfArrival,
  dateOfDeparture,
  giftValueToSend,
}) {
  const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
  await setDoc(docRef, {
    dateOfArrival,
    dateOfDeparture,
    gift: giftValueToSend,
    creation_date: serverTimestamp(),
  });
}

export async function fetchData() {
  const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
  const response = await getDoc(docRef);

  if (response.exists()) {
    return response.data();
  } else {
    return null;
  }
}
