import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface UserActions {
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
  login: (credentials: { email: string; password: string }) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
}

export const useUserStore = create<UserState & UserActions>()(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user) => {
        set({
          user,
          isAuthenticated: !!user,
          error: null,
        });
      },

      updateUser: (updates) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...updates },
          });
        }
      },

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        
        try {
          // Mock authentication - replace with actual API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const mockUser: User = {
            id: '1',
            name: 'Alex Chen',
            email: credentials.email,
            role: 'student',
            university: 'Daffodil International University',
            department: 'Computer Science & Engineering',
            avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
            bio: 'Passionate researcher and innovator focused on AI and sustainable development.',
            location: 'Dhaka, Bangladesh',
            verified: true,
            premium: true,
            joinDate: '2024-01-15',
            socialLinks: {
              linkedin: 'https://linkedin.com/in/alexchen',
              github: 'https://github.com/alexchen',
              twitter: 'https://twitter.com/alexchen',
              website: 'https://alexchen.dev'
            },
            stats: {
              connections: 1247,
              publications: 15,
              citations: 892,
              projects: 8
            }
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : 'Login failed',
            isLoading: false,
          });
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          error: null,
        });
      },

      clearError: () => {
        set({ error: null });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);