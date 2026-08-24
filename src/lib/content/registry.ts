import fs from "node:fs";
import path from "node:path";

import type {
  AnyContent,
  ContentType,
  PromptContent,
  SkillContent,
  WorkflowContent,
} from "@/content/types";

const CONTENT_ROOT = path.join(process.cwd(), "src", "content");

const TYPE_DIRECTORIES: Record<ContentType, string> = {
  prompt: "prompts",
  skill: "skills",
  workflow: "workflows",
};

function getJsonFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...getJsonFiles(fullPath));
    } else if (
      entry.isFile() &&
      entry.name.endsWith(".json")
    ) {
      files.push(fullPath);
    }
  }

  return files;
}

function readJsonDirectory<T extends AnyContent>(
  directory: string,
): T[] {
  return getJsonFiles(directory).map((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");

    return JSON.parse(raw) as T;
  });
}

export function getAllContent(): AnyContent[] {
  return [
    ...readJsonDirectory<PromptContent>(
      path.join(CONTENT_ROOT, TYPE_DIRECTORIES.prompt),
    ),
    ...readJsonDirectory<SkillContent>(
      path.join(CONTENT_ROOT, TYPE_DIRECTORIES.skill),
    ),
    ...readJsonDirectory<WorkflowContent>(
      path.join(CONTENT_ROOT, TYPE_DIRECTORIES.workflow),
    ),
  ];
}

export function getContentByType(
  type: "prompt",
): PromptContent[];
export function getContentByType(
  type: "skill",
): SkillContent[];
export function getContentByType(
  type: "workflow",
): WorkflowContent[];
export function getContentByType(
  type: ContentType,
): AnyContent[];
export function getContentByType(
  type: ContentType,
): AnyContent[] {
  return getAllContent().filter(
    (item) => item.type === type,
  );
}

export function getContentBySlug(
  type: "prompt",
  slug: string,
): PromptContent | undefined;
export function getContentBySlug(
  type: "skill",
  slug: string,
): SkillContent | undefined;
export function getContentBySlug(
  type: "workflow",
  slug: string,
): WorkflowContent | undefined;
export function getContentBySlug(
  type: ContentType,
  slug: string,
): AnyContent | undefined;
export function getContentBySlug(
  type: ContentType,
  slug: string,
): AnyContent | undefined {
  return getContentByType(type).find(
    (item) => item.slug === slug,
  );
}

export function getContentByCategory(
  type: ContentType,
  category: string,
): AnyContent[] {
  return getContentByType(type).filter(
    (item) => item.taxonomy.category === category,
  );
}

export function getContentBySubcategory(
  type: ContentType,
  category: string,
  subcategory: string,
): AnyContent[] {
  return getContentByType(type).filter(
    (item) =>
      item.taxonomy.category === category &&
      item.taxonomy.subcategory === subcategory,
  );
}

export function searchContent(
  query: string,
  type?: ContentType,
): AnyContent[] {
  const normalizedQuery = query.trim().toLowerCase();

  const source = type
    ? getContentByType(type)
    : getAllContent();

  if (!normalizedQuery) {
    return source;
  }

  return source.filter((item) => {
    const searchable = [
      item.title,
      item.description,
      item.slug,
      item.taxonomy.category,
      item.taxonomy.subcategory,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}