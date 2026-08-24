import Link from "next/link";

import type { AnyContent } from "@/content/types";
import { getRelatedContent } from "@/content/relationships";

interface RelatedContentProps {
  content: AnyContent;
  locale: string;
}

function getContentHref(
  item: AnyContent,
  locale: string,
): string {
  return `/${locale}/${item.type}s/${item.taxonomy.category}/${item.taxonomy.subcategory}/${item.slug}`;
}

function getSectionLabel(type: AnyContent["type"]): string {
  switch (type) {
    case "prompt":
      return "Prompt";
    case "skill":
      return "Skill";
    case "workflow":
      return "Workflow";
  }
}

export default function RelatedContent({
  content,
  locale,
}: RelatedContentProps) {
  const related = getRelatedContent(content);

  const sections = [
    {
      key: "prompts",
      title: "Explore More Prompts",
      description:
        "Try another ready-to-use prompt for a related task or use case.",
      items: related.prompts,
    },
    {
      key: "skills",
      title: "Build the Skill",
      description:
        "Learn the underlying skill that helps you get better results.",
      items: related.skills,
    },
    {
      key: "workflows",
      title: "Put It Into a Workflow",
      description:
        "Turn the idea into a repeatable process you can actually use.",
      items: related.workflows,
    },
  ].filter((section) => section.items.length > 0);

  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-slate-200 pt-10">
      {/* Explore introduction */}
      <div className="mb-8">
        <p className="section-eyebrow">
          Keep exploring
        </p>

        <h2 className="section-title">
          Ready to keep going?
        </h2>

        <p className="section-description max-w-2xl">
          Explore related prompts, skills, and workflows
          to discover more ways to use AI for the task you
          are working on.
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.key}>
            {/* Section heading */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">
                {section.title}
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {section.description}
              </p>
            </div>

            {/* Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  key={item.id}
                  href={getContentHref(item, locale)}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
                >
                  {/* Metadata */}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                      {getSectionLabel(item.type)}
                    </span>

                    <span className="text-xs capitalize text-slate-400">
                      {item.difficulty}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-semibold leading-6 text-slate-950 transition-colors group-hover:text-slate-700">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {/* Tags */}
                  {item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-500"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-5">
                    <span className="inline-flex items-center text-sm font-semibold text-slate-700 transition-colors group-hover:text-slate-950">
                      Explore {getSectionLabel(item.type)}
                      <span
                        aria-hidden="true"
                        className="ml-1.5 transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Browse everything */}
      <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 sm:flex-row sm:items-center sm:px-6">
        <div>
          <h3 className="text-sm font-semibold text-slate-950">
            Want to explore more?
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Browse the full PromptFlowAS library and discover
            prompts for different goals and situations.
          </p>
        </div>

        <Link
          href={`/${locale}/prompts`}
          className="inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        >
          Browse All Prompts
          <span
            aria-hidden="true"
            className="ml-1.5"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}