export interface Subcategory {
  id: string;
  name: {
    en: string;
    as: string;
  };
}

export interface Category {
  id: string;
  name: {
    en: string;
    as: string;
  };
  description: {
    en: string;
    as: string;
  };
  subcategories: Subcategory[];
}

/**
 * Central taxonomy for PromptFlowAS.
 *
 * Structure:
 *
 * category
 *   └── subcategory
 *         └── content
 *
 * IMPORTANT:
 * - IDs are stable internal identifiers.
 * - Folder names must match category/subcategory IDs.
 * - English and Assamese are presentation languages only.
 * - Prompts, skills, and workflows use the same taxonomy.
 * - Keep IDs stable once content is published.
 */
export const taxonomy: Record<string, Category> = {
  writing: {
    id: "writing",
    name: {
      en: "Writing",
      as: "লিখন",
    },
    description: {
      en: "Prompts, skills, and workflows for writing, rewriting, editing, and professional communication.",
      as: "লিখন, পুনৰ লিখন, সম্পাদনা আৰু পেছাদাৰী যোগাযোগৰ বাবে প্ৰম্পট, দক্ষতা আৰু ৱৰ্কফ্ল'।",
    },
    subcategories: [
      {
        id: "communication",
        name: {
          en: "Communication",
          as: "যোগাযোগ",
        },
      },
      {
        id: "copywriting",
        name: {
          en: "Copywriting",
          as: "কপিৰাইটিং",
        },
      },
      {
        id: "editing",
        name: {
          en: "Editing",
          as: "সম্পাদনা",
        },
      },
    ],
  },

  marketing: {
    id: "marketing",
    name: {
      en: "Marketing",
      as: "বিপণন",
    },
    description: {
      en: "AI-assisted marketing, social media, campaigns, sales, and audience growth.",
      as: "AI সহায়তাৰে বিপণন, ছ'চিয়েল মিডিয়া, কেম্পেইন, বিক্ৰী আৰু অডিয়েন্স বৃদ্ধিৰ কাম।",
    },
    subcategories: [
      {
        id: "content-marketing",
        name: {
          en: "Content Marketing",
          as: "কনটেন্ট বিপণন",
        },
      },
      {
        id: "sales",
        name: {
          en: "Sales",
          as: "বিক্ৰী",
        },
      },
      {
        id: "social-media",
        name: {
          en: "Social Media",
          as: "ছ'চিয়েল মিডিয়া",
        },
      },
    ],
  },

  business: {
    id: "business",
    name: {
      en: "Business",
      as: "ব্যৱসায়",
    },
    description: {
      en: "AI assistance for business planning, productivity, decisions, operations, and professional work.",
      as: "ব্যৱসায়িক পৰিকল্পনা, উৎপাদনশীলতা, সিদ্ধান্ত, পৰিচালনা আৰু পেছাদাৰী কামৰ বাবে AI সহায়তা।",
    },
    subcategories: [
      {
        id: "decision-making",
        name: {
          en: "Decision Making",
          as: "সিদ্ধান্ত গ্ৰহণ",
        },
      },
      {
        id: "planning",
        name: {
          en: "Planning",
          as: "পৰিকল্পনা",
        },
      },
      {
        id: "productivity",
        name: {
          en: "Productivity",
          as: "উৎপাদনশীলতা",
        },
      },
    ],
  },

  coding: {
    id: "coding",
    name: {
      en: "Coding",
      as: "ক'ডিং",
    },
    description: {
      en: "AI-assisted programming, debugging, software architecture, and technical problem solving.",
      as: "AI সহায়তাৰে প্ৰগ্ৰামিং, ডিবাগিং, ছফ্টৱেৰ আর্কিটেকচাৰ আৰু কাৰিকৰী সমস্যা সমাধান।",
    },
    subcategories: [
      {
        id: "architecture",
        name: {
          en: "Architecture",
          as: "আর্কিটেকচাৰ",
        },
      },
      {
        id: "debugging",
        name: {
          en: "Debugging",
          as: "ডিবাগিং",
        },
      },
      {
        id: "programming",
        name: {
          en: "Programming",
          as: "প্ৰগ্ৰামিং",
        },
      },
    ],
  },

  research: {
    id: "research",
    name: {
      en: "Research",
      as: "গৱেষণা",
    },
    description: {
      en: "Research, analysis, comparison, synthesis, reasoning, and structured information work.",
      as: "গৱেষণা, বিশ্লেষণ, তুলনা, তথ্য সংকলন, যুক্তি আৰু গঠনমূলক তথ্যৰ কাম।",
    },
    subcategories: [
      {
        id: "analysis",
        name: {
          en: "Analysis",
          as: "বিশ্লেষণ",
        },
      },
      {
        id: "comparison",
        name: {
          en: "Comparison",
          as: "তুলনা",
        },
      },
      {
        id: "research",
        name: {
          en: "Research",
          as: "গৱেষণা",
        },
      },
    ],
  },

  education: {
    id: "education",
    name: {
      en: "Education",
      as: "শিক্ষা",
    },
    description: {
      en: "Learning, teaching, studying, explaining concepts, and developing knowledge.",
      as: "শিক্ষণ, শিক্ষাদান, অধ্যয়ন, ধাৰণা ব্যাখ্যা আৰু জ্ঞান বিকাশৰ বাবে AI সহায়তা।",
    },
    subcategories: [
      {
        id: "learning",
        name: {
          en: "Learning",
          as: "শিক্ষণ",
        },
      },
      {
        id: "study-planning",
        name: {
          en: "Study Planning",
          as: "অধ্যয়ন পৰিকল্পনা",
        },
      },
      {
        id: "teaching",
        name: {
          en: "Teaching",
          as: "শিক্ষাদান",
        },
      },
    ],
  },

  career: {
    id: "career",
    name: {
      en: "Career",
      as: "কেৰিয়াৰ",
    },
    description: {
      en: "AI assistance for resumes, interviews, career planning, job preparation, and professional growth.",
      as: "ৰিজিউমে, সাক্ষাৎকাৰ, কেৰিয়াৰ পৰিকল্পনা, চাকৰিৰ প্ৰস্তুতি আৰু পেছাদাৰী বিকাশৰ বাবে AI সহায়তা।",
    },
    subcategories: [
      {
        id: "career-planning",
        name: {
          en: "Career Planning",
          as: "কেৰিয়াৰ পৰিকল্পনা",
        },
      },
      {
        id: "interviews",
        name: {
          en: "Interviews",
          as: "সাক্ষাৎকাৰ",
        },
      },
      {
        id: "resume",
        name: {
          en: "Resume & CV",
          as: "Resume আৰু CV",
        },
      },
    ],
  },

  creative: {
    id: "creative",
    name: {
      en: "Creative",
      as: "সৃষ্টিশীলতা",
    },
    description: {
      en: "Creative ideation, storytelling, design thinking, concepts, and creative production.",
      as: "সৃষ্টিশীল ধাৰণা, কাহিনী কোৱা, ডিজাইন চিন্তা, কনচেপ্ট আৰু সৃষ্টিশীল উৎপাদনৰ বাবে AI সহায়তা।",
    },
    subcategories: [
      {
        id: "design-thinking",
        name: {
          en: "Design Thinking",
          as: "ডিজাইন চিন্তা",
        },
      },
      {
        id: "ideation",
        name: {
          en: "Ideation",
          as: "ধাৰণা সৃষ্টি",
        },
      },
      {
        id: "storytelling",
        name: {
          en: "Storytelling",
          as: "কাহিনী কোৱা",
        },
      },
    ],
  },

  content: {
    id: "content",
    name: {
      en: "Content",
      as: "কনটেন্ট",
    },
    description: {
      en: "Content planning, creation, repurposing, optimization, and publishing workflows.",
      as: "কনটেন্ট পৰিকল্পনা, সৃষ্টি, পুনৰ ব্যৱহাৰ, অপ্টিমাইজেচন আৰু প্ৰকাশৰ ৱৰ্কফ্ল'।",
    },
    subcategories: [
      {
        id: "optimization",
        name: {
          en: "Optimization",
          as: "অপ্টিমাইজেচন",
        },
      },
      {
        id: "planning",
        name: {
          en: "Planning",
          as: "পৰিকল্পনা",
        },
      },
      {
        id: "repurposing",
        name: {
          en: "Repurposing",
          as: "পুনৰ ব্যৱহাৰ",
        },
      },
    ],
  },

  ai: {
    id: "ai",
    name: {
      en: "AI",
      as: "AI",
    },
    description: {
      en: "AI literacy, AI tools, model evaluation, and practical understanding of artificial intelligence.",
      as: "AI সাক্ষৰতা, AI সঁজুলি, মডেল মূল্যায়ন আৰু কৃত্ৰিম বুদ্ধিমত্তাৰ ব্যৱহাৰিক জ্ঞান।",
    },
    subcategories: [
      {
        id: "evaluation",
        name: {
          en: "Evaluation",
          as: "মূল্যায়ন",
        },
      },
      {
        id: "literacy",
        name: {
          en: "AI Literacy",
          as: "AI সাক্ষৰতা",
        },
      },
      {
        id: "tools",
        name: {
          en: "AI Tools",
          as: "AI সঁজুলি",
        },
      },
    ],
  },
};

/**
 * Get one category by its stable ID.
 */
export function getCategory(
  categoryId: string,
): Category | undefined {
  return taxonomy[categoryId];
}

/**
 * Get every category.
 */
export function getAllCategories(): Category[] {
  return Object.values(taxonomy);
}

/**
 * Get one subcategory from a category.
 */
export function getSubcategory(
  categoryId: string,
  subcategoryId: string,
): Subcategory | undefined {
  return taxonomy[categoryId]?.subcategories.find(
    (subcategory) => subcategory.id === subcategoryId,
  );
}

/**
 * Get every subcategory from a category.
 */
export function getSubcategories(
  categoryId: string,
): Subcategory[] {
  return taxonomy[categoryId]?.subcategories ?? [];
}

/**
 * Check whether a category exists.
 */
export function hasCategory(categoryId: string): boolean {
  return Boolean(taxonomy[categoryId]);
}

/**
 * Check whether a subcategory exists inside a category.
 */
export function hasSubcategory(
  categoryId: string,
  subcategoryId: string,
): boolean {
  return Boolean(
    taxonomy[categoryId]?.subcategories.some(
      (subcategory) => subcategory.id === subcategoryId,
    ),
  );
}