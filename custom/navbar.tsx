"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { signOut } from "@/auth";
import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <nav className="w-full px-2 py-4 bg-slate-50/70 absolute border-b border-slate-200 top-0 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold">My App</span>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Button
              variant="outline"
              className="text-sm"
              onClick={() => signOut()}
            >
              Signout
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
