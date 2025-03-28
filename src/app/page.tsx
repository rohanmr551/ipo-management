"use client";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">Next.js Theme Toggle</h1>
      <p>Current Theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </main>
  );
}
