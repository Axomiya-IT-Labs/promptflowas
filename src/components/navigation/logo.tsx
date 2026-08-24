import Link from "next/link";

interface logoProps {
  locale: string;
}

export function Logo({ locale }: logoProps) {
  return (
    <Link
      href={`/${locale}`}
      className="focus-ring inline-flex items-center gap-2.5 rounded-lg"
      aria-label="PromptFlowAS home"
    >
      <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm">
        PF
      </span>

      <span className="text-[17px] font-bold tracking-[-0.02em] text-slate-950">
        PromptFlowAS
      </span>
    </Link>
  );
}