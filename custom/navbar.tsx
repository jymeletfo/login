import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";

export default function Navbar() {
  return (
    <nav className="w-full px-2 py-4 bg-slate-50/70 absolute border-b border-slate-200 top-0 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
}
