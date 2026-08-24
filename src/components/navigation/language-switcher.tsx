"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === "en" ? "as" : "en";

  // Assamese written as Unicode escapes to avoid source-file encoding issues.
  const label =
    nextLocale === "as"
      ? "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"
      : "English";

  function switchLanguage() {
    const segments = pathname.split("/");

    if (segments[1] === "en" || segments[1] === "as") {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }

    router.push(segments.join("/") || `/${nextLocale}`);
  }

  return (
    <button
      type="button"
      onClick={switchLanguage}
      aria-label={`Switch language to ${label}`}
      className="focus-ring rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
    >
      {label}
    </button>
  );
}