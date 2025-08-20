"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function GithubLink() {
  const [hover, setHover] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link
        href="https://github.com/UltraLionfr/nasg"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative flex items-center justify-center"
      >
        {/* Icône GitHub */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur transition-colors group-hover:bg-black/80"
        >
          <FaGithub className="h-5 w-5 text-white" />
        </motion.div>

        {/* Tooltip au survol */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-black/80 px-3 py-1.5 text-xs text-white shadow-lg backdrop-blur"
        >
          View on GitHub
        </motion.div>
      </Link>
    </div>
  );
}