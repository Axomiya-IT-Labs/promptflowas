import Link from "next/link";

import type { Category } from "@/content/taxonomy";

interface CategoryCardProps {
  category: Category;
  locale: string;
  contentType: "prompts" | "skills" | "workflows";
}

export default function CategoryCard({
  category,
  locale,
  contentType,
}: CategoryCardProps) {
  return (
    <Link
      href={`/${locale}/${contentType}/${category.id}`}
      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950 transition-colors group-hover:text-blue-600">
            {category.name.en}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {category.description.en}
          </p>
        </div>

        <span className="shrink-0 text-slate-300 transition-colors group-hover:text-blue-500">
          →
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-slate-400">
          {category.subcategories.length}{" "}
          {category.subcategories.length === 1
            ? "subcategory"
            : "subcategories"}
        </span>

        <span className="text-xs font-semibold capitalize text-blue-600">
          Explore {contentType}
        </span>
      </div>
    </Link>
  );
}