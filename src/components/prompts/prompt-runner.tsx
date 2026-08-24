"use client";

import { useMemo, useState } from "react";

import PromptActions from "@/components/prompts/prompt-actions";
import PromptEditor from "@/components/prompts/prompt-editor";
import LLMLauncher from "@/components/prompts/llm-launcher";

import type { PromptContent } from "@/content/types";

interface PromptRunnerProps {
  prompt: PromptContent;
}

const responseLanguages = [
  "English",
  "Assamese",
  "Hindi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Urdu",
  "Odia",
  "Malayalam",
  "Kannada",
  "Nepali",
  "French",
  "German",
  "Spanish",
  "Portuguese",
  "Japanese",
  "Korean",
  "Chinese",
  "Arabic",
];

export default function PromptRunner({
  prompt,
}: PromptRunnerProps) {
  const initialPrompt = useMemo(() => {
    const variables = prompt.variables ?? [];

    return variables.reduce(
      (result, variable) => {
        const value =
          variable.defaultValue ??
          variable.example ??
          variable.placeholder ??
          "";

        const escapedName =
          escapeRegExp(variable.name);

        return result.replace(
          new RegExp(
            `\\{\\{\\s*${escapedName}\\s*\\}\\}`,
            "g",
          ),
          value,
        );
      },
      prompt.prompt,
    );
  }, [prompt]);

  const [generatedPrompt, setGeneratedPrompt] =
    useState(initialPrompt);

  const [responseLanguage, setResponseLanguage] =
    useState("English");

  const [useLanguageInstruction, setUseLanguageInstruction] =
    useState(false);

  const finalPrompt = useMemo(() => {
    if (!useLanguageInstruction) {
      return generatedPrompt;
    }

    return `${generatedPrompt}

Respond entirely in ${responseLanguage}.`;
  }, [
    generatedPrompt,
    responseLanguage,
    useLanguageInstruction,
  ]);

  return (
    <div className="space-y-6">
      <PromptEditor
        prompt={prompt}
        onPromptChange={setGeneratedPrompt}
      />

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
          <h3 className="text-base font-semibold tracking-tight text-slate-950">
            Ready to use?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Copy your customized prompt or launch it directly in an AI assistant.
            You can also ask the AI to reply in your preferred language.
          </p>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="min-w-0 flex-1">
                <label
                  htmlFor="prompt-response-language"
                  className="text-sm font-semibold text-slate-900"
                >
                  Response language
                </label>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Ask the AI assistant to respond entirely in your chosen language.
                </p>

                <select
                  id="prompt-response-language"
                  value={responseLanguage}
                  onChange={(event) =>
                    setResponseLanguage(
                      event.target.value,
                    )
                  }
                  disabled={!useLanguageInstruction}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 sm:max-w-sm"
                >
                  {responseLanguages.map(
                    (language) => (
                      <option
                        key={language}
                        value={language}
                      >
                        {language}
                      </option>
                    ),
                  )}
                </select>
              </div>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 sm:shrink-0">
                <input
                  type="checkbox"
                  checked={useLanguageInstruction}
                  onChange={(event) =>
                    setUseLanguageInstruction(
                      event.target.checked,
                    )
                  }
                  className="size-4 rounded border-slate-300"
                />

                <span className="text-sm font-medium text-slate-700">
                  Reply in this language
                </span>
              </label>
            </div>

            {useLanguageInstruction && (
              <div className="mt-4 rounded-lg border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs font-medium text-slate-500">
                  Added to your prompt
                </p>

                <p className="mt-1 text-sm font-medium text-slate-800">
                  Respond entirely in {responseLanguage}.
                </p>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <PromptActions
              prompt={finalPrompt}
            />
          </div>
        </div>
      </section>

      <LLMLauncher
        prompt={finalPrompt}
      />
    </div>
  );
}

function escapeRegExp(
  value: string,
): string {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&",
  );
}