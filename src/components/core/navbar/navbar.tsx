import Link from "next/link";

import { Toggle } from "../toggle/toggle";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6 px-12  border-zinc-800 border-2">
      <div>Logo</div>
      <Link href="about">About</Link>
      <div className="flex gap-4 items-center">
        <div>Lang Toggle</div>
        <Toggle />
      </div>
    </nav>
  );
};
