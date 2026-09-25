export type ProductCategory = 
  | 'hydraulic'
  | 'mechanical'
  | 'hopper'
  | 'ancillary'
  | 'reclamation';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  summary: string;
  image?: string;
  specs: {
    label: string;
    value: string;
  }[];
  applications: string[];
  vesselType: string;
  availability: 'New Build' | 'Stock' | 'Custom Engineered' | 'Charter';
}

export type ServiceId = 
  | 'survey'
  | 'dredging'
  | 'marine_construction'
  | 'diving'
  | 'consultancy';

export interface ServiceItem {
  id: ServiceId;
  code: string;
  title: string;
  tagline: string;
  description: string;
  image?: string;
  subservices: string[];
  keyDeliverables: string[];
  targetDepths?: string;
  standards: string[];
}

export interface CoreBusinessItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  features: string[];
  icon: string;
}

export interface AccessoryItem {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  material: string;
  image?: string;
}

export interface ResourceItem {
  id: string;
  type: 'Brochure' | 'News' | 'Blog' | 'TSHD Fact' | 'Reference';
  title: string;
  date: string;
  summary: string;
  readTimeOrSize: string;
}

export interface TerminologyItem {
  term: string;
  abbreviation?: string;
  definition: string;
  category: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  overview: string;
  responsibilities: string[];
  qualifications: string[];
}

export interface ProjectCapability {
  id: string;
  title: string;
  category: string;
  location: string;
  volumeOrScale: string;
  waterDepth: string;
  equipmentUsed: string;
  description: string;
  keyMetric: string;
  image?: string;
}
