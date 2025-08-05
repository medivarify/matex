// Core application types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'researcher' | 'educator' | 'alumni';
  university: string;
  department: string;
  avatar: string;
  bio?: string;
  location?: string;
  verified: boolean;
  premium: boolean;
  joinDate: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  stats: {
    connections: number;
    publications: number;
    citations: number;
    projects: number;
  };
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
  actionText?: string;
}

export interface SearchResult {
  id: string;
  type: 'user' | 'research' | 'opportunity' | 'cofounder';
  title: string;
  description: string;
  avatar?: string;
  metadata: Record<string, any>;
  relevanceScore: number;
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  lead: string;
  university: string;
  department: string;
  collaborators: number;
  funding: string;
  status: 'Active' | 'Recruiting' | 'Completed' | 'Paused';
  tags: string[];
  timeline: string;
  visibility: 'Public' | 'Private' | 'Consortium';
  interested: number;
  avatar: string;
  createdAt: string;
  updatedAt: string;
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  salary: string;
  description: string;
  skills: string[];
  posted: string;
  applicants: number;
  rating: number;
  verified: boolean;
  urgent: boolean;
}

export interface CoFounderProfile {
  id: string;
  name: string;
  title: string;
  university: string;
  department: string;
  location: string;
  experience: string;
  lookingFor: string;
  expertise: string[];
  industries: string[];
  commitment: string;
  equity: string;
  previousStartups: number;
  funding: string;
  avatar: string;
  compatibility: number;
  verified: boolean;
  premium: boolean;
  bio: string;
  achievements: string[];
  availability: 'actively-looking' | 'open-to-opportunities' | 'not-looking' | 'busy';
  lastActive: string;
  portfolio: ProjectPortfolio[];
  endorsements: Endorsement[];
  testimonials: Testimonial[];
  socialProof: {
    connections: number;
    endorsements: number;
    projects: number;
  };
}

export interface ProjectPortfolio {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  images: string[];
  liveDemo?: string;
  sourceCode?: string;
  startDate: string;
  endDate?: string;
  teamSize: number;
  achievements: string[];
  impact?: string;
}

export interface Endorsement {
  id: string;
  skill: string;
  endorsedBy: {
    id: string;
    name: string;
    title: string;
    avatar: string;
  };
  endorsedAt: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    title: string;
    company?: string;
    avatar: string;
  };
  relationship: 'colleague' | 'mentor' | 'client' | 'collaborator' | 'supervisor';
  project?: string;
  rating: number;
  createdAt: string;
  verified: boolean;
}

export interface Connection {
  id: string;
  name: string;
  title: string;
  university: string;
  avatar: string;
  mutualConnections: number;
  lastInteraction: string;
  isOnline: boolean;
  connectionDate: string;
  relationship: 'colleague' | 'mentor' | 'student' | 'collaborator';
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: {
    email: boolean;
    push: boolean;
    research: boolean;
    connections: boolean;
    opportunities: boolean;
  };
  privacy: {
    profileVisibility: 'public' | 'connections' | 'private';
    showEmail: boolean;
    showPhone: boolean;
    allowMessages: boolean;
  };
  language: string;
}

export interface Meeting {
  id: string;
  title: string;
  description?: string;
  date: string; // ISO date string
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  type: 'virtual' | 'in-person';
  location?: string; // Physical location or meeting link
  participants: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    status: 'pending' | 'accepted' | 'declined';
  }[];
  organizer: {
    id: string;
    name: string;
    email: string;
  };
  status: 'scheduled' | 'completed' | 'cancelled' | 'rescheduled';
  meetingLink?: string; // For virtual meetings
  agenda?: string[];
  createdAt: string;
  updatedAt: string;
}