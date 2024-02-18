import Link from "next/link";
import Image from "next/image";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center p-4 text-white bg-neutral-950">
      <Link href="/">
        <MdOutlineAttachMoney size={24} />
      </Link>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row justify-between gap-4">
          <Link
            href={"/user/signup"}
            className="px-4 py-1 rounded-full bg-blue-500"
          >
            Sign Up
          </Link>
          <Link href={"/user/signin"} className="px-4 py-1 rounded-full ">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}
