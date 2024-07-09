import { db } from "../config";
import { setDoc, doc, FirestoreError } from "firebase/firestore";

interface AddDataResult {
  result: void | null;
  error: FirestoreError | null;
}

export default async function addData(
  collection: string,
  id: string,
  data: object
): Promise<AddDataResult> {
  let result: void | null = null;
  let error: FirestoreError | null = null;

  try {
    result = await setDoc(doc(db, collection, id), data, { merge: true });
  } catch (e) {
    error = e as FirestoreError;
  }

  return { result, error };
}
