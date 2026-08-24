"use client";

import Image from "next/image";

import {
  getEnabledLLMProviders,
} from "@/config/llm-providers";

interface LLMLauncherProps {
  prompt: string;
}

export default function LLMLauncher({
  prompt,
}: LLMLauncherProps) {
  const providers = getEnabledLLMProviders();

  function buildLaunchUrl(
    providerId: string,
  ): string {
    const encodedPrompt = encodeURIComponent(prompt);

    switch (providerId) {
      case "chatgpt":
        return `https://chatgpt.com/?q=${encodedPrompt}`;

      case "claude":
        return `https://claude.ai/new?q=${encodedPrompt}`;

      case "gemini":
        return `https://gemini.google.com/app?prompt=${encodedPrompt}`;

      case "grok":
        return `https://grok.com/?q=${encodedPrompt}`;

      default:
        return "";
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Run Prompt
        </p>

        <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
          Choose your AI assistant
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Open this prompt in the AI model you prefer.
        </p>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
        {providers.map((provider) => {
          const launchUrl = buildLaunchUrl(
            provider.id,
          );

          if (!launchUrl) {
            return null;
          }

          return (
            <a
              key={provider.id}
              href={launchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-slate-300 hover:bg-slate-50"
              aria-label={`Launch in ${provider.name}`}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
                <Image
                  src={provider.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-950">
                    {provider.name}
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-sm text-slate-400 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </div>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {provider.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
        <p className="text-xs leading-5 text-slate-500">
          Your prompt is passed to the selected AI service.
          You may need to be signed in to use it.
        </p>
      </div>
    </section>
  );
}