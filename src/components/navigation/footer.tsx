import Image from "next/image";
import Link from "next/link";

const promptflowGithub =
  "https://github.com/Axomiya-IT-Labs/promptflowas";

const axomiyaWebsite =
  "https://axomiyaitlabs.vercel.app/";

const socialLinks = [
  {
    label: "Telegram",
    href: "https://t.me/AxomiyaITLabs",
    icon: "/icons/social/telegram.svg",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/AxomiyaITLabs",
    icon: "/icons/social/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/axomiyaitlabs",
    icon: "/icons/social/instagram.svg",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@AxomiyaITLabs",
    icon: "/icons/social/youtube.svg",
  },
  {
    label: "X",
    href: "https://x.com/AxomiyaITLabs",
    icon: "/icons/social/x.svg",
  },
  {
    label: "Email",
    href: "mailto:axomiyaitlabs@gmail.com",
    icon: "/icons/social/email.svg",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-12 sm:py-14">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* PromptFlowAS Brand */}
          <div>
            <Link
              href="/en"
              aria-label="PromptFlowAS home"
              className="inline-flex items-center gap-2"
            >
              <Image
                src="/logos/logo.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />

              <span className="text-xl font-semibold tracking-tight">
                <span className="text-slate-950">PromptFlow</span>
                <span className="text-blue-600">AS</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
              A practical library of AI prompts, skills, and workflows for
              learning, building, automating, and working smarter.
            </p>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Learn. Build. Automate.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Explore
            </h2>

            <nav className="mt-4 flex flex-col gap-2">
              {/* User Guide */}
              <Link
                href="/en/guide"
                className="inline-flex w-fit rounded-lg bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                User Guide
              </Link>

              {/* Prompts */}
              <Link
                href="/en/prompts"
                className="w-fit rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                Prompts
              </Link>

              {/* Skills */}
              <Link
                href="/en/skills"
                className="w-fit rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                Skills
              </Link>

              {/* Workflows */}
              <Link
                href="/en/workflows"
                className="w-fit rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950"
              >
                Workflows
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h2 className="text-sm font-semibold text-slate-950">
              Connect
            </h2>

            {/* Social Links */}
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={social.label}
                  title={social.label}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white transition-colors hover:bg-slate-50"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-4 w-4 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          {/* Copyright / Version */}
          <div className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} PromptFlowAS
            <span className="mx-2 text-slate-300">•</span>
            Open Source
            <span className="mx-2 text-slate-300">•</span>
            v1.0
          </div>

          {/* Super Footer Attribution */}
          <div className="mt-3 text-center text-sm text-slate-500">
            Crafted &amp; maintained by{" "}
            <a
              href={axomiyaWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-700 transition-colors hover:text-blue-600"
            >
              Axomiya IT Labs
            </a>
          </div>

          {/* Source Repository */}
          <div className="mt-4 flex justify-center">
            <a
              href={promptflowGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              <Image
                src="/icons/social/github.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 object-contain"
              />

              View source on GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}