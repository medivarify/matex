import { create } from 'zustand';
import { SearchResult } from '../types';

interface SearchState {
  query: string;
  results: SearchResult[];
  isSearching: boolean;
  filters: {
    type: string[];
    university: string[];
    department: string[];
    location: string[];
  };
  recentSearches: string[];
  suggestions: string[];
}

interface SearchActions {
  setQuery: (query: string) => void;
  search: (query: string, filters?: Partial<SearchState['filters']>) => Promise<void>;
  clearResults: () => void;
  addFilter: (filterType: keyof SearchState['filters'], value: string) => void;
  removeFilter: (filterType: keyof SearchState['filters'], value: string) => void;
  clearFilters: () => void;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
}

export const useSearchStore = create<SearchState & SearchActions>((set, get) => ({
  // State
  query: '',
  results: [],
  isSearching: false,
  filters: {
    type: [],
    university: [],
    department: [],
    location: [],
  },
  recentSearches: [],
  suggestions: [
    'Machine Learning',
    'Data Science',
    'Web Development',
    'Research Collaboration',
    'Startup Co-founder',
    'Internship Opportunities',
    'DIU Faculty',
    'Computer Science',
    'Software Engineering',
    'Artificial Intelligence'
  ],

  // Actions
  setQuery: (query) => {
    set({ query });
  },

  search: async (query, filters = {}) => {
    set({ isSearching: true, query });

    try {
      // Mock search - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 800));

      const mockResults: SearchResult[] = [
        {
          id: '1',
          type: 'user',
          title: 'Dr. Rashida Rahman',
          description: 'Assistant Professor, Computer Science & Engineering at DIU',
          avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          metadata: {
            university: 'Daffodil International University',
            department: 'Computer Science & Engineering',
            expertise: ['Machine Learning', 'Data Science'],
            connections: 847
          },
          relevanceScore: 95
        },
        {
          id: '2',
          type: 'research',
          title: 'Smart Agriculture Solutions for Bangladesh',
          description: 'Developing IoT and AI-powered systems to optimize crop yields',
          metadata: {
            lead: 'Dr. Rashida Rahman',
            collaborators: 12,
            funding: '৳12,00,000',
            status: 'Active',
            tags: ['IoT', 'Agriculture', 'Machine Learning']
          },
          relevanceScore: 88
        },
        {
          id: '3',
          type: 'opportunity',
          title: 'Software Engineer at Brain Station 23',
          description: 'Full-time position for experienced developers',
          metadata: {
            company: 'Brain Station 23',
            type: 'Full-time',
            location: 'Dhaka, Bangladesh',
            salary: '৳80,000 - ৳1,20,000',
            skills: ['Java', 'Spring Boot', 'React']
          },
          relevanceScore: 82
        }
      ].filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      );

      set({ 
        results: mockResults,
        isSearching: false 
      });

      // Add to recent searches
      get().addRecentSearch(query);
    } catch (error) {
      set({ 
        results: [],
        isSearching: false 
      });
    }
  },

  clearResults: () => {
    set({ results: [], query: '' });
  },

  addFilter: (filterType, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filterType]: [...state.filters[filterType], value],
      },
    }));
  },

  removeFilter: (filterType, value) => {
    set((state) => ({
      filters: {
        ...state.filters,
        [filterType]: state.filters[filterType].filter(v => v !== value),
      },
    }));
  },

  clearFilters: () => {
    set({
      filters: {
        type: [],
        university: [],
        department: [],
        location: [],
      },
    });
  },

  addRecentSearch: (query) => {
    if (!query.trim()) return;
    
    set((state) => {
      const filtered = state.recentSearches.filter(s => s !== query);
      return {
        recentSearches: [query, ...filtered].slice(0, 10), // Keep only 10 recent searches
      };
    });
  },

  clearRecentSearches: () => {
    set({ recentSearches: [] });
  },
}));