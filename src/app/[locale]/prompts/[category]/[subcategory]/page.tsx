import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getCategory,
  getSubcategory,
} from "@/content/taxonomy";
import { getContentBySubcategory } from "@/lib/content/registry";

interface PromptSubcategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
  }>;
}

export default async function PromptSubcategoryPage({
  params,
}: PromptSubcategoryPageProps) {
  const {
    locale,
    category,
    subcategory,
  } = await params;

  const categoryData = getCategory(category);
  const subcategoryData = getSubcategory(
    category,
    subcategory,
  );

  if (!categoryData || !subcategoryData) {
    notFound();
  }

  const prompts = getContentBySubcategory(
    "prompt",
    category,
    subcategory,
  );

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >
        <Link
          href={`/${locale}/prompts`}
          className="transition-colors hover:text-blue-600"
        >
          Prompts
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/prompts/${category}`}
          className="transition-colors hover:text-blue-600"
        >
          {categoryData.name.en}
        </Link>

        <span>/</span>

        <span className="text-slate-700">
          {subcategoryData.name.en}
        </span>
      </nav>

      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-blue-600">
          {categoryData.name.en}
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {subcategoryData.name.en} Prompts
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Explore AI prompts for{" "}
          {subcategoryData.name.en.toLowerCase()}.
        </p>
      </header>

      {prompts.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h2 className="text-lg font-semibold text-slate-950">
            No prompts yet
          </h2>

          <p className="mt-2 text-sm text-slate-600">
            Prompts for this subcategory will be added soon.
          </p>
        </section>
      ) : (
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-slate-950">
              Available Prompts
            </h2>

            <span className="text-sm text-slate-500">
              {prompts.length}{" "}
              {prompts.length === 1 ? "prompt" : "prompts"}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {prompts.map((prompt) => (
              <Link
                key={prompt.id}
                href={`/${locale}/prompts/${category}/${subcategory}/${prompt.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium capitalize text-blue-700">
                    {prompt.difficulty}
                  </span>
                </div>

                <h3 className="font-semibold text-slate-950 transition-colors group-hover:text-blue-600">
                  {prompt.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                  {prompt.description}
                </p>

                {prompt.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {prompt.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      <footer className="mt-12 border-t border-slate-200 pt-8">
        <p className="text-sm text-slate-500">
          Looking for complete AI workflows?
        </p>

        <Link
          href={`/${locale}/workflows/${category}/${subcategory}`}
          className="mt-2 inline-flex font-medium text-blue-600 transition-colors hover:text-blue-700"
        >
          View workflows →
        </Link>
      </footer>
    </main>
  );
}