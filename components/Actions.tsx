"use client";

import { motion } from "framer-motion";
import { Check, Copy, RefreshCw } from "lucide-react";

type Props = {
  secret: string;
  copiedEnv: boolean;
  onGenerate: () => void;
  onCopyEnv: () => void;
};

export default function Actions({ secret, copiedEnv, onGenerate, onCopyEnv }: Props) {
  return (
    <motion.div
      className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
    >
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onGenerate}
        className="group inline-flex justify-center items-center gap-2 rounded-2xl border border-sky-500/30 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-300 ring-sky-500/40 transition hover:bg-sky-500/15 focus:outline-none focus:ring-4"
      >
        <RefreshCw className="h-4 w-4 transition group-hover:rotate-90" />
        Generate
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={onCopyEnv}
        className="inline-flex justify-center items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-white/15"
        aria-label="Copy .env line"
        title={copiedEnv ? "Copied" : "Copy .env"}
      >
        <span className="font-semibold">.env</span>
        {copiedEnv ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </motion.button>
    </motion.div>
  );
}