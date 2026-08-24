interface AIAdaptationProps {
  locale: string;
}

const content = {
  en: {
    eyebrow: "PromptFlowAS",
    title: "AI is here. Adapt — or get left behind.",
    description:
      "AI isn't waiting for the future. It is already changing how people work, create, learn, and build. You don't need to become an AI expert overnight. Start learning. Start experimenting. Find where AI can make you faster, better, and more capable.",
    emphasis:
      "The future won't wait. Learn AI. Use AI. Keep moving forward.",
  },

  as: {
    eyebrow: "PromptFlowAS",
    title: "AI আহি পাইছে। খাপ খাওক — নহ'লে পিছ পৰি যাব।",
    description:
      "AI ভৱিষ্যতৰ বাবে অপেক্ষা কৰি থকা নাই। ই ইতিমধ্যে মানুহে কেনেকৈ কাম কৰে, সৃষ্টি কৰে, শিকে আৰু নিৰ্মাণ কৰে সেইটো সলনি কৰি আছে। এদিনতে AI expert হোৱাৰ প্ৰয়োজন নাই। শিকিবলৈ আৰম্ভ কৰক। পৰীক্ষা কৰক। আপোনাৰ কাম ক'ত AI-য়ে অধিক দ্ৰুত, উন্নত আৰু সক্ষম কৰিব পাৰে সেয়া বিচাৰি উলিয়াওক।",
    emphasis:
      "ভৱিষ্যতে অপেক্ষা নকৰে। AI শিকক। AI ব্যৱহাৰ কৰক। আগবাঢ়ি থাকক।",
  },
} as const;

export default function AIAdaptation({
  locale,
}: AIAdaptationProps) {
  const current =
    locale === "as" ? content.as : content.en;

  return (
    <section className="border-t border-slate-200 bg-slate-50">
      <div className="container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">
            {current.eyebrow}
          </p>

          <h2 className="mt-3 text-balance text-3xl font-bold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            {current.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-7 text-slate-600 sm:text-lg">
            {current.description}
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
              {current.emphasis}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}