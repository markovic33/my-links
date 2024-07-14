import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import Link from "next/link";
import { LineChartIcon, LogOut } from "lucide-react";
import React from "react";
import MobileMenu from "./MobileNavbar";

export default async function Navbar() {
  const { userId } = auth();

  let user = null;

  if (userId) {
    user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: {
        clerkId: true,
        email: true,
        username: true,
        name: true,
      },
    });
  }

  return (
    <div className="w-full px-10 flex items-center justify-between py-4 border-b-2">
      <div className="flex items-center justify-center gap-x-10">
        <div className="flex items-center justify-center gap-x-2">
          <LineChartIcon className="w-4 h-4" />
          <Link href={"/"} className="hidden lg:flex hover:text-cyan-500">
            My Links
          </Link>
        </div>

        <div className="hidden  lg:flex items-center justify-center gap-x-4">
          <Link href="/" className="hover:text-cyan-500">
            Home
          </Link>
          <Link href="/wall" className="hover:text-cyan-500">
            Wall
          </Link>
          <Link href="/" className="hover:text-cyan-500">
            Contact
          </Link>
        </div>
      </div>

      <MobileMenu />

      <div className="flex items-center justify-center gap-x-2">
        {!user ? (
          <>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/sign-up">Sign Up</Link>
          </>
        ) : (
          <div className=" flex items-center justify-center gap-x-4">
            <h1>Hello, </h1>
            <Link
              href={`/profile/${user.clerkId}`}
              className="flex items-center justify-center font-medium hover:text-cyan-500"
            >
              {user.username ? (
                <h1 className="">@{user.username}</h1>
              ) : user.name ? (
                <h1 className="">@{user.name}</h1>
              ) : (
                <h1 className="">@{user.email}</h1>
              )}
            </Link>

            <Link href="/sign-out" className="flex items-center justify-center">
              <LogOut className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
