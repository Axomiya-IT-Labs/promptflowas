import {
  getContentByCategory,
  getContentBySlug,
  getContentBySubcategory,
  getContentByType,
  searchContent,
} from "./registry";

export const getPrompts = () =>
  getContentByType("prompt");

export const getSkills = () =>
  getContentByType("skill");

export const getWorkflows = () =>
  getContentByType("workflow");

export const getPrompt = (slug: string) =>
  getContentBySlug("prompt", slug);

export const getSkill = (slug: string) =>
  getContentBySlug("skill", slug);

export const getWorkflow = (slug: string) =>
  getContentBySlug("workflow", slug);

export const getPromptsByCategory = (category: string) =>
  getContentByCategory("prompt", category);

export const getSkillsByCategory = (category: string) =>
  getContentByCategory("skill", category);

export const getWorkflowsByCategory = (category: string) =>
  getContentByCategory("workflow", category);

export const getPromptsBySubcategory = (
  category: string,
  subcategory: string,
) =>
  getContentBySubcategory(
    "prompt",
    category,
    subcategory,
  );

export const getSkillsBySubcategory = (
  category: string,
  subcategory: string,
) =>
  getContentBySubcategory(
    "skill",
    category,
    subcategory,
  );

export const getWorkflowsBySubcategory = (
  category: string,
  subcategory: string,
) =>
  getContentBySubcategory(
    "workflow",
    category,
    subcategory,
  );

export const searchPrompts = (query: string) =>
  searchContent(query, "prompt");

export const searchSkills = (query: string) =>
  searchContent(query, "skill");

export const searchWorkflows = (query: string) =>
  searchContent(query, "workflow");