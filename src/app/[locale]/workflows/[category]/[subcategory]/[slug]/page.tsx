import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getCategory,
  getSubcategory,
} from "@/content/taxonomy";
import { getContentBySlug } from "@/lib/content/registry";
import RelatedContent from "@/components/shared/related-content";

interface WorkflowDetailPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
    slug: string;
  }>;
}

export default async function WorkflowDetailPage({
  params,
}: WorkflowDetailPageProps) {
  const {
    locale,
    category,
    subcategory,
    slug,
  } = await params;

  const categoryData = getCategory(category);
  const subcategoryData = getSubcategory(
    category,
    subcategory,
  );

  if (!categoryData || !subcategoryData) {
    notFound();
  }

  const workflow = getContentBySlug(
    "workflow",
    slug,
  );

  if (!workflow) {
    notFound();
  }

  if (
    workflow.taxonomy.category !== category ||
    workflow.taxonomy.subcategory !== subcategory
  ) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >
        <Link
          href={`/${locale}/workflows`}
          className="transition-colors hover:text-blue-600"
        >
          Workflows
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/workflows/${category}`}
          className="transition-colors hover:text-blue-600"
        >
          {categoryData.name.en}
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/workflows/${category}/${subcategory}`}
          className="transition-colors hover:text-blue-600"
        >
          {subcategoryData.name.en}
        </Link>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Workflow
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
            {workflow.difficulty}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {workflow.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          {workflow.description}
        </p>
      </header>

      {/* Goal */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-lg font-semibold text-slate-950">
          Goal
        </h2>

        <p className="leading-7 text-slate-600">
          {workflow.goal}
        </p>
      </section>

      {/* Who it's for */}
      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-950">
          Who it&apos;s for
        </h2>

        <p className="leading-7 text-slate-600">
          {workflow.whoItsFor}
        </p>
      </section>

      {/* Requirements */}
      {workflow.requirements &&
        workflow.requirements.length > 0 && (
          <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-950">
              Requirements
            </h2>

            <ul className="space-y-3">
              {workflow.requirements.map(
                (requirement) => (
                  <li
                    key={requirement}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                    <span>{requirement}</span>
                  </li>
                ),
              )}
            </ul>
          </section>
        )}

      {/* Steps */}
      <section className="mb-8">
        <h2 className="mb-5 text-xl font-semibold text-slate-950">
          Workflow steps
        </h2>

        <div className="space-y-4">
          {workflow.steps.map((step, index) => (
            <article
              key={`${step.title}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex gap-4">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tips */}
      {workflow.tips &&
        workflow.tips.length > 0 && (
          <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-950">
              Tips
            </h2>

            <ul className="space-y-3">
              {workflow.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />

                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

      {/* Related content */}
      <RelatedContent
        content={workflow}
        locale={locale}
      />

      {/* Tags */}
      {workflow.tags.length > 0 && (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold text-slate-950">
            Tags
          </h2>

          <div className="flex flex-wrap gap-2">
            {workflow.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}