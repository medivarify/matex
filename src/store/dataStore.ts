import { create } from 'zustand';
import { ResearchProject, Opportunity, CoFounderProfile, Connection } from '../types';

interface DataState {
  research: {
    projects: ResearchProject[];
    loading: boolean;
    error: string | null;
  };
  opportunities: {
    jobs: Opportunity[];
    loading: boolean;
    error: string | null;
  };
  coFounders: {
    profiles: CoFounderProfile[];
    loading: boolean;
    error: string | null;
  };
  connections: {
    list: Connection[];
    suggestions: Connection[];
    loading: boolean;
    error: string | null;
  };
}

interface DataActions {
  // Research actions
  fetchResearchProjects: () => Promise<void>;
  addResearchProject: (project: Omit<ResearchProject, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateResearchProject: (id: string, updates: Partial<ResearchProject>) => void;
  
  // Opportunities actions
  fetchOpportunities: () => Promise<void>;
  addOpportunity: (opportunity: Omit<Opportunity, 'id'>) => void;
  
  // Co-founders actions
  fetchCoFounders: () => Promise<void>;
  updateCoFounderCompatibility: (id: string, compatibility: number) => void;
  
  // Connections actions
  fetchConnections: () => Promise<void>;
  addConnection: (connection: Omit<Connection, 'id' | 'connectionDate'>) => void;
  removeConnection: (id: string) => void;
}

export const useDataStore = create<DataState & DataActions>((set, get) => ({
  // State
  research: {
    projects: [],
    loading: false,
    error: null,
  },
  opportunities: {
    jobs: [],
    loading: false,
    error: null,
  },
  coFounders: {
    profiles: [],
    loading: false,
    error: null,
  },
  connections: {
    list: [],
    suggestions: [],
    loading: false,
    error: null,
  },

  // Research Actions
  fetchResearchProjects: async () => {
    set((state) => ({
      research: { ...state.research, loading: true, error: null }
    }));

    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockProjects: ResearchProject[] = [
        {
          id: '1',
          title: 'Smart Agriculture Solutions for Bangladesh',
          description: 'Developing IoT and AI-powered systems to optimize crop yields and support farmers in rural Bangladesh.',
          lead: 'Dr. Rashida Rahman',
          university: 'Daffodil International University',
          department: 'Computer Science & Engineering',
          collaborators: 12,
          funding: '৳12,00,000',
          status: 'Active',
          tags: ['IoT', 'Agriculture', 'Machine Learning', 'Bangladesh'],
          timeline: '18 months',
          visibility: 'Public',
          interested: 47,
          avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          createdAt: '2024-01-15T00:00:00Z',
          updatedAt: '2024-01-20T00:00:00Z'
        }
      ];

      set((state) => ({
        research: {
          ...state.research,
          projects: mockProjects,
          loading: false,
        }
      }));
    } catch (error) {
      set((state) => ({
        research: {
          ...state.research,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch research projects'
        }
      }));
    }
  },

  addResearchProject: (projectData) => {
    const project: ResearchProject = {
      ...projectData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    set((state) => ({
      research: {
        ...state.research,
        projects: [project, ...state.research.projects],
      }
    }));
  },

  updateResearchProject: (id, updates) => {
    set((state) => ({
      research: {
        ...state.research,
        projects: state.research.projects.map(project =>
          project.id === id 
            ? { ...project, ...updates, updatedAt: new Date().toISOString() }
            : project
        ),
      }
    }));
  },

  // Opportunities Actions
  fetchOpportunities: async () => {
    set((state) => ({
      opportunities: { ...state.opportunities, loading: true, error: null }
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const mockOpportunities: Opportunity[] = [
        {
          id: '1',
          title: 'Software Engineer',
          company: 'Brain Station 23',
          type: 'Full-time',
          location: 'Dhaka, Bangladesh',
          salary: '৳80,000 - ৳1,20,000',
          description: 'Join Bangladesh\'s leading software company to build innovative solutions for global clients.',
          skills: ['Java', 'Spring Boot', 'React', 'MySQL'],
          posted: '2 days ago',
          applicants: 127,
          rating: 4.8,
          verified: true,
          urgent: false
        }
      ];

      set((state) => ({
        opportunities: {
          ...state.opportunities,
          jobs: mockOpportunities,
          loading: false,
        }
      }));
    } catch (error) {
      set((state) => ({
        opportunities: {
          ...state.opportunities,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch opportunities'
        }
      }));
    }
  },

  addOpportunity: (opportunityData) => {
    const opportunity: Opportunity = {
      ...opportunityData,
      id: Date.now().toString(),
    };

    set((state) => ({
      opportunities: {
        ...state.opportunities,
        jobs: [opportunity, ...state.opportunities.jobs],
      }
    }));
  },

  // Co-founders Actions
  fetchCoFounders: async () => {
    set((state) => ({
      coFounders: { ...state.coFounders, loading: true, error: null }
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const mockCoFounders: CoFounderProfile[] = [
        {
          id: '1',
          name: 'Rashida Rahman',
          title: 'Full-Stack Developer & AI Enthusiast',
          university: 'Daffodil International University',
          department: 'Computer Science & Engineering',
          location: 'Dhaka, Bangladesh',
          experience: '3 years',
          lookingFor: 'Technical Co-Founder',
          expertise: ['React', 'Node.js', 'Machine Learning', 'Python'],
          industries: ['FinTech', 'EdTech', 'HealthTech'],
          commitment: 'Full-time',
          equity: '15-25%',
          previousStartups: 1,
          funding: 'Pre-seed',
          avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          compatibility: 94,
          verified: true,
          premium: true,
          bio: 'Passionate about building scalable tech solutions for emerging markets.',
          achievements: ['Winner - DIU Hackathon 2024', 'Published 3 research papers'],
          availability: 'actively-looking',
          lastActive: '2024-01-20T10:30:00Z',
          portfolio: [
            {
              id: '1',
              title: 'EduConnect - Learning Management System',
              description: 'A comprehensive LMS platform designed for Bangladeshi educational institutions with offline capabilities and mobile-first approach.',
              role: 'Lead Developer & Co-Founder',
              technologies: ['React', 'Node.js', 'MongoDB', 'React Native', 'AWS'],
              images: [
                'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
                'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800'
              ],
              liveDemo: 'https://educonnect-demo.com',
              sourceCode: 'https://github.com/rashida/educonnect',
              startDate: '2023-06-01',
              endDate: '2024-01-15',
              teamSize: 4,
              achievements: [
                'Acquired by local EdTech company',
                '10,000+ active users',
                'Featured in Bangladesh Startup Awards'
              ],
              impact: 'Improved learning outcomes for 50+ schools in rural Bangladesh'
            },
            {
              id: '2',
              title: 'AgriSmart - IoT Farming Solution',
              description: 'IoT-based smart farming solution helping farmers optimize crop yields through real-time monitoring and AI-driven insights.',
              role: 'Technical Lead',
              technologies: ['Python', 'TensorFlow', 'IoT', 'React', 'PostgreSQL'],
              images: [
                'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
              ],
              liveDemo: 'https://agrismart-demo.com',
              startDate: '2023-01-01',
              endDate: '2023-05-30',
              teamSize: 6,
              achievements: [
                'Winner - National AgriTech Competition',
                '500+ farmers onboarded',
                '25% average yield improvement'
              ],
              impact: 'Increased agricultural productivity for smallholder farmers'
            }
          ],
          endorsements: [
            {
              id: '1',
              skill: 'Machine Learning',
              endorsedBy: {
                id: 'prof1',
                name: 'Dr. Aminul Islam',
                title: 'Professor, CSE Department',
                avatar: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              endorsedAt: '2024-01-15T00:00:00Z',
              verified: true
            },
            {
              id: '2',
              skill: 'React',
              endorsedBy: {
                id: 'dev1',
                name: 'Karim Ahmed',
                title: 'Senior Developer',
                avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              endorsedAt: '2024-01-10T00:00:00Z',
              verified: false
            }
          ],
          testimonials: [
            {
              id: '1',
              content: 'Rashida is an exceptional developer with a keen eye for user experience. Her work on EduConnect transformed how we approach educational technology in Bangladesh. She combines technical excellence with deep understanding of local market needs.',
              author: {
                id: 'mentor1',
                name: 'Dr. Sarah Johnson',
                title: 'EdTech Consultant',
                company: 'Global Education Initiative',
                avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              relationship: 'mentor',
              project: 'EduConnect',
              rating: 5,
              createdAt: '2024-01-18T00:00:00Z',
              verified: true
            },
            {
              id: '2',
              content: 'Working with Rashida on the AgriSmart project was incredible. She led the technical development with precision and always delivered on time. Her machine learning expertise helped us achieve breakthrough results.',
              author: {
                id: 'collab1',
                name: 'Ahmed Hassan',
                title: 'Product Manager',
                company: 'TechVenture BD',
                avatar: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
              },
              relationship: 'collaborator',
              project: 'AgriSmart',
              rating: 5,
              createdAt: '2024-01-12T00:00:00Z',
              verified: true
            }
          ],
          socialProof: { connections: 847, endorsements: 23, projects: 12 }
        }
      ];

      set((state) => ({
        coFounders: {
          ...state.coFounders,
          profiles: mockCoFounders,
          loading: false,
        }
      }));
    } catch (error) {
      set((state) => ({
        coFounders: {
          ...state.coFounders,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch co-founder profiles'
        }
      }));
    }
  },

  updateCoFounderCompatibility: (id, compatibility) => {
    set((state) => ({
      coFounders: {
        ...state.coFounders,
        profiles: state.coFounders.profiles.map(profile =>
          profile.id === id ? { ...profile, compatibility } : profile
        ),
      }
    }));
  },

  // Connections Actions
  fetchConnections: async () => {
    set((state) => ({
      connections: { ...state.connections, loading: true, error: null }
    }));

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockConnections: Connection[] = [
        {
          id: '1',
          name: 'Prof. Aminul Islam',
          title: 'Head of Department',
          university: 'Daffodil International University',
          avatar: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          mutualConnections: 45,
          lastInteraction: '2 days ago',
          isOnline: true,
          connectionDate: '2024-01-10T00:00:00Z',
          relationship: 'mentor'
        }
      ];

      set((state) => ({
        connections: {
          ...state.connections,
          list: mockConnections,
          loading: false,
        }
      }));
    } catch (error) {
      set((state) => ({
        connections: {
          ...state.connections,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch connections'
        }
      }));
    }
  },

  addConnection: (connectionData) => {
    const connection: Connection = {
      ...connectionData,
      id: Date.now().toString(),
      connectionDate: new Date().toISOString(),
    };

    set((state) => ({
      connections: {
        ...state.connections,
        list: [connection, ...state.connections.list],
      }
    }));
  },

  removeConnection: (id) => {
    set((state) => ({
      connections: {
        ...state.connections,
        list: state.connections.list.filter(conn => conn.id !== id),
      }
    }));
  },
}));