import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button, Input } from "@/components/components";

export default function Signin() {
  return (
    <div className="w-80 sm:w-[28rem] min-h-3/4 p-8 sm:p-12 flex flex-col justify-center items-center gap-8 bg-neutral-950 rounded-lg shadow-lg shadow-black ease-in-out duration-300">
      <FaUserCircle className="w-14 sm:w-16 h-14 sm:h-16 flex-shrink-0 flex-grow-0 ease-in-out duration-300" />
      <h1 className="w-full text-3xl sm:text-4xl text-center text-white font-bold ease-in-out duration-300">
        Sign in
      </h1>
      <form className="w-full flex flex-col justify-center items-center gap-4 text-sm sm:text-md ease-in-out duration-300">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit">Sign in</Button>
        <Button type="submit">
          <FcGoogle size={28} />
          <p>Sign in with Google</p>
        </Button>
      </form>
      <p className="w-full text-center text-neutral-500 ease-in-out duration-300">
        Don't have an account?
        <Link
          href={"/user/signup"}
          className="text-white hover:text-blue-500 ease-in-out duration-300"
        >
          {" "}
          Sign up
        </Link>
      </p>
    </div>
  );
}
