import Link from "next/link";

import type { SkillContent } from "@/content/types";

interface SkillCardProps {
  skill: SkillContent;
  locale: string;
}

export default function SkillCard({
  skill,
  locale,
}: SkillCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
          Skill
        </span>

        <span className="text-xs font-medium capitalize text-slate-500">
          {skill.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
        <Link
          href={`/${locale}/skills/${skill.taxonomy.category}/${skill.taxonomy.subcategory}/${skill.slug}`}
          className="focus:outline-none"
        >
          {skill.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
        {skill.description}
      </p>

      {skill.coreConcepts.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {skill.coreConcepts.slice(0, 3).map((concept) => (
            <span
              key={concept}
              className="rounded-md bg-slate-50 px-2 py-1 text-xs text-slate-500"
            >
              {concept}
            </span>
          ))}
        </div>
      )}

      {skill.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {skill.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-5">
        <Link
          href={`/${locale}/skills/${skill.taxonomy.category}/${skill.taxonomy.subcategory}/${skill.slug}`}
          className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          View skill
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