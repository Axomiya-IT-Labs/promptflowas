import Link from "next/link";

import type { PromptContent } from "@/content/types";

interface PromptCardProps {
  prompt: PromptContent;
  locale: string;
}

export default function PromptCard({
  prompt,
  locale,
}: PromptCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
          Prompt
        </span>

        <span className="text-xs font-medium capitalize text-slate-500">
          {prompt.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
        <Link
          href={`/${locale}/prompts/${prompt.taxonomy.category}/${prompt.taxonomy.subcategory}/${prompt.slug}`}
          className="focus:outline-none"
        >
          {prompt.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
        {prompt.description}
      </p>

      {prompt.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {prompt.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-5">
        <Link
          href={`/${locale}/prompts/${prompt.taxonomy.category}/${prompt.taxonomy.subcategory}/${prompt.slug}`}
          className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          View prompt
          <span
            aria-hidden="true"
            className="ml-1 transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}