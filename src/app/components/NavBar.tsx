"use client";

import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center space-x-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:opacity-90">
          ShopWise AI
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Home
          </Link>
          <Show when="signed-in">
            <Link href="/dashboard" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Dashboard
            </Link>
          </Show>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Show when="signed-out">
          <Link href="/sign-in" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mr-2">
            Sign In
          </Link>
          <Link href="/sign-up">
            <Button className="text-sm font-medium">
              Get Started
            </Button>
          </Link>
        </Show>
        <Show when="signed-in">
          <Link href="/dashboard" className="mr-2">
            <Button className="text-sm font-medium bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 !from-transparent !to-transparent !shadow-none">
              Go to Dashboard
            </Button>
          </Link>
          <UserButton />
        </Show>
      </div>
    </nav>
  );
}

