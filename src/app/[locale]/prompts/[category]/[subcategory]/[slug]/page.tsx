import Link from "next/link";
import { notFound } from "next/navigation";

import PromptRunner from "@/components/prompts/prompt-runner";
import RelatedContent from "@/components/shared/related-content";

import {
  getCategory,
  getSubcategory,
} from "@/content/taxonomy";

import { getContentBySlug } from "@/lib/content/registry";

interface PromptDetailPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
    slug: string;
  }>;
}

export default async function PromptDetailPage({
  params,
}: PromptDetailPageProps) {
  const {
    locale,
    category,
    subcategory,
    slug,
  } = await params;

  const categoryData =
    getCategory(category);

  const subcategoryData =
    getSubcategory(
      category,
      subcategory,
    );

  if (
    !categoryData ||
    !subcategoryData
  ) {
    notFound();
  }

  const prompt =
    getContentBySlug(
      "prompt",
      slug,
    );

  if (!prompt) {
    notFound();
  }

  if (
    prompt.taxonomy.category !== category ||
    prompt.taxonomy.subcategory !== subcategory
  ) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <nav
        aria-label="Breadcrumb"
        className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
      >
        <Link
          href={`/${locale}/prompts`}
          className="transition-colors hover:text-slate-900"
        >
          Prompts
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/prompts/${category}`}
          className="transition-colors hover:text-slate-900"
        >
          {categoryData.name.en}
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/prompts/${category}/${subcategory}`}
          className="transition-colors hover:text-slate-900"
        >
          {subcategoryData.name.en}
        </Link>
      </nav>

      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            Prompt
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
            {prompt.difficulty}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {prompt.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {prompt.description}
        </p>
      </header>

      <section className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="mb-3 text-lg font-semibold text-slate-950">
          Use Case
        </h2>

        <p className="leading-7 text-slate-600">
          {prompt.useCase}
        </p>
      </section>

      <PromptRunner prompt={prompt} />

      {prompt.tips &&
        prompt.tips.length > 0 && (
          <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="mb-4 text-lg font-semibold text-slate-950">
              Tips
            </h2>

            <ul className="space-y-3">
              {prompt.tips.map((tip) => (
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

      {prompt.tags.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 text-sm font-semibold text-slate-950">
            Tags
          </h2>

          <div className="flex flex-wrap gap-2">
            {prompt.tags.map((tag) => (
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

      <RelatedContent
        content={prompt}
        locale={locale}
      />
    </main>
  );
}