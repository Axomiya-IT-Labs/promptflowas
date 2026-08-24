import Link from "next/link";

import AIAdaptation from "@/components/home/ai-adaptation";
import FAQAccordion from "@/components/shared/faq-accordion";
import { generalFAQ } from "@/content/faq/general";

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

const content = {
  en: {
    eyebrow: "AI PROMPTS • SKILLS • WORKFLOWS",
    title: "Learn AI. Build better.",
    description:
      "A practical library of prompts, skills, and workflows designed to help you learn, build, automate, and work smarter.",
    prompts: "Explore Prompts",
    skills: "Explore Skills",
    workflows: "Explore Workflows",

    promptTitle: "Prompts",
    promptDescription:
      "Ready-to-use prompts you can edit, copy, customize, and use with the AI model you prefer.",

    skillTitle: "Skills",
    skillDescription:
      "Practical AI skills that help you understand how to work effectively with modern AI.",

    workflowTitle: "Workflows",
    workflowDescription:
      "Step-by-step AI workflows for turning ideas and repetitive tasks into practical systems.",

    faqEyebrow: "FAQ",
    faqTitle: "Frequently asked questions",
    faqDescription:
      "Learn how PromptFlowAS works and how to get the most out of the library.",
    guide: "View User Guide",
  },

  as: {
    eyebrow: "AI PROMPTS • SKILLS • WORKFLOWS",
    title: "AI শিকক। ভালকৈ নিৰ্মাণ কৰক।",
    description:
      "শিকা, নিৰ্মাণ কৰা, স্বয়ংক্ৰিয় কৰা আৰু অধিক স্মাৰ্টভাৱে কাম কৰাত সহায় কৰিবলৈ ব্যৱহাৰিক prompts, skills আৰু workflows-ৰ এটা library।",
    prompts: "Prompts চাওক",
    skills: "Skills চাওক",
    workflows: "Workflows চাওক",

    promptTitle: "Prompts",
    promptDescription:
      "প্ৰস্তুত prompt যিবোৰ আপুনি edit, copy আৰু নিজৰ প্ৰয়োজন অনুসৰি ব্যৱহাৰ কৰিব পাৰে।",

    skillTitle: "Skills",
    skillDescription:
      "আধুনিক AI-ৰ সৈতে অধিক ফলপ্ৰসূভাৱে কাম কৰিবলৈ ব্যৱহাৰিক AI skills শিকক।",

    workflowTitle: "Workflows",
    workflowDescription:
      "ধাৰণা আৰু পুনৰাবৃত্তিমূলক কামক ব্যৱহাৰিক system-লৈ পৰিৱৰ্তন কৰিবলৈ step-by-step AI workflows।",

    faqEyebrow: "FAQ",
    faqTitle: "সঘনাই সোধা প্ৰশ্ন",
    faqDescription:
      "PromptFlowAS কেনেকৈ কাম কৰে আৰু library-খন কেনেকৈ সৰ্বোত্তমভাৱে ব্যৱহাৰ কৰিব পাৰি সেয়া বুজি লওক।",
    guide: "User Guide চাওক",
  },
} as const;

const cards = [
  {
    key: "prompts",
    href: "prompts",
    icon: "✦",
  },
  {
    key: "skills",
    href: "skills",
    icon: "◎",
  },
  {
    key: "workflows",
    href: "workflows",
    icon: "→",
  },
] as const;

export default async function HomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;

  const current =
    locale === "as" ? content.as : content.en;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-linear-to-b from-blue-50/70 to-transparent" />

        <div className="container relative z-10 py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-blue-700">
              {current.eyebrow}
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              {current.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-slate-600 sm:text-lg">
              {current.description}
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/prompts`}
                className="focus-ring inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                {current.prompts}
              </Link>

              <Link
                href={`/${locale}/skills`}
                className="focus-ring inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {current.skills}
              </Link>

              <Link
                href={`/${locale}/workflows`}
                className="focus-ring inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                {current.workflows}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Library */}
      <section className="page-section">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => {
              const title =
                card.key === "prompts"
                  ? current.promptTitle
                  : card.key === "skills"
                    ? current.skillTitle
                    : current.workflowTitle;

              const description =
                card.key === "prompts"
                  ? current.promptDescription
                  : card.key === "skills"
                    ? current.skillDescription
                    : current.workflowDescription;

              const action =
                card.key === "prompts"
                  ? current.prompts
                  : card.key === "skills"
                    ? current.skills
                    : current.workflows;

              return (
                <Link
                  key={card.key}
                  href={`/${locale}/${card.href}`}
                  className="surface surface-hover focus-ring group rounded-2xl p-6"
                >
                  <div className="mb-6 flex size-11 items-center justify-center rounded-xl bg-slate-950 text-lg font-semibold text-white">
                    {card.icon}
                  </div>

                  <h2 className="text-xl font-bold tracking-[-0.025em] text-slate-950">
                    {title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-6 text-sm font-semibold text-blue-600 transition group-hover:text-blue-700">
                    {action} →
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Adaptation */}
      <AIAdaptation locale={locale} />

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="container py-16 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="section-eyebrow">
                {current.faqEyebrow}
              </p>

              <h2 className="section-title">
                {current.faqTitle}
              </h2>

              <p className="section-description mx-auto">
                {current.faqDescription}
              </p>
            </div>

            <FAQAccordion
              items={generalFAQ}
              locale={locale}
            />

            <div className="mt-8 text-center">
              <Link
                href={`/${locale}/guide`}
                className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                {current.guide}
                <span
                  aria-hidden="true"
                  className="ml-1 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}