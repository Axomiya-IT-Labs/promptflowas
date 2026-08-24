import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

import {
  getCategory,
  getSubcategories,
} from "@/content/taxonomy";

interface WorkflowCategoryPageProps {
  params: Promise<{
    locale: string;
    category: string;
  }>;
}

export default function WorkflowCategoryPage({
  params,
}: WorkflowCategoryPageProps) {
  const { locale, category } = use(params);

  const categoryData = getCategory(category);

  if (!categoryData) {
    notFound();
  }

  const subcategories = getSubcategories(category);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-blue-600">
          Workflows
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {categoryData.name.en}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          {categoryData.description.en}
        </p>
      </header>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-slate-950">
          Explore {categoryData.name.en} Workflows
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/${locale}/workflows/${category}/${subcategory.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-950 group-hover:text-blue-600">
                {subcategory.name.en}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Explore workflows for{" "}
                {subcategory.name.en.toLowerCase()}.
              </p>

              <span className="mt-4 inline-block text-sm font-medium text-blue-600">
                View workflows →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}