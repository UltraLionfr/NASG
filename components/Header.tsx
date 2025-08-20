"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Header() {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur-sm">
        <Shield className="h-3.5 w-3.5" />
        secure • 32 bytes Base64
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
        Auth secret generator
      </h1>
      <p className="mt-2 text-sm text-neutral-300">
        Generate a cryptographically-secure secret for your Next.js apps.
      </p>
    </motion.div>
  );
}
