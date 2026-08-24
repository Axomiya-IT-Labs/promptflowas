import Link from "next/link";

import type { WorkflowContent } from "@/content/types";

interface WorkflowCardProps {
  workflow: WorkflowContent;
  locale: string;
}

export default function WorkflowCard({
  workflow,
  locale,
}: WorkflowCardProps) {
  const { category, subcategory } = workflow.taxonomy;

  return (
    <Link
      href={`/${locale}/workflows/${category}/${subcategory}/${workflow.slug}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      {/* Type */}
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
          Workflow
        </span>

        <span className="text-xs font-medium capitalize text-slate-400">
          {subcategory.replace(/-/g, " ")}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
        {workflow.title}
      </h3>

      {/* Description */}
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
        {workflow.description}
      </p>

      {/* Tags */}
      {workflow.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {workflow.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs font-medium capitalize text-slate-400">
          {category.replace(/-/g, " ")}
        </span>

        <span className="text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-0.5">
          View workflow →
        </span>
      </div>
    </Link>
  );
}