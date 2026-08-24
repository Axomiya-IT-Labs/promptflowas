export interface LLMProvider {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  enabled: boolean;
}

export const llmProviders: LLMProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Open this prompt in ChatGPT.",
    url: "https://chatgpt.com/",
    icon: "/icons/llm/chatgpt.svg",
    enabled: true,
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Open this prompt in Google Gemini.",
    url: "https://gemini.google.com/",
    icon: "/icons/llm/gemini.svg",
    enabled: true,
  },
  {
    id: "claude",
    name: "Claude",
    description: "Open this prompt in Claude.",
    url: "https://claude.ai/",
    icon: "/icons/llm/claude.svg",
    enabled: true,
  },
  {
    id: "grok",
    name: "Grok",
    description: "Open this prompt in Grok.",
    url: "https://grok.com/",
    icon: "/icons/llm/grok.svg",
    enabled: true,
  },
];

export function getEnabledLLMProviders(): LLMProvider[] {
  return llmProviders.filter(
    (provider) => provider.enabled,
  );
}

export function getLLMProvider(
  id: string,
): LLMProvider | undefined {
  return llmProviders.find(
    (provider) => provider.id === id,
  );
}