import type { Project, ProjectStatus, PropertyType } from '@/lib/types';
import { projects } from '@/data/projects';

export function filterProjects(
  items: Project[],
  filters: { query: string; propertyType: PropertyType | 'All'; status: ProjectStatus | 'All' },
) {
  const query = filters.query.trim().toLowerCase();
  return items.filter((project) => {
    const matchesQuery = !query || `${project.name} ${project.location}`.toLowerCase().includes(query);
    const matchesType = filters.propertyType === 'All' || project.propertyType === filters.propertyType;
    const matchesStatus = filters.status === 'All' || project.status === filters.status;
    return matchesQuery && matchesType && matchesStatus;
  });
}

export const propertyTypes: Array<PropertyType | 'All'> = ['All', 'Condominium', 'Residential Community', 'Mixed Use', 'Commercial'];
export const projectStatuses: Array<ProjectStatus | 'All'> = ['All', 'Ongoing', 'Upcoming', 'Completed'];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
