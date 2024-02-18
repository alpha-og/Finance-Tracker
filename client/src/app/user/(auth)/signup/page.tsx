"use client";

import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, Input } from "@/components/components";
import { useState } from "react";

export default function Signup() {
  const [errorToastVisibility, setErrorToastVisibility] = useState<
    "hidden" | "visible"
  >("hidden");
  console.log(errorToastVisibility);
  return (
    <div
      className="w-80 sm:w-[28rem] min-h-3/4 p-8 sm:p-12 flex flex-col justify-center items-center gap-8 bg-neutral-950 rounded-lg shadow-lg shadow-black ease-in-out duration-300"
      onSubmit={(e) => e.preventDefault()}
    >
      <FaUserCircle className="w-14 sm:w-16 h-14 sm:h-16 flex-shrink-0 flex-grow-0 ease-in-out duration-300" />
      <h1 className="w-full text-3xl sm:text-4xl text-center text-white font-bold ease-in-out duration-300">
        Sign up
      </h1>
      <form className="w-full flex flex-col justify-center items-center gap-4 text-sm sm:text-md ease-in-out duration-300">
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <Button type="submit">Sign up</Button>
        <Button type="submit">
          <FcGoogle size={28} />
          <p>Sign up with Google</p>
        </Button>
      </form>
      <p className="w-full text-center text-neutral-500 ease-in-out duration-300">
        Already have an account?
        <Link
          href={"/user/signin"}
          className="text-white hover:text-blue-500 ease-in-out duration-300"
        >
          {" "}
          Sign in
        </Link>
      </p>
    </div>
  );
}
