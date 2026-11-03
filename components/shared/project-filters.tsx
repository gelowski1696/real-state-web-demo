'use client';

import type { ProjectStatus, PropertyType } from '@/lib/types';
import { propertyTypes, projectStatuses } from '@/lib/utils';
import styles from './project-filters.module.css';

type Filters = { query: string; propertyType: PropertyType | 'All'; status: ProjectStatus | 'All' };

export function ProjectFilters({ filters, onChange, onReset, resultCount }: { filters: Filters; onChange: (next: Partial<Filters>) => void; onReset: () => void; resultCount: number }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.search}><label htmlFor="project-search">Search developments</label><input id="project-search" type="search" value={filters.query} onChange={(event) => onChange({ query: event.target.value })} placeholder="Search by name or location" /></div>
      <div className={styles.selects}><label>Property type<select value={filters.propertyType} onChange={(event) => onChange({ propertyType: event.target.value as Filters['propertyType'] })}>{propertyTypes.map((type) => <option key={type}>{type}</option>)}</select></label><label>Status<select value={filters.status} onChange={(event) => onChange({ status: event.target.value as Filters['status'] })}>{projectStatuses.map((status) => <option key={status}>{status}</option>)}</select></label></div>
      <div className={styles.footer}><span>{resultCount} {resultCount === 1 ? 'development' : 'developments'}</span><button type="button" onClick={onReset} disabled={!filters.query && filters.propertyType === 'All' && filters.status === 'All'}>Reset filters</button></div>
    </div>
  );
}
