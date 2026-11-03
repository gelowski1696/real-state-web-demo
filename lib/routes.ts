import type { ConceptId } from '@/lib/concepts';

export function conceptHref(concept: ConceptId | string) {
  return `/concepts/${concept}`;
}

export function projectsHref(concept: ConceptId | string) {
  return `${conceptHref(concept)}/projects`;
}

export function projectHref(concept: ConceptId | string, slug: string) {
  return `${projectsHref(concept)}/${slug}`;
}

export function conceptPageHref(concept: ConceptId | string, page: 'about' | 'news' | 'contact') {
  return `${conceptHref(concept)}/${page}`;
}
