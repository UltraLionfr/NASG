"use client";

import Actions from "@/components/Actions";
import Background from "@/components/Background";
import Header from "@/components/Header";
import SecretCard from "@/components/SecretCard";
import SecurityNotice from "@/components/SecurityNotice";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { generateSecret } from "@/lib/generateSecret";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function Page() {
  const [secret, setSecret] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedEnv, setCopiedEnv] = useState(false);

  useEffect(() => setSecret(generateSecret()), []);

  const handleGenerate = () => {
    const s = generateSecret();
    setSecret(s);
    setCopied(false);
    setCopiedEnv(false);
    toast.success("New secret generated!", { id: "generate", duration: 1200 });
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 text-white">
      <Background />

      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative mx-auto rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-8 -top-0.5 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          <Header />

          <Actions
            secret={secret}
            copiedEnv={copiedEnv}
            onGenerate={handleGenerate}
            onCopyEnv={() => copyToClipboard(`NEXTAUTH_SECRET=${secret}`, setCopiedEnv, ".env")}
          />

          <SecretCard
            secret={secret}
            copied={copied}
            onCopy={() => copyToClipboard(secret, setCopied, "Secret")}
          />

          <p className="mt-3 text-center text-xs text-neutral-400">
            Copies: secret only or the full{" "}
            <code className="rounded bg-white/10 px-1 py-0.5">NEXTAUTH_SECRET=...</code> line.
          </p>

          <SecurityNotice />
        </div>
      </motion.div>

      <Toaster position="bottom-center" />
    </main>
  );
}