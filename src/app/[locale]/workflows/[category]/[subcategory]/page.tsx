import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

import {
  getCategory,
  getSubcategory,
} from "@/content/taxonomy";
import { getContentBySubcategory } from "@/lib/content";

interface WorkflowSubcategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
  }>;
}

export default function WorkflowSubcategoryPage({
  params,
}: WorkflowSubcategoryPageProps) {
  const { locale, category, subcategory } = use(params);

  const categoryData = getCategory(category);
  const subcategoryData = getSubcategory(
    category,
    subcategory,
  );

  if (!categoryData || !subcategoryData) {
    notFound();
  }

  const workflows = getContentBySubcategory(
    "workflow",
    category,
    subcategory,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
          <Link
            href={`/${locale}/workflows`}
            className="hover:text-blue-600"
          >
            Workflows
          </Link>

          <span>/</span>

          <Link
            href={`/${locale}/workflows/${category}`}
            className="hover:text-blue-600"
          >
            {categoryData.name.en}
          </Link>
        </div>

        <p className="mb-2 text-sm font-medium text-blue-600">
          {categoryData.name.en} Workflows
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {subcategoryData.name.en}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Explore practical AI workflows for{" "}
          {subcategoryData.name.en.toLowerCase()}.
        </p>
      </header>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-slate-950">
          Workflows
        </h2>

        {workflows.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <h3 className="font-semibold text-slate-900">
              No workflows yet
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Workflows for this category will appear here as
              content is added.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {workflows.map((workflow) => (
              <Link
                key={workflow.slug}
                href={`/${locale}/workflows/${category}/${subcategory}/${workflow.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
              >
                <h3 className="font-semibold text-slate-950 group-hover:text-blue-600">
                  {workflow.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {workflow.description}
                </p>

                {workflow.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {workflow.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <span className="mt-4 inline-block text-sm font-medium text-blue-600">
                  View workflow →
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}