# Contributing to PromptFlowAS

Thank you for your interest in contributing to PromptFlowAS ❤️

PromptFlowAS is an open-source project built around practical AI prompts, skills, workflows, and learning resources.

We welcome contributions from developers, AI practitioners, educators, writers, researchers, designers, and anyone who can help improve the project.

---

## 📌 Before You Start

Please read the project README first to understand what PromptFlowAS is and what we are trying to build.

Before creating a new contribution, check the existing content to avoid creating duplicates.

---

# 🧰 Development Stack

PromptFlowAS currently uses:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Turbopack
- JSON/TypeScript-based content
- Local static content registry
- Locale-based routing

The project is designed to remain simple, fast, maintainable, and easy for contributors to understand.

---

# 📁 Project Structure

The main application lives inside `src/`.

```text
src/
├── app/
│   └── [locale]/
│       ├── guide/
│       ├── prompts/
│       ├── skills/
│       └── workflows/
│
├── components/
│   ├── cards/
│   ├── home/
│   ├── navigation/
│   ├── prompts/
│   └── shared/
│
├── config/
│
├── content/
│   ├── faq/
│   ├── prompts/
│   ├── skills/
│   ├── workflows/
│   ├── relationships.ts
│   ├── taxonomy.ts
│   └── types.ts
│
├── features/
│   ├── agents/
│   ├── learn/
│   ├── prompts/
│   ├── skills/
│   └── workflows/
│
├── i18n/
│
├── lib/
│   └── content/
│
├── messages/
│   ├── as.json
│   └── en.json
│
└── types/
````

The exact structure may evolve as the project grows.

---

# 🚀 Getting Started

## 1. Fork the Repository

Create your own fork of the PromptFlowAS repository.

Then clone your fork locally.

```bash
git clone YOUR_FORK_URL
```

Move into the project directory:

```bash
cd promptflowas
```

---

## 2. Install Dependencies

Install the project dependencies:

```bash
npm install
```

---

## 3. Start the Development Server

Run:

```bash
npm run dev
```

Then open the local development URL shown by Next.js.

---

# 📝 Adding a New Prompt

Prompts are stored under:

```text
src/content/prompts/
```

Prompts are organized by:

```text
category/
└── subcategory/
    └── prompt.json
```

For example:

```text
src/content/prompts/education/learning/
```

A prompt should belong to an existing category and subcategory whenever possible.

---

# 🧠 Prompt Content Format

A prompt should contain the information required by the project's content types.

Example:

```json
{
  "id": "example-prompt",
  "type": "prompt",
  "slug": "example-prompt",
  "title": "Example Prompt",
  "description": "A short explanation of what this prompt helps the user accomplish.",
  "taxonomy": {
    "category": "education",
    "subcategory": "learning"
  },
  "tags": [
    "education",
    "learning"
  ],
  "difficulty": "beginner",
  "featured": false,
  "useCase": "Explain when and why someone would use this prompt.",
  "prompt": "Act as a helpful assistant and help me with {{topic}}.",
  "variables": [
    {
      "name": "topic",
      "description": "The topic the user wants help with.",
      "example": "Photosynthesis",
      "placeholder": "e.g. Photosynthesis",
      "required": true
    }
  ],
  "tips": [
    "Provide enough context for better results.",
    "Adjust the variables to match your specific situation."
  ],
  "relatedPromptIds": [],
  "relatedSkillIds": [],
  "relatedWorkflowIds": []
}
```

Follow the existing content examples in the repository when creating new resources.

---

# ✏️ Writing Good Prompts

A good PromptFlowAS prompt should be:

* Practical
* Specific
* Reusable
* Clear
* Easy to customize
* Useful for a real-world task
* Appropriate for its intended audience

Avoid prompts that are:

* Extremely vague
* Purely theoretical
* Repetitive
* Dependent on unverifiable claims
* Designed only for one person
* Filled with unnecessary instructions

Whenever possible, create prompts that users can immediately copy and use.

---

# 🔧 Variables

Use variables when a prompt benefits from customization.

Variables use this format:

```text
{{variableName}}
```

For example:

```text
Explain {{topic}} to a {{studentLevel}} student.
```

Each variable should have:

* `name`
* `description`
* `example`
* `placeholder`
* `required`

Use meaningful variable names.

Good:

```text
{{targetAudience}}
{{companyName}}
{{topic}}
{{studentLevel}}
```

Avoid unclear names such as:

```text
{{x}}
{{thing}}
{{input}}
```

unless the meaning is genuinely obvious.

---

# 🔗 Related Content

PromptFlowAS supports relationships between:

* Prompts
* Skills
* Workflows

A prompt can reference related resources using IDs.

Example:

```json
"relatedPromptIds": [
  "another-prompt-id"
],
"relatedSkillIds": [
  "relevant-skill-id"
],
"relatedWorkflowIds": [
  "relevant-workflow-id"
]
```

Use relationships when they genuinely help users continue exploring.

Do not add unrelated resources simply to increase the number of related items.

---

# 🗂️ Taxonomy

Before creating a new category or subcategory, check:

```text
src/content/taxonomy.ts
```

Existing categories should be reused whenever they accurately describe the content.

Current areas include:

* AI
* Business
* Career
* Coding
* Content
* Creative
* Education
* Marketing
* Research
* Writing

Each category contains relevant subcategories.

Keep taxonomy consistent across:

```text
Prompts
Skills
Workflows
```

---

# 🌍 Localization

PromptFlowAS supports localized routes.

The application currently includes:

```text
en
as
```

Messages are stored under:

```text
src/messages/
```

For example:

```text
src/messages/en.json
src/messages/as.json
```

When adding user-facing interface text, avoid hardcoding text directly into components when the text belongs to the application's localization system.

Content localization should follow the project's existing content conventions.

---

# 🤖 AI Assistant Launchers

PromptFlowAS allows users to launch prompts in supported AI assistants.

Current providers include:

* ChatGPT
* Claude
* Gemini
* Grok

Provider configuration is located at:

```text
src/config/llm-providers.ts
```

LLM icons are stored in:

```text
public/icons/llm/
```

When adding a supported provider:

1. Add its provider configuration.
2. Add its icon to the LLM icon directory.
3. Add the appropriate launch URL logic.
4. Make sure the prompt is passed correctly.
5. Test the launcher before submitting the contribution.

Users should always be able to copy the prompt and use it with another AI assistant even when that assistant is not directly supported by the launcher.

---

# 📋 Prompt Actions

Prompt resources support actions such as:

* Editing variables
* Generating a customized prompt
* Copying the customized prompt
* Launching the prompt in supported AI assistants

Prompt-related components are located under:

```text
src/components/prompts/
```

Current components include:

```text
prompt-editor.tsx
prompt-actions.tsx
prompt-runner.tsx
llm-launcher.tsx
```

Changes to these components should preserve the existing prompt customization and copy/launch functionality.

---

# 🔍 Search and Content Registry

Content is loaded through the project's content system.

Relevant files include:

```text
src/lib/content/
```

and:

```text
src/content/
```

When adding new content, make sure it is discoverable through the existing content registry.

Do not bypass the content registry with one-off hardcoded page implementations unless there is a specific reason to do so.

---

# 🧪 Testing Your Changes

Before submitting a contribution, test the application locally.

Run:

```bash
npm run dev
```

Check the pages affected by your changes.

For content contributions, verify:

* The content appears in the correct category.
* The URL works.
* The title and description display correctly.
* Variables work correctly.
* Copy Prompt works.
* The customized prompt updates correctly.
* Supported AI launch buttons work.
* Related content works when relationships are provided.
* The page works on mobile and desktop.

---

# 🏗️ Production Build

Before opening a pull request, run:

```bash
npm run build
```

The production build should complete successfully.

A successful build should not contain:

* TypeScript errors
* Missing imports
* Invalid exports
* Invalid routes
* Content type errors
* Broken page generation

If the build fails, fix the issue before submitting the pull request.

---

# 🎨 UI Contributions

PromptFlowAS follows a clean, minimal, content-first interface.

When changing the UI:

* Keep layouts responsive.
* Support mobile and desktop.
* Avoid unnecessary visual complexity.
* Keep typography readable.
* Preserve accessibility.
* Reuse existing components and styles where possible.
* Avoid introducing unnecessary dependencies.

Do not redesign unrelated parts of the application as part of a small contribution.

---

# 📱 Responsive Design

Every new UI contribution should work well across:

* Mobile
* Tablet
* Desktop

Pay particular attention to:

* Navigation
* Prompt cards
* Variables
* Copy buttons
* AI launcher buttons
* Related resources
* Long prompt text

Long prompts should remain readable and usable on small screens.

---

# ♿ Accessibility

Please consider accessibility when contributing UI changes.

Use:

* Semantic HTML
* Meaningful labels
* Keyboard-accessible controls
* Appropriate button/link elements
* Useful alternative text where needed
* Sufficient text contrast

Avoid using clickable `<div>` elements when a button or link is appropriate.

---

# 🔒 Content Quality

Do not submit content containing:

* Copyrighted material copied without permission
* Spam
* Misleading claims
* Malicious instructions
* Personal information
* Unverified claims presented as facts
* Harmful or abusive content

Prompts should be useful and responsible.

---

# 🔀 Pull Requests

Before opening a pull request:

```bash
git status
```

Review your changes carefully.

Then commit your changes:

```bash
git add .
git commit -m "Add useful prompt resources"
```

Push your branch:

```bash
git push
```

Open a pull request against the main PromptFlowAS repository.

---

# 📝 Pull Request Guidelines

A good pull request should explain:

### What changed?

Briefly describe what you added or changed.

### Why?

Explain why the contribution is useful.

### Testing

Mention what you tested.

For example:

```text
- Added 3 education prompts
- Added related prompt relationships
- Tested prompt variables
- Tested copy functionality
- Tested ChatGPT, Claude, Gemini and Grok launchers
- npm run build passes
```

---

# 🐛 Reporting Bugs

When reporting a bug, include:

* What you expected to happen
* What actually happened
* The page or URL where it happened
* Steps to reproduce the problem
* Relevant error messages
* Browser/device information when useful

Screenshots are welcome when they help explain the problem.

---

# 💡 Suggesting New Ideas

Have an idea for a new:

* Prompt
* Skill
* Workflow
* Category
* Learning resource
* Feature
* Improvement

Open an issue or discussion and explain the idea.

Useful suggestions are always welcome.

---

# 🌱 Growing the Content Library

One of the most valuable ways to contribute is by adding high-quality resources.

When adding content, think about:

**Who is this for?**

**What problem does it solve?**

**Can someone use it immediately?**

**Can it be customized?**

**Is there another resource that should be connected to it?**

The goal is quality over meaningless volume.

---

# 🤝 Community Contributions

You do not need to be a core maintainer to contribute.

You can contribute:

* One prompt
* One improvement
* One correction
* One workflow
* One skill
* One translation
* One useful idea

Small contributions can make the library significantly better.

---

# ⭐ Thank You

Thank you for helping build PromptFlowAS.

Every useful contribution helps make AI more understandable, accessible, and practical for more people.

**Discover. Learn. Customize. Use. Explore.**

❤️ PromptFlowAS

```
