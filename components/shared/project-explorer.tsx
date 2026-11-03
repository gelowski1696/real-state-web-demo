'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ConceptId } from '@/lib/concepts';
import type { Project, ProjectStatus, PropertyType } from '@/lib/types';
import { filterProjects } from '@/lib/utils';
import { ProjectCard } from './project-card';
import { ProjectFilters } from './project-filters';
import { EVENT_NAME, readShortlist } from './shortlist-button';
import Link from 'next/link';
import { projectHref } from '@/lib/routes';
import styles from './project-explorer.module.css';

export function ProjectExplorer({ projects, concept, initialFilters }: { projects: Project[]; concept: ConceptId; initialFilters?: Partial<{ query: string; propertyType: PropertyType | 'All'; status: ProjectStatus | 'All' }> }) {
  const [filters, setFilters] = useState<{ query: string; propertyType: PropertyType | 'All'; status: ProjectStatus | 'All' }>({ query: initialFilters?.query ?? '', propertyType: initialFilters?.propertyType ?? 'All', status: initialFilters?.status ?? 'All' });
  const [shortlist, setShortlist] = useState<string[]>([]);
  useEffect(() => { const sync = () => setShortlist(readShortlist()); sync(); window.addEventListener(EVENT_NAME, sync); return () => window.removeEventListener(EVENT_NAME, sync); }, []);
  const results = useMemo(() => filterProjects(projects, filters), [filters, projects]);
  return <div><ProjectFilters filters={filters} onChange={(next) => { const updated = { ...filters, ...next }; setFilters(updated); const params = new URLSearchParams(window.location.search); if (updated.query) params.set('q', updated.query); else params.delete('q'); if (updated.propertyType !== 'All') params.set('type', updated.propertyType); else params.delete('type'); if (updated.status !== 'All') params.set('status', updated.status); else params.delete('status'); window.history.replaceState(null, '', `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`); }} onReset={() => { setFilters({ query: '', propertyType: 'All', status: 'All' }); window.history.replaceState(null, '', window.location.pathname); }} resultCount={results.length} /><div className={styles.grid}>{results.map((project) => <ProjectCard key={project.slug} project={project} concept={concept} />)}</div>{results.length === 0 && <div className={styles.empty}><p className={styles.emptyLabel}>No matches</p><h3>Try a different search or clear the filters.</h3><button type="button" onClick={() => setFilters({ query: '', propertyType: 'All', status: 'All' })}>Clear all filters</button></div>}{shortlist.length > 0 && <aside className={styles.shortlistBar} aria-label="Saved project shortlist"><div><span className={styles.shortlistLabel}>Your shortlist</span><strong>{shortlist.length} {shortlist.length === 1 ? 'project' : 'projects'} saved</strong></div><div className={styles.shortlistLinks}>{shortlist.map((slug) => { const project = projects.find((item) => item.slug === slug); return project ? <Link href={projectHref(concept, slug)} key={slug}>{project.name} ↗</Link> : null; })}</div></aside>}</div>;
}
