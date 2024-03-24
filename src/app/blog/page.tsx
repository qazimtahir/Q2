import React from "react";
import Link from "next/link";
//import Settings from "./settings/page";
import { profile } from "console";

function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to Blog Page</h1>
      <h3>Lets understand routing in Next.JS</h3>
      <h2>
        <Link href={"/settings"}>Click here to move Settings Page</Link>
      </h2>
      <h2>
        <Link href={"settings/profile"}>Click here to move Profile Page</Link>
      </h2>
      <h2>
        <Link href="/">Click here to move Home Page Page</Link>
      </h2>
    </main>
  );
}

export default Blog;
