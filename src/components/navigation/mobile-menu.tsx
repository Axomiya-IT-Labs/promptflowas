"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "./language-switcher";

const navigation = [
  {
    href: "/guide",
    label: "User Guide",
  },
  {
    href: "/prompts",
    label: "Prompts",
  },
  {
    href: "/skills",
    label: "Skills",
  },
  {
    href: "/workflows",
    label: "Workflows",
  },
];

const promptflowGithub =
  "https://github.com/Axomiya-IT-Labs/promptflowas";

interface MobileMenuProps {
  locale?: string;
  onNavigate: () => void;
}

export default function MobileMenu({
  locale: providedLocale,
  onNavigate,
}: MobileMenuProps) {
  const currentLocale = useLocale();
  const locale = providedLocale || currentLocale;
  const pathname = usePathname();

  const isActive = (href: string) => {
    return (
      pathname === `/${locale}${href}` ||
      pathname.startsWith(`/${locale}${href}/`)
    );
  };

  return (
    <div className="border-t border-slate-100 bg-white md:hidden">
      <div className="container py-4">
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col gap-1"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                onClick={onNavigate}
                className={[
                  "rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <a
            href={promptflowGithub}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PromptFlowAS GitHub repository"
            className="focus-ring inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            <Image
              src="/icons/social/github.svg"
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
            />

            <span>GitHub</span>
          </a>

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}