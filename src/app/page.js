'use client';
import TypingHero from "@/tests/TypingHero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Link href="/dashboard">
        <button>Dashboard</button>
      </Link>
    </div>
  );
}
