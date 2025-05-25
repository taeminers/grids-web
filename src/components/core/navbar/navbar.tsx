import Link from "next/link";

import { Toggle } from "../toggle/toggle";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-2 border-zinc-800 p-6 px-12">
      <div>Logo</div>
      <Link href="about">About</Link>
      <div className="flex items-center gap-4">
        <div>Lang Toggle</div>
        <Toggle />
      </div>
    </nav>
  );
};
