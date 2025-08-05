import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AppSettings } from '../types';

interface SettingsState {
  settings: AppSettings;
}

interface SettingsActions {
  updateSettings: (updates: Partial<AppSettings>) => void;
  updateNotificationSettings: (updates: Partial<AppSettings['notifications']>) => void;
  updatePrivacySettings: (updates: Partial<AppSettings['privacy']>) => void;
  resetSettings: () => void;
}

const defaultSettings: AppSettings = {
  theme: 'light',
  notifications: {
    email: true,
    push: true,
    research: true,
    connections: true,
    opportunities: true,
  },
  privacy: {
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    allowMessages: true,
  },
  language: 'en',
};

export const useSettingsStore = create<SettingsState & SettingsActions>()(
  persist(
    (set, get) => ({
      // State
      settings: defaultSettings,

      // Actions
      updateSettings: (updates) => {
        set((state) => ({
          settings: { ...state.settings, ...updates },
        }));
      },

      updateNotificationSettings: (updates) => {
        set((state) => ({
          settings: {
            ...state.settings,
            notifications: { ...state.settings.notifications, ...updates },
          },
        }));
      },

      updatePrivacySettings: (updates) => {
        set((state) => ({
          settings: {
            ...state.settings,
            privacy: { ...state.settings.privacy, ...updates },
          },
        }));
      },

      resetSettings: () => {
        set({ settings: defaultSettings });
      },
    }),
    {
      name: 'settings-storage',
    }
  )
);