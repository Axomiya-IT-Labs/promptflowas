export type ContentType = "prompt" | "skill" | "workflow";

export type Difficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export interface TaxonomyReference {
  category: string;
  subcategory: string;
}

export interface BaseContent {
  id: string;
  type: ContentType;
  slug: string;

  title: string;
  description: string;

  taxonomy: TaxonomyReference;

  tags: string[];

  difficulty: Difficulty;

  featured?: boolean;

  relatedPromptIds?: string[];
  relatedSkillIds?: string[];
  relatedWorkflowIds?: string[];
}

export interface PromptVariable {
  name: string;
  description: string;

  example?: string;
  defaultValue?: string;
  placeholder?: string;

  required?: boolean;
}

export interface PromptContent extends BaseContent {
  type: "prompt";

  useCase: string;

  /**
   * Reusable prompt template.
   *
   * Variables use:
   * {{variableName}}
   */
  prompt: string;

  /**
   * Editable variables exposed to the user.
   */
  variables?: PromptVariable[];

  exampleInput?: string;

  exampleOutput?: string;

  languageInstruction?: string;

  tips?: string[];
}

export interface SkillContent extends BaseContent {
  type: "skill";

  whatItIs: string;

  whyItMatters: string;

  coreConcepts: string[];

  howToPractice: string[];

  commonMistakes?: string[];
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface WorkflowContent extends BaseContent {
  type: "workflow";

  goal: string;

  whoItsFor: string;

  requirements?: string[];

  steps: WorkflowStep[];

  tips?: string[];
}

export type AnyContent =
  | PromptContent
  | SkillContent
  | WorkflowContent;