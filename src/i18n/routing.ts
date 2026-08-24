import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "as"],
  defaultLocale: "en",
  localePrefix: "always",
});