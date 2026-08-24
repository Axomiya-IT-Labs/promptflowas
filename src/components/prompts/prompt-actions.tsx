"use client";

import { useState } from "react";

interface PromptActionsProps {
  prompt: string;
}

export default function PromptActions({
  prompt,
}: PromptActionsProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {
        await navigator.clipboard.writeText(prompt);
      } else {
        const textarea =
          document.createElement("textarea");

        textarea.value = prompt;

        textarea.style.position = "fixed";
        textarea.style.opacity = "0";

        document.body.appendChild(textarea);

        textarea.focus();
        textarea.select();

        document.execCommand("copy");

        document.body.removeChild(textarea);
      }

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
    >
      <span aria-hidden="true">
        {copied ? "✓" : "⧉"}
      </span>

      {copied ? "Copied" : "Copy Prompt"}
    </button>
  );
}