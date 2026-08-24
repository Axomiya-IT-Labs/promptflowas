import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PromptFlowAS — AI Prompts, Skills & Workflows",
    template: "%s | PromptFlowAS",
  },

  description:
    "A practical bilingual AI knowledge library for prompts, skills, and workflows. Learn, build, automate, and work smarter.",

  keywords: [
    "AI prompts",
    "AI skills",
    "AI workflows",
    "AI prompting",
    "AI learning",
    "Assamese AI",
    "PromptFlowAS",
  ],

  applicationName: "PromptFlowAS",

  icons: {
    icon: [
      {
        url: "/icons/app/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/icons/app/favicon.ico",
        sizes: "any",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}