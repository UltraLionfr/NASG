"use client";

import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-neutral-400 flex items-center gap-1">
      <span>Made with</span>
      <FaHeart className="text-red-500" />
      <span>by</span>
      <a
        href="https://ultralion.xyz"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-white hover:text-sky-400 transition"
      >
        UltraLion
      </a>
    </footer>
  );
}
