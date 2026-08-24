import type { AnyContent } from "@/content/types";
import { getAllContent } from "@/lib/content/registry";

export interface RelatedContent {
  prompts: AnyContent[];
  skills: AnyContent[];
  workflows: AnyContent[];
}

function getContentByIds(
  ids: string[] | undefined,
  content: AnyContent[],
  currentId: string,
): AnyContent[] {
  if (!ids || ids.length === 0) {
    return [];
  }

  return ids
    .map((id) =>
      content.find(
        (item) =>
          item.id === id &&
          item.id !== currentId,
      ),
    )
    .filter(
      (item): item is AnyContent =>
        item !== undefined,
    );
}

function calculateRelevance(
  current: AnyContent,
  candidate: AnyContent,
): number {
  if (current.id === candidate.id) {
    return -1;
  }

  let score = 0;

  // Same category is strongly related.
  if (
    current.taxonomy.category ===
    candidate.taxonomy.category
  ) {
    score += 5;
  }

  // Same subcategory is even more relevant.
  if (
    current.taxonomy.subcategory ===
    candidate.taxonomy.subcategory
  ) {
    score += 4;
  }

  // Shared tags increase relevance.
  const currentTags = new Set(
    current.tags.map((tag) => tag.toLowerCase()),
  );

  for (const tag of candidate.tags) {
    if (currentTags.has(tag.toLowerCase())) {
      score += 2;
    }
  }

  // Similar difficulty is useful for exploration.
  if (
    current.difficulty === candidate.difficulty
  ) {
    score += 1;
  }

  return score;
}

function getFallbackRelatedContent(
  current: AnyContent,
  candidates: AnyContent[],
  limit = 6,
): AnyContent[] {
  return candidates
    .filter(
      (item) =>
        item.id !== current.id,
    )
    .map((item) => ({
      item,
      score: calculateRelevance(
        current,
        item,
      ),
    }))
    .filter(
      ({ score }) => score > 0,
    )
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

function mergeRelatedContent(
  explicit: AnyContent[],
  fallback: AnyContent[],
  limit = 6,
): AnyContent[] {
  const result: AnyContent[] = [];
  const seen = new Set<string>();

  for (const item of [
    ...explicit,
    ...fallback,
  ]) {
    if (
      seen.has(item.id) ||
      result.length >= limit
    ) {
      continue;
    }

    seen.add(item.id);
    result.push(item);
  }

  return result;
}

export function getRelatedContent(
  contentItem: AnyContent,
): RelatedContent {
  const allContent = getAllContent();

  const explicitPrompts =
    getContentByIds(
      contentItem.relatedPromptIds,
      allContent,
      contentItem.id,
    ).filter(
      (item) => item.type === "prompt",
    );

  const explicitSkills =
    getContentByIds(
      contentItem.relatedSkillIds,
      allContent,
      contentItem.id,
    ).filter(
      (item) => item.type === "skill",
    );

  const explicitWorkflows =
    getContentByIds(
      contentItem.relatedWorkflowIds,
      allContent,
      contentItem.id,
    ).filter(
      (item) => item.type === "workflow",
    );

  const promptCandidates =
    allContent.filter(
      (item) =>
        item.type === "prompt" &&
        item.id !== contentItem.id,
    );

  const skillCandidates =
    allContent.filter(
      (item) =>
        item.type === "skill" &&
        item.id !== contentItem.id,
    );

  const workflowCandidates =
    allContent.filter(
      (item) =>
        item.type === "workflow" &&
        item.id !== contentItem.id,
    );

  const fallbackPrompts =
    getFallbackRelatedContent(
      contentItem,
      promptCandidates,
      6,
    );

  const fallbackSkills =
    getFallbackRelatedContent(
      contentItem,
      skillCandidates,
      6,
    );

  const fallbackWorkflows =
    getFallbackRelatedContent(
      contentItem,
      workflowCandidates,
      6,
    );

  return {
    prompts: mergeRelatedContent(
      explicitPrompts,
      fallbackPrompts,
      6,
    ),

    skills: mergeRelatedContent(
      explicitSkills,
      fallbackSkills,
      6,
    ),

    workflows: mergeRelatedContent(
      explicitWorkflows,
      fallbackWorkflows,
      6,
    ),
  };
}

export function getRelatedPrompts(
  contentItem: AnyContent,
): AnyContent[] {
  return getRelatedContent(
    contentItem,
  ).prompts;
}

export function getRelatedSkills(
  contentItem: AnyContent,
): AnyContent[] {
  return getRelatedContent(
    contentItem,
  ).skills;
}

export function getRelatedWorkflows(
  contentItem: AnyContent,
): AnyContent[] {
  return getRelatedContent(
    contentItem,
  ).workflows;
}