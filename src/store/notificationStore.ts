import { create } from 'zustand';
import { Notification } from '../types';

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
}

interface NotificationActions {
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationState & NotificationActions>((set, get) => ({
  // State
  notifications: [
    {
      id: '1',
      type: 'info',
      title: 'New Research Collaboration',
      message: 'Dr. Rahman invited you to join the Smart Agriculture project',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/research/smart-agriculture',
      actionText: 'View Project'
    },
    {
      id: '2',
      type: 'success',
      title: 'Connection Request Accepted',
      message: 'Karim Ahmed accepted your connection request',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      read: false,
      actionUrl: '/connections',
      actionText: 'View Profile'
    },
    {
      id: '3',
      type: 'warning',
      title: 'Profile Incomplete',
      message: 'Add more skills to improve your profile visibility',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      read: true,
      actionUrl: '/profile',
      actionText: 'Update Profile'
    }
  ],
  unreadCount: 2,

  // Actions
  addNotification: (notificationData) => {
    const notification: Notification = {
      ...notificationData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      read: false,
    };

    set((state) => ({
      notifications: [notification, ...state.notifications],
      unreadCount: state.unreadCount + 1,
    }));
  },

  removeNotification: (id) => {
    set((state) => {
      const notification = state.notifications.find(n => n.id === id);
      const wasUnread = notification && !notification.read;
      
      return {
        notifications: state.notifications.filter(n => n.id !== id),
        unreadCount: wasUnread ? state.unreadCount - 1 : state.unreadCount,
      };
    });
  },

  markAsRead: (id) => {
    set((state) => {
      const notification = state.notifications.find(n => n.id === id);
      if (!notification || notification.read) return state;

      return {
        notifications: state.notifications.map(n =>
          n.id === id ? { ...n, read: true } : n
        ),
        unreadCount: state.unreadCount - 1,
      };
    });
  },

  markAllAsRead: () => {
    set((state) => ({
      notifications: state.notifications.map(n => ({ ...n, read: true })),
      unreadCount: 0,
    }));
  },

  clearAll: () => {
    set({
      notifications: [],
      unreadCount: 0,
    });
  },
}));