import Image from "next/image";
import Link from "next/link";
import Settings from "./settings/page";
import { profile } from "console";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Home Page</h1>
      <h3>Lets understand routing in Next.JS</h3>
      <h2>
        <Link href="/settings">Click here to move Settings Page</Link>
      </h2>
      <h2>
        <Link href={"settings/profile"}>Click here to move Profile Page</Link>
      </h2>
      <h2>
        <Link href={"blog"}>Click here to move Blog Page</Link>
      </h2>
      <h3>Muhammad Tahir Iqbal</h3>
      <div>
        <h4>Date: 25/03/2024</h4>
      </div>
    </main>
  );
}
