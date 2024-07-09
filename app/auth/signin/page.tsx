"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import signIn from "@/lib/firebase/auth/signin";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/admin");
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="wrapper flex w-full h-screen justify-center items-center">
      <div className="form-wrapper flex flex-col gap-6 p-6 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
        <h1 className="font-medium text-xl">Sign In</h1>
        <form onSubmit={handleForm} className="form flex flex-col gap-4">
          <label htmlFor="email">
            <p className="text-gray-100">Email</p>
            <input
              onChange={handleEmailChange}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="px-4 py-2 rounded mt-1 text-black"
            />
          </label>
          <label htmlFor="password">
            <p className="text-gray-100">Password</p>
            <input
              onChange={handlePasswordChange}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="px-4 py-2 rounded mt-1 text-black"
            />
          </label>
          <button
            type="submit"
            className="bg-white py-3 rounded text-black font-medium"
          >
            Sign In
          </button>
          <Link href={"/auth/signup"} className="text-sm underline text-center">
            {"Don't have any account? Sign Up"}
          </Link>
          <Link href={"/"} className="underline text-sm text-center">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
