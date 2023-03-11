import { getAuth, signInAnonymously } from "firebase/auth";
import { set, ref } from "firebase/database";
import { db } from "./firebase";

export async function sendMessage(message) {
  const auth = getAuth();
  const { user } = await signInAnonymously(auth);

  if (!user) throw new Error("Failed to authenticate user.");
  await set(ref(db, `messages/${user.uid}`), message);
}

export async function addSubscriber(email) {
  const auth = getAuth();
  const { user } = await signInAnonymously(auth);

  if (!user) throw new Error("Failed to authenticate user.");

  await set(ref(db, `subscribers/${user.uid}`), email);
}
