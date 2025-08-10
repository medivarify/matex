import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  FlaskConical,
  Users,
  Briefcase,
  Bell,
  Menu,
  X,
  Rocket,
  TrendingUp,
} from 'lucide-react';
import { useNotifications } from '../hooks/useStore';
import { User as UserType } from '../types';

interface NavbarProps {
  user: UserType;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const location = useLocation();
  const { unreadCount } = useNotifications();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll effect for mobile
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: 'Academic Dashboard',
      shortLabel: 'Home',
    },
    {
      path: '/profile',
      icon: User,
      label: 'Academic Profile',
      shortLabel: 'Profile',
    },
    {
      path: '/research',
      icon: FlaskConical,
      label: 'Research',
      shortLabel: 'Research',
    },
    {
      path: '/connections',
      icon: Users,
      label: 'Academic',
      shortLabel: 'Network',
    },
    {
      path: '/marketplace',
      icon: Briefcase,
      label: 'Career',
      shortLabel: 'Career',
    },
    {
      path: '/cofounder',
      icon: Rocket,
      label: 'Co-Founder',
      shortLabel: 'Mate',
    },
    {
      path: '/fundability',
      icon: TrendingUp,
      label: 'Funding',
      shortLabel: 'Funding',
    },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg border-b border-gray-200' : 'shadow-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-gray-900 leading-none">
                Mate X
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ path, icon: Icon, shortLabel }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === path
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{shortLabel}</span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* User Profile */}
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-7 w-7 sm:h-8 sm:w-8 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="hidden md:block">
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  {user.name.split(' ')[0]} {user.name.split(' ')[1]}
                </p>
                <p className="text-xs text-gray-600 capitalize hidden lg:block">{user.role}</p>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-3 bg-white shadow-lg">
            <div className="flex flex-col space-y-1">
              {navItems.map(({ path, icon: Icon, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg transition-all duration-200 font-medium min-h-[48px] ${
                    location.pathname === path
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </Link>
              ))}

              {/* Mobile User Info */}
              <div className="flex items-center space-x-3 px-4 py-3 mx-2 border-t border-gray-200 mt-3 pt-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{user.name}</p>
                  <p className="text-sm text-gray-600 capitalize">
                    {user.role}
                  </p>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-200 min-h-[40px]"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
