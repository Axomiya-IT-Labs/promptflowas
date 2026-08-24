import Link from "next/link";
import { use } from "react";

import { getAllCategories } from "@/content/taxonomy";

interface WorkflowsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function WorkflowsPage({
  params,
}: WorkflowsPageProps) {
  const { locale } = use(params);
  const categories = getAllCategories();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-blue-600">
          Workflows
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          AI Workflows
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Practical AI workflows organized by category to help you
          turn AI into repeatable systems for real-world work.
        </p>
      </header>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-slate-950">
          Explore Workflow Categories
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${locale}/workflows/${category.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-950 group-hover:text-blue-600">
                {category.name.en}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description.en}
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                {category.subcategories.length} workflow areas →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}