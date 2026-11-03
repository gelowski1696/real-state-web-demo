export type ProjectStatus = 'Ongoing' | 'Completed' | 'Upcoming';
export type PropertyType = 'Condominium' | 'Residential Community' | 'Mixed Use' | 'Commercial';

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  propertyType: PropertyType;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  specifications?: { label: string; value: string }[];
  brochurePath?: string;
};

export type NewsItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
};
