import { auth } from "../config";
import {
  signInWithEmailAndPassword,
  AuthError,
  UserCredential,
} from "firebase/auth";

interface SignInResult {
  result: UserCredential | null;
  error: AuthError | null;
}

export default async function signIn(
  email: string,
  password: string
): Promise<SignInResult> {
  let result: UserCredential | null = null;
  let error: AuthError | null = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e as AuthError;
  }

  return { result, error };
}
