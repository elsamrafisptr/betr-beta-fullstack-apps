import { db } from "../config";
import {
  doc,
  getDoc,
  DocumentSnapshot,
  FirestoreError,
} from "firebase/firestore";

interface GetDocumentResult {
  result: DocumentSnapshot | null;
  error: FirestoreError | null;
}

export default async function getDocument(
  collection: string,
  id: string
): Promise<GetDocumentResult> {
  const docRef = doc(db, collection, id);

  let result: DocumentSnapshot | null = null;
  let error: FirestoreError | null = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e as FirestoreError;
  }

  return { result, error };
}
