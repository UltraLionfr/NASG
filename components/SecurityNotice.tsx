"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function SecurityNotice() {
  return (
    <motion.div
      className="mt-4 flex items-start gap-2 rounded-xl border border-sky-500/30 bg-black/50 p-3 font-mono text-xs text-sky-300"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
    >
      <Lock className="h-4 w-4 mt-0.5 shrink-0 text-sky-400" />
      <p>
        No secrets generated are saved or transmitted.  
        Everything is generated <span className="text-white font-semibold">locally</span> in your browser.
      </p>
    </motion.div>
  );
}
