import Link from "next/link";

import { getAllCategories } from "@/content/taxonomy";

export default async function SkillsPage() {
  const categories = getAllCategories();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-medium text-blue-600">
          Skills
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          AI Skills
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
          Practical AI skills organized by category to help you learn,
          improve, and apply AI effectively.
        </p>
      </header>

      <section>
        <h2 className="mb-5 text-xl font-semibold text-slate-950">
          Explore Skills
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/${"en"}/skills/${category.id}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm"
            >
              <h3 className="font-semibold text-slate-950 group-hover:text-blue-600">
                {category.name.en}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.description.en}
              </p>

              <p className="mt-4 text-sm font-medium text-blue-600">
                {category.subcategories.length} skill areas →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}