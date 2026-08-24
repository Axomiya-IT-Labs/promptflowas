import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getCategory,
  getSubcategories,
} from "@/content/taxonomy";

interface SkillCategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export default async function SkillCategoryPage({
  params,
}: SkillCategoryPageProps) {
  const { locale, category } = await params;

  const categoryData = getCategory(category);

  if (!categoryData) {
    notFound();
  }

  const subcategories = getSubcategories(category);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
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

        <span className="text-slate-700">
          {categoryData.name.en}
        </span>
      </nav>

      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-blue-600">
          Skills
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {categoryData.name.en}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {categoryData.description.en}
        </p>
      </header>

      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-slate-950">
            Explore {categoryData.name.en} Skills
          </h2>

          <span className="text-sm text-slate-500">
            {subcategories.length}{" "}
            {subcategories.length === 1
              ? "subcategory"
              : "subcategories"}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/${locale}/skills/${categoryData.id}/${subcategory.id}`}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-950 transition-colors group-hover:text-blue-600">
                {subcategory.name.en}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore skills for{" "}
                {subcategory.name.en.toLowerCase()}.
              </p>

              <span className="mt-auto inline-flex items-center pt-5 text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700">
                View skills
                <span
                  aria-hidden="true"
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}