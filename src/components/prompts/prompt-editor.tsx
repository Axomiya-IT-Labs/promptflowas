"use client";

import { useMemo, useState } from "react";

import type {
  PromptContent,
  PromptVariable,
} from "@/content/types";

interface PromptEditorProps {
  prompt: PromptContent;
  onPromptChange?: (prompt: string) => void;
}

function getInitialValue(
  variable: PromptVariable,
): string {
  return (
    variable.defaultValue ??
    variable.example ??
    variable.placeholder ??
    ""
  );
}

function replaceVariables(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(
    /\{\{\s*([^}]+)\s*\}\}/g,
    (match, variableName: string) => {
      const name = variableName.trim();

      return Object.prototype.hasOwnProperty.call(
        values,
        name,
      )
        ? values[name]
        : match;
    },
  );
}

export default function PromptEditor({
  prompt,
  onPromptChange,
}: PromptEditorProps) {
  const variables = prompt.variables ?? [];

  const initialValues = useMemo(() => {
    return Object.fromEntries(
      variables.map((variable) => [
        variable.name,
        getInitialValue(variable),
      ]),
    );
  }, [variables]);

  const [values, setValues] =
    useState<Record<string, string>>(initialValues);

  const generatedPrompt = useMemo(
    () => replaceVariables(prompt.prompt, values),
    [prompt.prompt, values],
  );

  function updateValue(
    name: string,
    value: string,
  ) {
    const nextValues = {
      ...values,
      [name]: value,
    };

    setValues(nextValues);

    const nextPrompt = replaceVariables(
      prompt.prompt,
      nextValues,
    );

    onPromptChange?.(nextPrompt);
  }

  if (variables.length === 0) {
    return (
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            Prompt Recipe
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            This prompt is ready to copy or run with your preferred AI assistant.
          </p>
        </div>

        <div className="bg-slate-950 p-5 sm:p-6">
          <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-100">
            {prompt.prompt}
          </pre>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          Prompt Recipe
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Fill in the variables below. Your prompt updates automatically as you edit.
        </p>
      </div>

      <div className="border-b border-slate-200 bg-slate-50/70 px-5 py-5 sm:px-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-slate-950">
            Variables
          </h3>

          <span className="text-xs font-medium text-slate-500">
            {variables.length}{" "}
            {variables.length === 1
              ? "variable"
              : "variables"}
          </span>
        </div>

        <div className="space-y-4">
          {variables.map((variable) => {
            const value =
              values[variable.name] ?? "";

            return (
              <div key={variable.name}>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <label
                    htmlFor={`prompt-variable-${variable.name}`}
                    className="text-sm font-semibold text-slate-900"
                  >
                    {variable.name}
                  </label>

                  {variable.required && (
                    <span className="text-xs font-medium text-slate-500">
                      Required
                    </span>
                  )}
                </div>

                <input
                  id={`prompt-variable-${variable.name}`}
                  type="text"
                  value={value}
                  onChange={(event) =>
                    updateValue(
                      variable.name,
                      event.target.value,
                    )
                  }
                  placeholder={
                    variable.placeholder ??
                    variable.example ??
                    `Enter ${variable.name}`
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                />

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {variable.description}
                </p>

                {variable.example && (
                  <p className="mt-1 text-xs text-slate-400">
                    Example: {variable.example}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
          <h3 className="text-sm font-semibold text-slate-950">
            Live Prompt
          </h3>

          <span className="text-xs font-medium text-slate-500">
            Updates live
          </span>
        </div>

        <div className="bg-slate-950 p-5 sm:p-6">
          <pre className="whitespace-pre-wrap break-words text-sm leading-7 text-slate-100">
            {generatedPrompt}
          </pre>
        </div>
      </div>
    </section>
  );
}