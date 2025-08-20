"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

type Props = {
  secret: string;
  copied: boolean;
  onCopy: () => void;
};

export default function SecretCard({ secret, copied, onCopy }: Props) {
  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 text-white shadow-md">
      <div className="flex items-center gap-3 p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={secret}
            className="flex-1 max-h-24 overflow-y-auto break-all font-mono text-sm opacity-90"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {secret}
          </motion.div>
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={onCopy}
          className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10"
          aria-label="Copy secret"
          title={copied ? "Copied" : "Copy"}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </motion.button>
      </div>
    </div>
  );
}
