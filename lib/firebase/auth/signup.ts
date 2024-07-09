import { auth } from "../config";
import {
  createUserWithEmailAndPassword,
  AuthError,
  UserCredential,
} from "firebase/auth";

interface SignUpResult {
  result: UserCredential | null;
  error: AuthError | null;
}

export default async function signUp(
  email: string,
  password: string
): Promise<SignUpResult> {
  let result: UserCredential | null = null;
  let error: AuthError | null = null;

  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e as AuthError;
  }

  return { result, error };
}
