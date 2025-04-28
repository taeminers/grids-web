import Link from "next/link";

export default function Home() {
  return (
    <div>
      Static
      <br />
      <Link href="dashboard">Dashboard Page</Link>
      <br />
      <Link href="about">About Page</Link>
      <Link href="wowzers">Cookies</Link>
    </div>
  );
}
