"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import LanguageSwitcher from "./language-switcher";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeHref = `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href={homeHref}
          aria-label="PromptFlowAS home"
          className="flex shrink-0 items-center gap-1.5"
        >
          <span className="text-lg font-semibold tracking-tight sm:text-xl">
            <span className="text-slate-950">PromptFlow</span>
            <span className="text-blue-600">AS</span>
          </span>

          <Image
            src="/icons/app/jaapi.svg"
            alt="Jaapi"
            width={22}
            height={22}
            className="ml-0.5 h-5 w-5 object-contain animate-spin"
            style={{
              animationDuration: "3s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          <Link
            href={`/${locale}/guide`}
            className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
          >
            User Guide
          </Link>

          <Link
            href={`/${locale}/prompts`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            Prompts
          </Link>

          <Link
            href={`/${locale}/skills`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            Skills
          </Link>

          <Link
            href={`/${locale}/workflows`}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
          >
            Workflows
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/Axomiya-IT-Labs/promptflowas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="PromptFlowAS GitHub repository"
            title="GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50 md:inline-flex"
          >
            <Image
              src="/icons/social/github.svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
          </a>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex md:items-center">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50 md:hidden"
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>

            {/* 3-line hamburger */}
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <MobileMenu
          locale={locale}
          onNavigate={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
}