export interface FAQItem {
  question: string;
  answer: string;
}

export interface LocalizedFAQ {
  en: FAQItem;
  as: FAQItem;
}

export const generalFAQ: LocalizedFAQ[] = [
  {
    en: {
      question: "What is PromptFlowAS?",
      answer:
        "PromptFlowAS is a practical AI knowledge library focused on prompts, skills, and workflows. It is designed to help people understand AI, learn useful techniques, and apply them to real-world tasks.",
    },
    as: {
      question: "PromptFlowAS কি?",
      answer:
        "PromptFlowAS হৈছে prompts, skills আৰু workflows-কেন্দ্ৰিক এটা ব্যৱহাৰিক AI জ্ঞানৰ library। AI বুজিবলৈ, উপযোগী technique শিকিবলৈ আৰু সেই জ্ঞান বাস্তৱ কামত প্ৰয়োগ কৰিবলৈ এই platform-টো নিৰ্মাণ কৰা হৈছে।",
    },
  },
  {
    en: {
      question: "What can I find on PromptFlowAS?",
      answer:
        "You can explore practical AI prompts, AI skills, and step-by-step workflows organized into categories and subcategories. The goal is to make useful AI knowledge easier to discover and apply.",
    },
    as: {
      question: "PromptFlowAS-ত কি কি বিচাৰি পাব পাৰি?",
      answer:
        "আপুনি category আৰু subcategory অনুসৰি সজোৱা ব্যৱহাৰিক AI prompts, AI skills আৰু step-by-step workflows অন্বেষণ কৰিব পাৰে। লক্ষ্য হৈছে উপযোগী AI জ্ঞান সহজে বিচাৰি উলিয়াই বাস্তৱ কামত প্ৰয়োগ কৰাটো সহজ কৰা।",
    },
  },
  {
    en: {
      question: "What are prompts?",
      answer:
        "Prompts are instructions given to an AI system to help produce a specific result. PromptFlowAS provides practical prompts that you can understand, copy, adapt, and customize for your own tasks.",
    },
    as: {
      question: "Prompts কি?",
      answer:
        "Prompts হৈছে AI system-ক কোনো নিৰ্দিষ্ট ফলাফল লাভ কৰিবলৈ দিয়া instructions বা নিৰ্দেশনা। PromptFlowAS-ত এনে ব্যৱহাৰিক prompts দিয়া হয় যিবোৰ আপুনি বুজি, copy, adapt আৰু নিজৰ কাম অনুসৰি customize কৰিব পাৰে।",
    },
  },
  {
    en: {
      question: "What are AI skills?",
      answer:
        "AI skills are practical capabilities and techniques for working effectively with modern AI systems. They focus on understanding how to use AI rather than simply collecting prompts.",
    },
    as: {
      question: "AI Skills কি?",
      answer:
        "AI skills হৈছে আধুনিক AI system-ৰ সৈতে ফলপ্ৰসূভাৱে কাম কৰিবলৈ প্ৰয়োজন হোৱা ব্যৱহাৰিক capability আৰু technique। ইয়াত কেৱল prompts সংগ্ৰহ কৰাৰ পৰিৱৰ্তে AI কেনেকৈ সঠিকভাৱে ব্যৱহাৰ কৰিব লাগে সেইটো বুজাত গুৰুত্ব দিয়া হয়।",
    },
  },
  {
    en: {
      question: "What are AI workflows?",
      answer:
        "AI workflows are structured sequences of steps that combine AI with practical tasks. They can help turn ideas, processes, and repetitive work into more organized and repeatable systems.",
    },
    as: {
      question: "AI Workflows কি?",
      answer:
        "AI workflows হৈছে AI আৰু ব্যৱহাৰিক কামক একেলগে ব্যৱহাৰ কৰা এটা structured step-by-step process। ইয়াৰ সহায়ত idea, process আৰু পুনৰাবৃত্তিমূলক কামক অধিক সংগঠিত আৰু পুনৰাবৃত্তি কৰিব পৰা system-লৈ পৰিৱৰ্তন কৰিব পাৰি।",
    },
  },
  {
    en: {
      question: "How should I use PromptFlowAS?",
      answer:
        "Start with the area that matches your goal, explore its category and subcategory, and then open the relevant prompt, skill, or workflow. Learn the underlying technique and adapt it to your own situation.",
    },
    as: {
      question: "PromptFlowAS কেনেকৈ ব্যৱহাৰ কৰিব লাগে?",
      answer:
        "প্ৰথমে আপোনাৰ লক্ষ্যৰ সৈতে মিল থকা section বাছনি কৰক। তাৰ পিছত category আৰু subcategory অন্বেষণ কৰি প্ৰয়োজনীয় prompt, skill বা workflow খোলক। কেৱল copy কৰাৰ পৰিৱৰ্তে underlying technique-টো বুজি নিজৰ প্ৰয়োজন অনুসৰি প্ৰয়োগ কৰক।",
    },
  },
  {
    en: {
      question: "Can I customize the prompts and workflows?",
      answer:
        "Yes. PromptFlowAS resources are intended to be adapted. You can modify prompts, combine techniques, and adjust workflows according to your task, role, industry, preferred AI model, or working style.",
    },
    as: {
      question: "Prompts আৰু workflows নিজৰ মতে সলনি কৰিব পাৰিমনে?",
      answer:
        "হয়। PromptFlowAS-ৰ resources নিজৰ প্ৰয়োজন অনুসৰি adapt কৰিবলৈ নিৰ্মাণ কৰা হৈছে। আপুনি prompt সলনি কৰিব পাৰে, বিভিন্ন technique একেলগে ব্যৱহাৰ কৰিব পাৰে আৰু নিজৰ কাম, role, industry, পছন্দৰ AI model বা working style অনুসৰি workflow adjust কৰিব পাৰে।",
    },
  },
  {
    en: {
      question: "Do I need advanced AI knowledge to use PromptFlowAS?",
      answer:
        "No. PromptFlowAS is designed to be useful for beginners as well as people who already work with AI. You can start with simple resources and gradually explore more advanced concepts and workflows.",
    },
    as: {
      question: "PromptFlowAS ব্যৱহাৰ কৰিবলৈ advanced AI knowledge লাগেনে?",
      answer:
        "নালাগে। PromptFlowAS beginner আৰু ইতিমধ্যে AI-ৰ সৈতে কাম কৰা দুয়ো ধৰণৰ লোকৰ বাবে উপযোগী। আপুনি সহজ resources-ৰ পৰা আৰম্ভ কৰি ক্ৰমান্বয়ে অধিক advanced concept আৰু workflow অন্বেষণ কৰিব পাৰে।",
    },
  },
  {
    en: {
      question: "Where should I start if I am new to AI?",
      answer:
        "Start with the User Guide to understand how the platform is organized. Then explore Prompts, Skills, or Workflows based on what you want to accomplish and gradually build your understanding through practical use.",
    },
    as: {
      question: "মই AI-ত নতুন হ'লে ক'ৰ পৰা আৰম্ভ কৰিম?",
      answer:
        "প্ৰথমে User Guide চাওক যাতে platform-টো কেনেকৈ সংগঠিত কৰা হৈছে সেইটো বুজিব পাৰে। তাৰ পিছত আপোনাৰ লক্ষ্য অনুসৰি Prompts, Skills বা Workflows অন্বেষণ কৰক আৰু ব্যৱহাৰিকভাৱে কাম কৰি ক্ৰমান্বয়ে নিজৰ AI knowledge বৃদ্ধি কৰক।",
    },
  },
];