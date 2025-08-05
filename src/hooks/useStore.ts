// Custom hooks for easier store access and common patterns
import { useEffect } from 'react';
import { useUserStore } from '../store/userStore';
import { useNotificationStore } from '../store/notificationStore';
import { useSearchStore } from '../store/searchStore';
import { useDataStore } from '../store/dataStore';
import { useSettingsStore } from '../store/settingsStore';

// User hooks
export const useAuth = () => {
  const { user, isAuthenticated, isLoading, error, login, logout, clearError } = useUserStore();
  
  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    clearError,
  };
};

export const useCurrentUser = () => {
  const { user, updateUser } = useUserStore();
  return { user, updateUser };
};

// Notification hooks
export const useNotifications = () => {
  const {
    notifications,
    unreadCount,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
  } = useNotificationStore();

  return {
    notifications,
    unreadCount,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
  };
};

// Search hooks
export const useSearch = () => {
  const {
    query,
    results,
    isSearching,
    filters,
    recentSearches,
    suggestions,
    setQuery,
    search,
    clearResults,
    addFilter,
    removeFilter,
    clearFilters,
  } = useSearchStore();

  return {
    query,
    results,
    isSearching,
    filters,
    recentSearches,
    suggestions,
    setQuery,
    search,
    clearResults,
    addFilter,
    removeFilter,
    clearFilters,
  };
};

// Data hooks with auto-fetch
export const useResearchProjects = () => {
  const { research, fetchResearchProjects, addResearchProject, updateResearchProject } = useDataStore();

  useEffect(() => {
    if (research.projects.length === 0 && !research.loading) {
      fetchResearchProjects();
    }
  }, [research.projects.length, research.loading, fetchResearchProjects]);

  return {
    projects: research.projects,
    loading: research.loading,
    error: research.error,
    addProject: addResearchProject,
    updateProject: updateResearchProject,
    refetch: fetchResearchProjects,
  };
};

export const useOpportunities = () => {
  const { opportunities, fetchOpportunities, addOpportunity } = useDataStore();

  useEffect(() => {
    if (opportunities.jobs.length === 0 && !opportunities.loading) {
      fetchOpportunities();
    }
  }, [opportunities.jobs.length, opportunities.loading, fetchOpportunities]);

  return {
    jobs: opportunities.jobs,
    loading: opportunities.loading,
    error: opportunities.error,
    addJob: addOpportunity,
    refetch: fetchOpportunities,
  };
};

export const useCoFounders = () => {
  const { coFounders, fetchCoFounders, updateCoFounderCompatibility } = useDataStore();

  useEffect(() => {
    if (coFounders.profiles.length === 0 && !coFounders.loading) {
      fetchCoFounders();
    }
  }, [coFounders.profiles.length, coFounders.loading, fetchCoFounders]);

  return {
    profiles: coFounders.profiles,
    loading: coFounders.loading,
    error: coFounders.error,
    updateCompatibility: updateCoFounderCompatibility,
    refetch: fetchCoFounders,
  };
};

export const useConnections = () => {
  const { connections, fetchConnections, addConnection, removeConnection } = useDataStore();

  useEffect(() => {
    if (connections.list.length === 0 && !connections.loading) {
      fetchConnections();
    }
  }, [connections.list.length, connections.loading, fetchConnections]);

  return {
    connections: connections.list,
    suggestions: connections.suggestions,
    loading: connections.loading,
    error: connections.error,
    addConnection,
    removeConnection,
    refetch: fetchConnections,
  };
};

// Settings hooks
export const useAppSettings = () => {
  const { settings, updateSettings, updateNotificationSettings, updatePrivacySettings, resetSettings } = useSettingsStore();

  return {
    settings,
    updateSettings,
    updateNotificationSettings,
    updatePrivacySettings,
    resetSettings,
  };
};

// Combined hooks for complex operations
export const useAuthenticatedData = () => {
  const { isAuthenticated } = useUserStore();
  const researchData = useResearchProjects();
  const opportunitiesData = useOpportunities();
  const coFoundersData = useCoFounders();
  const connectionsData = useConnections();

  // Only fetch data if user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      researchData.refetch();
      opportunitiesData.refetch();
      coFoundersData.refetch();
      connectionsData.refetch();
    }
  }, [isAuthenticated]);

  return {
    research: researchData,
    opportunities: opportunitiesData,
    coFounders: coFoundersData,
    connections: connectionsData,
  };
};

// Toast notification helper
export const useToast = () => {
  const { addNotification } = useNotificationStore();

  const toast = {
    success: (title: string, message?: string) => {
      addNotification({ type: 'success', title, message: message || '' });
    },
    error: (title: string, message?: string) => {
      addNotification({ type: 'error', title, message: message || '' });
    },
    warning: (title: string, message?: string) => {
      addNotification({ type: 'warning', title, message: message || '' });
    },
    info: (title: string, message?: string) => {
      addNotification({ type: 'info', title, message: message || '' });
    },
  };

  return toast;
};