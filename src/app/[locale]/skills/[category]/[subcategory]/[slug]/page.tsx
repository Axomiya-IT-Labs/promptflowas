import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getCategory,
  getSubcategory,
} from "@/content/taxonomy";
import { getContentBySlug } from "@/lib/content/registry";

interface SkillDetailPageProps {
  params: Promise<{
    locale: string;
    category: string;
    subcategory: string;
    slug: string;
  }>;
}

export default async function SkillDetailPage({
  params,
}: SkillDetailPageProps) {
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

  const skill = getContentBySlug("skill", slug);

  if (!skill) {
    notFound();
  }

  if (
    skill.taxonomy.category !== category ||
    skill.taxonomy.subcategory !== subcategory
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
          href={`/${locale}/skills`}
          className="transition-colors hover:text-blue-600"
        >
          Skills
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/skills/${category}`}
          className="transition-colors hover:text-blue-600"
        >
          {categoryData.name.en}
        </Link>

        <span>/</span>

        <Link
          href={`/${locale}/skills/${category}/${subcategory}`}
          className="transition-colors hover:text-blue-600"
        >
          {subcategoryData.name.en}
        </Link>
      </nav>

      <header className="mb-10">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Skill
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium capitalize text-slate-600">
            {skill.difficulty}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {skill.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          {skill.description}
        </p>
      </header>

      <div className="space-y-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-950">
            What It Is
          </h2>

          <p className="leading-7 text-slate-600">
            {skill.whatItIs}
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="mb-3 text-lg font-semibold text-slate-950">
            Why It Matters
          </h2>

          <p className="leading-7 text-slate-600">
            {skill.whyItMatters}
          </p>
        </section>

        {skill.coreConcepts.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold text-slate-950">
              Core Concepts
            </h2>

            <ul className="space-y-3">
              {skill.coreConcepts.map((concept) => (
                <li
                  key={concept}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                  <span>{concept}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {skill.howToPractice.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="mb-5 text-lg font-semibold text-slate-950">
              How to Practice
            </h2>

            <ol className="space-y-4">
              {skill.howToPractice.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-semibold text-blue-700">
                    {index + 1}
                  </span>

                  <p className="pt-0.5 text-sm leading-6 text-slate-600">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {skill.commonMistakes &&
          skill.commonMistakes.length > 0 && (
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="mb-5 text-lg font-semibold text-slate-950">
                Common Mistakes
              </h2>

              <ul className="space-y-3">
                {skill.commonMistakes.map((mistake) => (
                  <li
                    key={mistake}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

        {skill.tags.length > 0 && (
          <section>
            <h2 className="mb-3 text-sm font-semibold text-slate-950">
              Tags
            </h2>

            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
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
      </div>
    </main>
  );
}