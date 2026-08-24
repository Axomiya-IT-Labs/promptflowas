import Link from "next/link";
import { notFound } from "next/navigation";

const content = {
  en: {
    badge: "USER GUIDE",
    title: "Learn. Build. Automate.",
    intro:
      "A practical guide to getting the most out of PromptFlowAS — from discovering your first AI prompt to building skills and complete AI workflows in any language.",

    ctaPrompts: "Explore Prompts",
    ctaSkills: "Explore Skills",
    ctaWorkflows: "Explore Workflows",

    sections: [
      {
        number: "01",
        title: "What is PromptFlowAS?",
        paragraphs: [
          "PromptFlowAS is a practical AI knowledge library designed to help people learn, build, automate, research, create, and work more effectively with AI.",
          "The platform brings together three connected building blocks: prompts, skills, and workflows.",
          "You do not need to be an AI expert to use it. Start with a prompt, learn the skill behind it, and then combine skills into repeatable workflows.",
        ],
      },
      {
        number: "02",
        title: "Who is PromptFlowAS for?",
        paragraphs: [
          "PromptFlowAS is designed for students, educators, developers, creators, researchers, marketers, entrepreneurs, professionals, freelancers, and anyone who wants to use AI more effectively.",
          "You can use the platform whether you are completely new to AI or already building advanced AI-assisted workflows.",
        ],
        bullets: [
          "Beginners learning how to use AI",
          "Students and educators",
          "Developers and technical teams",
          "Creators and writers",
          "Researchers and analysts",
          "Marketers and business professionals",
          "Freelancers and entrepreneurs",
          "Anyone looking to improve AI productivity",
        ],
      },
      {
        number: "03",
        title: "How does PromptFlowAS work?",
        paragraphs: [
          "PromptFlowAS is organized around a simple progression: discover → learn → apply → combine.",
          "Find a useful prompt, understand the skill behind it, and then use related workflows to turn individual AI interactions into repeatable processes.",
        ],
        steps: [
          {
            title: "Discover",
            text: "Find prompts, skills, and workflows related to what you want to accomplish.",
          },
          {
            title: "Learn",
            text: "Understand why the technique works and what makes a good AI interaction.",
          },
          {
            title: "Apply",
            text: "Adapt the resource to your own task, context, language, and preferred AI system.",
          },
          {
            title: "Combine",
            text: "Connect multiple prompts and skills into a repeatable workflow.",
          },
        ],
      },
      {
        number: "04",
        title: "What are Prompts?",
        paragraphs: [
          "A prompt is an instruction, question, context, or set of constraints that you provide to an AI system to guide its response.",
          "A good prompt gives the AI enough context to understand the task, the expected result, and any important requirements.",
          "PromptFlowAS focuses on practical prompts that can be adapted instead of simply copied.",
        ],
        bullets: [
          "Understand the goal before using a prompt.",
          "Replace placeholders with your own information.",
          "Add relevant context when necessary.",
          "Specify the desired output format.",
          "Review and improve the result instead of blindly accepting it.",
        ],
      },
      {
        number: "05",
        title: "What are AI Skills?",
        paragraphs: [
          "Skills are reusable abilities that help you work effectively with AI.",
          "A prompt helps you complete a specific task. A skill helps you understand how to repeatedly perform that type of task well.",
          "Examples include AI-assisted research, information synthesis, prompt design, fact checking, AI writing, coding assistance, workflow design, and AI automation.",
        ],
      },
      {
        number: "06",
        title: "What are Workflows?",
        paragraphs: [
          "A workflow connects multiple steps into a repeatable process.",
          "Instead of asking an AI system one isolated question, a workflow defines how you move from a goal to a useful result.",
        ],
        steps: [
          {
            title: "Research",
            text: "Gather relevant information and identify useful sources.",
          },
          {
            title: "Analyze",
            text: "Compare, organize, and interpret the information.",
          },
          {
            title: "Create",
            text: "Use the resulting understanding to produce something useful.",
          },
          {
            title: "Review",
            text: "Check accuracy, quality, completeness, and suitability.",
          },
          {
            title: "Improve",
            text: "Refine the process so it can be repeated more effectively.",
          },
        ],
      },
      {
        number: "07",
        title: "Use AI in any language",
        paragraphs: [
          "PromptFlowAS is designed around the idea that AI should not be limited by the language you speak.",
          "Prompts, skills, and workflows can be adapted for different languages. You can use one language for instructions, another for your input, and another for the final output.",
          "The same underlying skill or workflow can therefore be useful to people around the world.",
        ],
        examples: [
          "Prompt language: English → Input: অসমীয়া → Output: অসমীয়া",
          "Prompt language: English → Input: हिन्दी → Output: বাংলা",
          "Prompt language: অসমীয়া → Input: English → Output: English",
        ],
      },
      {
        number: "08",
        title: "Input language vs output language",
        paragraphs: [
          "Do not assume that the language used to write a prompt has to be the same language used for the final answer.",
          "When working with multilingual AI systems, explicitly state the language you want for the response whenever it matters.",
        ],
        example: {
          label: "Example",
          text: '“Analyze the following information and explain the result in Assamese using simple language.”',
        },
      },
      {
        number: "09",
        title: "Learn with AI",
        paragraphs: [
          "AI can act as a learning assistant when used thoughtfully.",
          "Instead of asking AI to simply give you an answer, ask it to explain concepts, create examples, quiz you, identify gaps in your understanding, and provide progressively harder exercises.",
        ],
        bullets: [
          "Ask for explanations at your current level.",
          "Ask for examples and counterexamples.",
          "Ask the AI to quiz you.",
          "Ask it to identify mistakes in your reasoning.",
          "Use it to generate practice exercises.",
          "Ask for multiple explanations of difficult concepts.",
        ],
      },
      {
        number: "10",
        title: "Build with AI",
        paragraphs: [
          "AI can support software development, product design, research, documentation, testing, debugging, and technical decision-making.",
          "Use AI as an engineering assistant rather than treating generated code as automatically correct.",
        ],
        bullets: [
          "Explain the problem clearly.",
          "Provide relevant technical context.",
          "Define constraints and requirements.",
          "Ask for small, testable changes.",
          "Review generated code.",
          "Run tests and validate the result.",
        ],
      },
      {
        number: "11",
        title: "Automate with AI",
        paragraphs: [
          "Automation becomes powerful when AI is combined with structured workflows.",
          "A useful AI automation usually starts with a trigger, processes information, uses AI where appropriate, validates the result, and then performs an action.",
        ],
        steps: [
          {
            title: "Trigger",
            text: "Something happens that starts the process.",
          },
          {
            title: "Collect",
            text: "Gather the information required for the task.",
          },
          {
            title: "Process",
            text: "Use rules, code, or AI to transform the information.",
          },
          {
            title: "Validate",
            text: "Check whether the result is safe, accurate, and useful.",
          },
          {
            title: "Act",
            text: "Send, store, publish, notify, or otherwise use the result.",
          },
        ],
      },
      {
        number: "12",
        title: "Research and fact-checking",
        paragraphs: [
          "AI can help accelerate research, but generated information should not automatically be treated as fact.",
          "For important claims, verify information against reliable primary or authoritative sources.",
          "Use AI to organize and analyze information while maintaining human judgment over what is ultimately trusted or published.",
        ],
        bullets: [
          "Separate facts from assumptions.",
          "Ask for sources when appropriate.",
          "Check important claims independently.",
          "Prefer primary and authoritative sources.",
          "Look for conflicting evidence.",
          "Do not rely on AI output alone for high-stakes decisions.",
        ],
      },
      {
        number: "13",
        title: "Your learning path",
        paragraphs: [
          "You do not need to learn everything at once. Start with simple practical tasks and gradually build toward more advanced workflows.",
        ],
        steps: [
          {
            title: "Beginner",
            text: "Learn basic prompting, context, instructions, and output formatting.",
          },
          {
            title: "Intermediate",
            text: "Learn structured prompting, research, evaluation, and reusable AI skills.",
          },
          {
            title: "Advanced",
            text: "Design multi-step workflows, automation systems, and AI-assisted processes.",
          },
        ],
      },
      {
        number: "14",
        title: "Real-world use cases",
        paragraphs: [
          "PromptFlowAS resources can be adapted to many practical situations.",
        ],
        bullets: [
          "Study and education",
          "Research and information analysis",
          "Writing and editing",
          "Software development",
          "Marketing and content creation",
          "Business planning",
          "Productivity and organization",
          "Customer communication",
          "Data analysis",
          "Creative ideation",
          "Documentation",
          "Workflow automation",
        ],
      },
      {
        number: "15",
        title: "Best practices",
        paragraphs: [
          "The quality of an AI result depends heavily on the quality of the task definition and the review process.",
        ],
        bullets: [
          "Be specific about the goal.",
          "Provide useful context.",
          "Define constraints.",
          "Specify the desired format.",
          "Give examples when helpful.",
          "Break complex tasks into smaller steps.",
          "Review important outputs.",
          "Iterate instead of expecting the first prompt to be perfect.",
        ],
      },
      {
        number: "16",
        title: "Responsible AI",
        paragraphs: [
          "AI is a powerful tool, but it should be used with judgment.",
          "Always consider accuracy, privacy, security, copyright, bias, and the potential consequences of using generated information.",
        ],
        bullets: [
          "Do not blindly trust generated information.",
          "Protect sensitive and confidential information.",
          "Verify important claims.",
          "Review AI-generated content before publishing.",
          "Keep humans responsible for important decisions.",
          "Use AI ethically and within applicable laws and policies.",
        ],
      },
      {
        number: "17",
        title: "Open source",
        paragraphs: [
          "PromptFlowAS is built with an open-source mindset: useful AI knowledge should be discoverable, understandable, reusable, and continuously improved.",
          "The project is designed to grow through practical resources, community contribution, and transparent development.",
        ],
      },
      {
        number: "18",
        title: "Frequently asked questions",
        faq: [
          {
            question: "Do I need to be an AI expert?",
            answer:
              "No. PromptFlowAS is designed for beginners as well as experienced AI users.",
          },
          {
            question: "Can I use these resources with different AI tools?",
            answer:
              "Yes. Most prompts, skills, and workflows are designed around transferable concepts and can be adapted to different AI systems.",
          },
          {
            question: "Can I use PromptFlowAS in Assamese?",
            answer:
              "Yes. Assamese is one of the platform's native languages, and the platform is designed with multilingual use in mind.",
          },
          {
            question: "Can prompts work in other languages?",
            answer:
              "Yes. You can adapt prompts for different input and output languages depending on the AI system you use.",
          },
          {
            question: "Should I copy prompts exactly?",
            answer:
              "Not necessarily. Treat prompts as starting points and adapt them to your context, objective, audience, and preferred output.",
          },
          {
            question: "Are AI outputs always correct?",
            answer:
              "No. Important information should be reviewed and verified, especially for high-stakes decisions.",
          },
          {
            question: "Is PromptFlowAS only for developers?",
            answer:
              "No. It is designed for anyone who wants to learn or use AI more effectively.",
          },
        ],
      },
    ],
  },

  as: {
    badge: "ব্যৱহাৰকাৰী গাইড",
    title: "শিকা। নিৰ্মাণ কৰা। স্বয়ংক্ৰিয় কৰা।",
    intro:
      "PromptFlowAS-ৰ সম্পূৰ্ণ সুবিধা কেনেকৈ ল'ব পাৰি তাৰ এটা ব্যৱহাৰিক গাইড — প্ৰথম AI prompt ব্যৱহাৰৰ পৰা আৰম্ভ কৰি যিকোনো ভাষাত AI skill আৰু workflow নিৰ্মাণ কৰালৈকে।",

    ctaPrompts: "Prompts চাওক",
    ctaSkills: "Skills চাওক",
    ctaWorkflows: "Workflows চাওক",

    sections: [
      {
        number: "01",
        title: "PromptFlowAS কি?",
        paragraphs: [
          "PromptFlowAS হৈছে এটা ব্যৱহাৰিক AI knowledge library, যাৰ উদ্দেশ্য হৈছে মানুহক AI ব্যৱহাৰ কৰি শিকা, নিৰ্মাণ কৰা, automation কৰা, research কৰা, সৃষ্টি কৰা আৰু অধিক দক্ষতাৰে কাম কৰাত সহায় কৰা।",
          "ইয়াত তিনিটা মূল অংশ সংযুক্ত কৰা হৈছে — prompts, skills আৰু workflows।",
          "AI expert হোৱাটো প্ৰয়োজনীয় নহয়। এটা prompt-ৰ পৰা আৰম্ভ কৰক, তাৰ আঁৰৰ skill-টো বুজক আৰু তাৰ পিছত skills সমূহ সংযুক্ত কৰি পুনৰাবৃত্তি কৰিব পৰা workflow নিৰ্মাণ কৰক।",
        ],
      },
      {
        number: "02",
        title: "PromptFlowAS কাৰ বাবে?",
        paragraphs: [
          "PromptFlowAS শিক্ষাৰ্থী, শিক্ষক, developer, creator, researcher, marketer, entrepreneur, professional, freelancer আৰু AI অধিক ভালদৰে ব্যৱহাৰ কৰিব বিচৰা যিকোনো ব্যক্তিৰ বাবে নিৰ্মাণ কৰা হৈছে।",
          "আপুনি AI-ত সম্পূৰ্ণ নতুন হওক বা advanced AI workflow নিৰ্মাণ কৰা অভিজ্ঞ ব্যৱহাৰকাৰী হওক — দুয়ো ক্ষেত্ৰতে ইয়াক ব্যৱহাৰ কৰিব পাৰিব।",
        ],
        bullets: [
          "AI শিকিবলৈ আৰম্ভ কৰা beginner",
          "শিক্ষাৰ্থী আৰু শিক্ষক",
          "Developer আৰু technical team",
          "Creator আৰু writer",
          "Researcher আৰু analyst",
          "Marketer আৰু business professional",
          "Freelancer আৰু entrepreneur",
          "AI productivity বৃদ্ধি কৰিব বিচৰা যিকোনো ব্যক্তি",
        ],
      },
      {
        number: "03",
        title: "PromptFlowAS কেনেকৈ ব্যৱহাৰ কৰিব?",
        paragraphs: [
          "PromptFlowAS-ৰ মূল ধাৰণাটো সহজ — discover → learn → apply → combine।",
          "আপোনাৰ প্ৰয়োজনীয় prompt বিচাৰক, তাৰ আঁৰৰ skill বুজক আৰু related workflow ব্যৱহাৰ কৰি পৃথক AI interaction-ক এটা repeatable process-লৈ ৰূপান্তৰ কৰক।",
        ],
        steps: [
          {
            title: "Discover",
            text: "আপোনাৰ কামৰ সৈতে জড়িত prompt, skill আৰু workflow বিচাৰক।",
          },
          {
            title: "Learn",
            text: "এই technique-টো কিয় কাম কৰে আৰু এটা ভাল AI interaction কেনেকুৱা হয় সেয়া বুজক।",
          },
          {
            title: "Apply",
            text: "Resource-টো নিজৰ কাম, context, ভাষা আৰু AI system অনুসৰি সলনি কৰি ব্যৱহাৰ কৰক।",
          },
          {
            title: "Combine",
            text: "একাধিক prompt আৰু skill সংযোগ কৰি এটা repeatable workflow নিৰ্মাণ কৰক।",
          },
        ],
      },
      {
        number: "04",
        title: "Prompt কি?",
        paragraphs: [
          "Prompt হৈছে AI system-ক দিয়া instruction, question, context বা constraint, যাৰ জৰিয়তে AI-ৰ response-টো নিৰ্দেশিত কৰা হয়।",
          "এটা ভাল prompt-এ AI-ক task, expected result আৰু গুৰুত্বপূৰ্ণ requirements বুজিবলৈ যথেষ্ট context দিয়ে।",
          "PromptFlowAS-ত prompt কেৱল copy কৰাৰ পৰিৱৰ্তে বুজি আৰু নিজৰ প্ৰয়োজন অনুসৰি সলনি কৰি ব্যৱহাৰ কৰিবলৈ উৎসাহিত কৰা হয়।",
        ],
        bullets: [
          "Prompt ব্যৱহাৰৰ আগতে লক্ষ্যটো বুজক।",
          "Placeholder সমূহ নিজৰ তথ্যৰে সলনি কৰক।",
          "প্ৰয়োজনীয় context যোগ কৰক।",
          "কেনেধৰণৰ output লাগে সেয়া স্পষ্ট কৰক।",
          "AI-ৰ result অন্ধভাৱে গ্ৰহণ নকৰি review কৰক।",
        ],
      },
      {
        number: "05",
        title: "AI Skill কি?",
        paragraphs: [
          "Skill হৈছে AI-ৰ সৈতে ফলপ্ৰসূভাৱে কাম কৰিবলৈ প্ৰয়োজনীয় পুনৰ ব্যৱহাৰ কৰিব পৰা দক্ষতা।",
          "Prompt-এ এটা নিৰ্দিষ্ট কাম সম্পূৰ্ণ কৰাত সহায় কৰে, কিন্তু skill-এ সেই ধৰণৰ কাম বাৰে বাৰে ভালদৰে কৰাৰ পদ্ধতি বুজাত সহায় কৰে।",
          "উদাহৰণ হিচাপে AI-assisted research, information synthesis, prompt design, fact checking, AI writing, coding assistance, workflow design আৰু AI automation আদি skill আছে।",
        ],
      },
      {
        number: "06",
        title: "Workflow কি?",
        paragraphs: [
          "Workflow হৈছে একাধিক step-ক এটা repeatable process-ত সংযোগ কৰা পদ্ধতি।",
          "এটা AI system-ক এটা বিচ্ছিন্ন question সোধাৰ পৰিৱৰ্তে workflow-এ goal-ৰ পৰা useful result-লৈ কেনেকৈ যাব লাগে সেয়া নিৰ্ধাৰণ কৰে।",
        ],
        steps: [
          {
            title: "Research",
            text: "প্ৰয়োজনীয় তথ্য সংগ্ৰহ কৰক আৰু উপযোগী source চিনাক্ত কৰক।",
          },
          {
            title: "Analyze",
            text: "তথ্য তুলনা, সংগঠিত আৰু বিশ্লেষণ কৰক।",
          },
          {
            title: "Create",
            text: "বুজি পোৱা তথ্যৰ ভিত্তিত উপযোগী output সৃষ্টি কৰক।",
          },
          {
            title: "Review",
            text: "Accuracy, quality আৰু completeness পৰীক্ষা কৰক।",
          },
          {
            title: "Improve",
            text: "Workflow-টো অধিক ফলপ্ৰসূ কৰি পুনৰ ব্যৱহাৰ কৰিব পৰা কৰক।",
          },
        ],
      },
      {
        number: "07",
        title: "যিকোনো ভাষাত AI ব্যৱহাৰ কৰক",
        paragraphs: [
          "PromptFlowAS-ৰ এটা মূল লক্ষ্য হৈছে AI ব্যৱহাৰক ভাষাৰ সীমাৰ মাজত আবদ্ধ নকৰা।",
          "Prompt, skill আৰু workflow বিভিন্ন ভাষাৰ বাবে adapt কৰিব পাৰি। Instruction এটা ভাষাত, input আন এটা ভাষাত আৰু final output আন এটা ভাষাতো দিব পাৰি।",
          "সেইবাবে একেটা skill বা workflow পৃথিৱীৰ বিভিন্ন ভাষা কোৱা মানুহে ব্যৱহাৰ কৰিব পাৰে।",
        ],
        examples: [
          "Prompt ভাষা: English → Input: অসমীয়া → Output: অসমীয়া",
          "Prompt ভাষা: English → Input: हिन्दी → Output: বাংলা",
          "Prompt ভাষা: অসমীয়া → Input: English → Output: English",
        ],
      },
      {
        number: "08",
        title: "Input language আৰু output language",
        paragraphs: [
          "Prompt যি ভাষাত লিখা হৈছে, final answer-ও সেই ভাষাত হ'ব লাগিব বুলি কোনো কথা নাই।",
          "Multilingual AI ব্যৱহাৰ কৰাৰ সময়ত প্ৰয়োজন হ'লে response কোন ভাষাত লাগে সেয়া স্পষ্টকৈ উল্লেখ কৰক।",
        ],
        example: {
          label: "উদাহৰণ",
          text: "“তলৰ তথ্য বিশ্লেষণ কৰি সহজ ভাষাত অসমীয়াত ফলাফলটো ব্যাখ্যা কৰক।”",
        },
      },
      {
        number: "09",
        title: "AI-ৰ সৈতে শিকা",
        paragraphs: [
          "সঠিকভাৱে ব্যৱহাৰ কৰিলে AI এটা learning assistant হিচাপে কাম কৰিব পাৰে।",
          "কেৱল answer বিচৰাৰ পৰিৱৰ্তে AI-ক concept বুজাবলৈ, example দিবলৈ, quiz ল'বলৈ, আপোনাৰ ভুল চিনাক্ত কৰিবলৈ আৰু practice exercise সৃষ্টি কৰিবলৈ কওক।",
        ],
        bullets: [
          "আপোনাৰ level অনুসৰি explanation বিচাৰক।",
          "Example আৰু counterexample বিচাৰক।",
          "AI-ক আপোনাক quiz ল'বলৈ কওক।",
          "আপোনাৰ reasoning-ৰ ভুল চিনাক্ত কৰিবলৈ কওক।",
          "Practice exercise সৃষ্টি কৰক।",
          "কঠিন concept বিভিন্ন ধৰণে বুজাবলৈ কওক।",
        ],
      },
      {
        number: "10",
        title: "AI-ৰ সৈতে নিৰ্মাণ কৰক",
        paragraphs: [
          "AI software development, product design, research, documentation, testing, debugging আৰু technical decision-making-ত সহায় কৰিব পাৰে।",
          "AI-ৰ generated code সদায় সঠিক বুলি ধৰি নলৈ engineering assistant হিচাপে ব্যৱহাৰ কৰক।",
        ],
        bullets: [
          "Problem-টো স্পষ্টকৈ বুজাওক।",
          "Relevant technical context দিয়ক।",
          "Requirements আৰু constraints নিৰ্ধাৰণ কৰক।",
          "সৰু আৰু testable change বিচাৰক।",
          "Generated code review কৰক।",
          "Test চলাই result validate কৰক।",
        ],
      },
      {
        number: "11",
        title: "AI-ৰ সৈতে Automation কৰক",
        paragraphs: [
          "AI-ক structured workflow-ৰ সৈতে সংযোগ কৰিলে automation অধিক শক্তিশালী হয়।",
          "এটা ভাল AI automation সাধাৰণতে trigger-ৰ পৰা আৰম্ভ হয়, তথ্য process কৰে, প্ৰয়োজনত AI ব্যৱহাৰ কৰে, result validate কৰে আৰু তাৰ পিছত action লয়।",
        ],
        steps: [
          {
            title: "Trigger",
            text: "এটা ঘটনা ঘটে আৰু process আৰম্ভ হয়।",
          },
          {
            title: "Collect",
            text: "কামটোৰ বাবে প্ৰয়োজনীয় তথ্য সংগ্ৰহ কৰক।",
          },
          {
            title: "Process",
            text: "Rules, code বা AI ব্যৱহাৰ কৰি তথ্য transform কৰক।",
          },
          {
            title: "Validate",
            text: "Result-টো safe, accurate আৰু useful হয় নে নাই পৰীক্ষা কৰক।",
          },
          {
            title: "Act",
            text: "Result send, store, publish, notify বা অন্য ধৰণে ব্যৱহাৰ কৰক।",
          },
        ],
      },
      {
        number: "12",
        title: "Research আৰু Fact-checking",
        paragraphs: [
          "AI-এ research দ্ৰুত কৰাত সহায় কৰিব পাৰে, কিন্তু AI-এ দিয়া তথ্যক স্বয়ংক্ৰিয়ভাৱে fact বুলি ধৰা উচিত নহয়।",
          "গুৰুত্বপূৰ্ণ claim-ৰ ক্ষেত্ৰত reliable primary বা authoritative source-ৰ সৈতে তথ্য verify কৰক।",
          "AI-ক তথ্য organize আৰু analyze কৰিবলৈ ব্যৱহাৰ কৰক, কিন্তু শেষত কি বিশ্বাস বা publish কৰিব সেই সিদ্ধান্তত human judgment ৰাখক।",
        ],
        bullets: [
          "Fact আৰু assumption পৃথক কৰক।",
          "প্ৰয়োজনত source বিচাৰক।",
          "গুৰুত্বপূৰ্ণ claim independently verify কৰক।",
          "Primary আৰু authoritative source-ত অগ্ৰাধিকাৰ দিয়ক।",
          "বিপৰীত evidence বিচাৰক।",
          "High-stakes decision-ৰ বাবে কেৱল AI output-ৰ ওপৰত নিৰ্ভৰ নকৰিব।",
        ],
      },
      {
        number: "13",
        title: "আপোনাৰ Learning Path",
        paragraphs: [
          "একেলগে সকলো শিকাৰ প্ৰয়োজন নাই। সৰু practical task-ৰ পৰা আৰম্ভ কৰি লাহে লাহে advanced workflow-লৈ আগবাঢ়ক।",
        ],
        steps: [
          {
            title: "Beginner",
            text: "Basic prompting, context, instruction আৰু output formatting শিকক।",
          },
          {
            title: "Intermediate",
            text: "Structured prompting, research, evaluation আৰু reusable AI skills শিকক।",
          },
          {
            title: "Advanced",
            text: "Multi-step workflow, automation system আৰু AI-assisted process design শিকক।",
          },
        ],
      },
      {
        number: "14",
        title: "Real-world Use Cases",
        paragraphs: [
          "PromptFlowAS-ৰ resource সমূহ বহুতো practical situation-ত adapt কৰিব পাৰি।",
        ],
        bullets: [
          "Study আৰু education",
          "Research আৰু information analysis",
          "Writing আৰু editing",
          "Software development",
          "Marketing আৰু content creation",
          "Business planning",
          "Productivity আৰু organization",
          "Customer communication",
          "Data analysis",
          "Creative ideation",
          "Documentation",
          "Workflow automation",
        ],
      },
      {
        number: "15",
        title: "Best Practices",
        paragraphs: [
          "AI result-ৰ quality বহুখিনি task definition আৰু review process-ৰ quality-ৰ ওপৰত নিৰ্ভৰ কৰে।",
        ],
        bullets: [
          "Goal-টো স্পষ্ট কৰক।",
          "Useful context দিয়ক।",
          "Constraints নিৰ্ধাৰণ কৰক।",
          "Desired format উল্লেখ কৰক।",
          "প্ৰয়োজনত example দিয়ক।",
          "Complex task সৰু step-ত ভাগ কৰক।",
          "Important output review কৰক।",
          "প্ৰথম prompt-টো perfect বুলি আশা নকৰি iterate কৰক।",
        ],
      },
      {
        number: "16",
        title: "Responsible AI",
        paragraphs: [
          "AI এটা শক্তিশালী tool, কিন্তু ইয়াক judgment-ৰ সৈতে ব্যৱহাৰ কৰিব লাগে।",
          "Accuracy, privacy, security, copyright, bias আৰু generated information ব্যৱহাৰৰ সম্ভাব্য consequence সদায় বিবেচনা কৰক।",
        ],
        bullets: [
          "Generated information অন্ধভাৱে বিশ্বাস নকৰিব।",
          "Sensitive আৰু confidential information সুৰক্ষিত ৰাখক।",
          "Important claim verify কৰক।",
          "Publish কৰাৰ আগতে AI-generated content review কৰক।",
          "গুৰুত্বপূৰ্ণ সিদ্ধান্তৰ দায়িত্ব মানুহৰ হাতত ৰাখক।",
          "AI ethical আৰু applicable law/policy অনুসৰি ব্যৱহাৰ কৰক।",
        ],
      },
      {
        number: "17",
        title: "Open Source",
        paragraphs: [
          "PromptFlowAS এটা open-source mindset-ৰে নিৰ্মাণ কৰা হৈছে — useful AI knowledge সহজে বিচাৰি পোৱা, বুজিব পৰা, পুনৰ ব্যৱহাৰ কৰিব পৰা আৰু সময়ৰ সৈতে উন্নত কৰিব পৰা হোৱা উচিত।",
          "Project-টো practical resource, community contribution আৰু transparent development-ৰ জৰিয়তে আগবঢ়াৰ বাবে ডিজাইন কৰা হৈছে।",
        ],
      },
      {
        number: "18",
        title: "সঘনাই সোধা প্ৰশ্ন",
        faq: [
          {
            question: "মই AI expert হ'ব লাগিব নেকি?",
            answer:
              "নালাগে। PromptFlowAS beginner আৰু experienced AI user দুয়োৰে বাবে নিৰ্মাণ কৰা হৈছে।",
          },
          {
            question: "এই resources বিভিন্ন AI tool-ৰ সৈতে ব্যৱহাৰ কৰিব পাৰিম নে?",
            answer:
              "হয়। অধিকাংশ prompt, skill আৰু workflow transferable concept-ৰ ওপৰত ভিত্তি কৰি নিৰ্মাণ কৰা হৈছে আৰু বিভিন্ন AI system-ৰ বাবে adapt কৰিব পাৰি।",
          },
          {
            question: "PromptFlowAS অসমীয়াত ব্যৱহাৰ কৰিব পাৰিম নে?",
            answer:
              "হয়। অসমীয়া platform-টোৰ এটা native language আৰু multilingual use PromptFlowAS-ৰ এটা মূল লক্ষ্য।",
          },
          {
            question: "Prompt অন্য ভাষাত কাম কৰিব নে?",
            answer:
              "হয়। আপুনি ব্যৱহাৰ কৰা AI system অনুসৰি prompt-টো বিভিন্ন input আৰু output language-ৰ বাবে adapt কৰিব পাৰে।",
          },
          {
            question: "Prompt ঠিক যেনেকৈ আছে তেনেকৈ copy কৰিব লাগিব নে?",
            answer:
              "নালাগে। Prompt-ক starting point হিচাপে লৈ নিজৰ context, objective, audience আৰু output অনুসৰি customize কৰক।",
          },
          {
            question: "AI output সদায় সঠিক নেকি?",
            answer:
              "নহয়। বিশেষকৈ গুৰুত্বপূৰ্ণ বা high-stakes তথ্য review আৰু verify কৰিব লাগে।",
          },
          {
            question: "PromptFlowAS কেৱল developer-ৰ বাবে নেকি?",
            answer:
              "নহয়। AI অধিক ফলপ্ৰসূভাৱে শিকা বা ব্যৱহাৰ কৰিব বিচৰা যিকোনো ব্যক্তিৰ বাবে ই নিৰ্মাণ কৰা হৈছে।",
          },
        ],
      },
    ],
  },
} as const;

type Locale = keyof typeof content;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "as" }];
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!["en", "as"].includes(locale)) {
    notFound();
  }

  const page = content[locale as Locale];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-700">
              {page.badge}
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              {page.intro}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/prompts`}
                  className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                {page.ctaPrompts}
              </Link>

              <Link
                href={`/${locale}/skills`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {page.ctaSkills}
              </Link>

              <Link
                href={`/${locale}/workflows`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {page.ctaWorkflows}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide */}
      <section>
        <div className="container py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-16 sm:space-y-20">
              {page.sections.map((section) => (
                <article
                  key={section.number}
                  id={`section-${section.number}`}
                  className="scroll-mt-24"
                >
                  <div className="flex gap-4">
                    <span className="shrink-0 text-sm font-bold text-blue-600">
                      {section.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-5 space-y-4">
                        {"paragraphs" in section &&
                          section.paragraphs.map((paragraph) => (
                            <p
                              key={paragraph}
                              className="text-base leading-7 text-slate-600"
                            >
                              {paragraph}
                            </p>
                          ))}
                      </div>

                      {"bullets" in section && section.bullets && (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {"steps" in section && section.steps && (
                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                          {section.steps.map((step, index) => (
                            <div
                              key={step.title}
                              className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                            >
                              <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs font-bold text-blue-600 ring-1 ring-slate-200">
                                  {index + 1}
                                </span>

                                <h3 className="font-semibold text-slate-950">
                                  {step.title}
                                </h3>
                              </div>

                              <p className="mt-3 text-sm leading-6 text-slate-600">
                                {step.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {"examples" in section && section.examples && (
                        <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 p-5">
                          <h3 className="text-sm font-semibold text-slate-950">
                            Examples
                          </h3>

                          <div className="mt-3 space-y-2">
                            {section.examples.map((example) => (
                              <p
                                key={example}
                                className="text-sm leading-6 text-slate-700"
                              >
                                {example}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {"example" in section && section.example && (
                        <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                            {section.example.label}
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                            {section.example.text}
                          </p>
                        </div>
                      )}

                      {"faq" in section && section.faq && (
                        <div className="mt-7 space-y-3">
                          {section.faq.map((item) => (
                            <details
                              key={item.question}
                              className="group rounded-xl border border-slate-200 bg-white"
                            >
                              <summary className="cursor-pointer list-none px-5 py-4 text-sm font-semibold text-slate-950 marker:hidden">
                                <span className="flex items-center justify-between gap-4">
                                  {item.question}

                                  <span className="text-slate-400 transition-transform group-open:rotate-45">
                                    +
                                  </span>
                                </span>
                              </summary>

                              <div className="border-t border-slate-100 px-5 py-4">
                                <p className="text-sm leading-6 text-slate-600">
                                  {item.answer}
                                </p>
                              </div>
                            </details>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="container py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {locale === "as"
                ? "এতিয়া AI-ৰ সৈতে শিকিবলৈ আৰু নিৰ্মাণ কৰিবলৈ আৰম্ভ কৰক।"
                : "Now start learning and building with AI."}
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              {locale === "as"
                ? "আপোনাৰ লক্ষ্য অনুসৰি এটা prompt, skill বা workflow বিচাৰি আৰম্ভ কৰক।"
                : "Find a prompt, skill, or workflow that matches your goal and get started."}
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/${locale}/prompts`}
                  className="inline-flex items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {page.ctaPrompts}
              </Link>

              <Link
                href={`/${locale}/workflows`}
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                {page.ctaWorkflows}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}