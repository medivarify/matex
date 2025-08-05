import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Users,
  Star,
  MapPin,
  Calendar,
  Briefcase,
  TrendingUp,
  Award,
  MessageCircle,
  UserPlus,
  Eye,
  Heart,
  Zap,
  Target,
  Building,
  Code,
  Palette,
  BarChart3,
  Globe,
  CheckCircle,
  Clock,
  DollarSign,
  Lightbulb,
  Rocket,
  Brain,
  ExternalLink,
  Github,
  Play,
  Image,
  Quote,
  ThumbsUp,
  Calendar as CalendarIcon,
  Activity,
  Verified,
} from 'lucide-react';
import { useCoFounders } from '../hooks/useStore';
import { OptimizedImage } from './ui/OptimizedImage';

const CoFounder: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'portfolio' | 'endorsements' | 'testimonials'
  >('overview');
  const { profiles, loading, error } = useCoFounders();

  const roleFilters = [
    { id: 'all', label: 'All Roles', count: 156, icon: Users },
    { id: 'technical', label: 'Technical Mate', count: 67, icon: Code },
    { id: 'business', label: 'Business Mate', count: 45, icon: Briefcase },
    { id: 'design', label: 'Design Mate', count: 23, icon: Palette },
    { id: 'marketing', label: 'Marketing Mate', count: 21, icon: BarChart3 },
  ];

  const industryFilters = [
    'All Industries',
    'FinTech',
    'EdTech',
    'HealthTech',
    'AgriTech',
    'E-commerce',
    'SaaS',
    'Social Impact',
    'Consumer Apps',
  ];

  const commitmentFilters = [
    'All Commitment',
    'Full-time',
    'Part-time initially',
    'Flexible',
  ];

  const fundingStages = [
    'All Stages',
    'Bootstrapping',
    'Pre-seed',
    'Seed',
    'Series A ready',
  ];

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'actively-looking':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'open-to-opportunities':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'not-looking':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      case 'busy':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'actively-looking':
        return 'Actively Looking';
      case 'open-to-opportunities':
        return 'Open to Opportunities';
      case 'not-looking':
        return 'Not Currently Looking';
      case 'busy':
        return 'Currently Busy';
      default:
        return 'Unknown';
    }
  };

  const selectedProfileData = profiles.find((p) => p.id === selectedProfile);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <Rocket className="h-8 w-8 text-blue-600 mr-3" />
              Co-Founder Ecosystem
            </h1>
            <p className="text-gray-600 text-lg">
              Find your perfect co-founder within the DIU startup ecosystem
            </p>
          </div>
          <Link
            to="/join-cofounder"
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg"
          >
            <UserPlus className="h-5 w-5" />
            <span className="font-medium">Join as Co-Founder</span>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 mb-1 font-medium">
                  Active Co-Founders
                </p>
                <p className="text-2xl font-bold text-blue-900">156</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +23% this month
                </p>
              </div>
              <Users className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 mb-1 font-medium">
                  Successful Matches
                </p>
                <p className="text-2xl font-bold text-green-900">47</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  This quarter
                </p>
              </div>
              <Heart className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 mb-1 font-medium">
                  Startups Launched
                </p>
                <p className="text-2xl font-bold text-purple-900">23</p>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <Rocket className="h-3 w-3 mr-1" />
                  From DIU
                </p>
              </div>
              <Building className="h-10 w-10 text-purple-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-700 mb-1 font-medium">
                  Total Funding
                </p>
                <p className="text-2xl font-bold text-yellow-900">৳2.5Cr</p>
                <p className="text-xs text-yellow-600 flex items-center mt-1">
                  <DollarSign className="h-3 w-3 mr-1" />
                  Raised by teams
                </p>
              </div>
              <TrendingUp className="h-10 w-10 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, skills, or industry..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roleFilters.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.label}
                </option>
              ))}
            </select>

            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              {industryFilters.map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>

            <button className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">More Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Role Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Co-Founder Roles
            </h3>
            <div className="space-y-2">
              {roleFilters.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveFilter(role.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeFilter === role.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <role.icon className="h-4 w-4" />
                      <span className="font-medium">{role.label}</span>
                    </div>
                    <span className="text-sm text-gray-500">{role.count}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <Brain className="h-8 w-8 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">AI Matching</h4>
              <p className="text-sm text-gray-600 mb-3">
                Get personalized co-founder recommendations
              </p>
              <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm">
                Find My Match
              </button>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <Lightbulb className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">
                Startup Resources
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                Access guides, templates, and mentorship
              </p>
              <button className="w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                Explore Resources
              </button>
            </div>
          </div>
        </div>

        {/* Co-Founder Profiles */}
        <div className="lg:col-span-3">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">
                Loading co-founder profiles...
              </p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-700">
                Error loading co-founder profiles: {error}
              </p>
            </div>
          )}

          <div className="space-y-6">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="h-16 w-16 rounded-full object-cover border-2 border-gray-200"
                      />
                      {profile.verified && (
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                      <div className="absolute -top-1 -left-1">
                        <div
                          className={`w-4 h-4 rounded-full border-2 border-white ${
                            profile.availability === 'actively-looking'
                              ? 'bg-green-500'
                              : profile.availability === 'open-to-opportunities'
                              ? 'bg-blue-500'
                              : profile.availability === 'busy'
                              ? 'bg-red-500'
                              : 'bg-gray-400'
                          }`}
                        ></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900">
                          {profile.name}
                        </h3>
                        {profile.premium && (
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium mb-1">
                        {profile.title}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span className="flex items-center">
                          <Building className="h-4 w-4 mr-1" />
                          {profile.university}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {profile.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{profile.experience} experience</span>
                        <span>•</span>
                        <span>
                          {profile.previousStartups} previous startup
                          {profile.previousStartups !== 1 ? 's' : ''}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getAvailabilityColor(
                            profile.availability
                          )}`}
                        >
                          <Activity className="h-3 w-3 mr-1" />
                          {getAvailabilityText(profile.availability)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {profile.compatibility}%
                    </div>
                    <div className="text-xs text-gray-500">compatibility</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {profile.bio}
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Looking For
                    </h4>
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {profile.lookingFor}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Commitment
                    </h4>
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                        {profile.commitment}
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                        {profile.equity} equity
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Target Industries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.industries.map((industry) => (
                      <span
                        key={industry}
                        className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {profile.socialProof.connections}
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {profile.socialProof.endorsements}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="h-4 w-4 mr-1" />
                      {profile.socialProof.projects}
                    </span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {profile.portfolio.length}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setSelectedProfile(profile.id)}
                      className="px-4 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      Portfolio
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      <MessageCircle className="h-4 w-4 mr-2 inline" />
                      Message
                    </button>
                    <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium">
              Load More Co-Founders
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Profile Modal */}
      {selectedProfile && selectedProfileData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Profile Header */}
              <div className="lg:w-1/3 bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-6 lg:p-8 text-white relative">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-200 text-xl sm:text-2xl font-bold z-10"
                >
                  ×
                </button>

                <div className="text-center mb-4 sm:mb-6">
                  <div className="relative inline-block">
                    <OptimizedImage
                      src={selectedProfileData.avatar}
                      alt={selectedProfileData.name}
                      width={80}
                      height={80}
                      className="rounded-full border-3 sm:border-4 border-white/20 sm:w-[120px] sm:h-[120px]"
                    />
                    {selectedProfileData.verified && (
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 h-6 w-6 sm:h-8 sm:w-8 bg-green-500 border-2 sm:border-4 border-white rounded-full flex items-center justify-center">
                        <Verified className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-3 sm:mt-4">
                    {selectedProfileData.name}
                  </h2>
                  <p className="text-blue-100 mb-2 text-sm sm:text-base">
                    {selectedProfileData.title}
                  </p>
                  <div
                    className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-white/30 sm:border-2 ${
                      selectedProfileData.availability === 'actively-looking'
                        ? 'bg-green-500/20 text-green-100'
                        : selectedProfileData.availability ===
                          'open-to-opportunities'
                        ? 'bg-blue-500/20 text-blue-100'
                        : 'bg-gray-500/20 text-gray-100'
                    }`}
                  >
                    <Activity className="h-3 w-3 mr-1" />
                    {getAvailabilityText(selectedProfileData.availability)}
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center">
                    <Building className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span className="truncate">
                      {selectedProfileData.university}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>{selectedProfileData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span>{selectedProfileData.experience} experience</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    <span className="truncate">
                      Looking for: {selectedProfileData.lookingFor}
                    </span>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-green-300">
                      {selectedProfileData.compatibility}%
                    </div>
                    <div className="text-xs sm:text-sm text-blue-100">
                      Compatibility Match
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col">
                {/* Tabs */}
                <div className="border-b border-gray-200 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
                  <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto">
                    {[
                      { id: 'overview', label: 'Overview', icon: Users },
                      { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
                      {
                        id: 'endorsements',
                        label: 'Endorsements',
                        icon: ThumbsUp,
                      },
                      {
                        id: 'testimonials',
                        label: 'Testimonials',
                        icon: Quote,
                      },
                    ].map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id as any)}
                        className={`flex items-center space-x-1 sm:space-x-2 py-2 sm:py-3 border-b-2 font-medium transition-colors duration-200 whitespace-nowrap ${
                          activeTab === id
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{label}</span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                  {activeTab === 'overview' && (
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          About
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {selectedProfileData.bio}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfileData.expertise.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                          Target Industries
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProfileData.industries.map((industry) => (
                            <span
                              key={industry}
                              className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm"
                            >
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            Commitment
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            {selectedProfileData.commitment}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                            Equity Range
                          </h3>
                          <p className="text-gray-600 text-sm sm:text-base">
                            {selectedProfileData.equity}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'portfolio' && (
                    <div className="space-y-6 sm:space-y-8">
                      {selectedProfileData.portfolio.map((project) => (
                        <div
                          key={project.id}
                          className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                                {project.title}
                              </h3>
                              <p className="text-blue-600 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                                {project.role}
                              </p>
                              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {project.description}
                              </p>
                            </div>
                            <div className="flex items-center space-x-1 sm:space-x-2 ml-2">
                              {project.liveDemo && (
                                <a
                                  href={project.liveDemo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 sm:p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                                >
                                  <Play className="h-3 w-3 sm:h-4 sm:w-4" />
                                </a>
                              )}
                              {project.sourceCode && (
                                <a
                                  href={project.sourceCode}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 sm:p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                  <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                                </a>
                              )}
                            </div>
                          </div>

                          {project.images.length > 0 && (
                            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                              {project.images.map((image, index) => (
                                <OptimizedImage
                                  key={index}
                                  src={image}
                                  alt={`${project.title} screenshot ${
                                    index + 1
                                  }`}
                                  width={250}
                                  height={150}
                                  className="rounded-lg border border-gray-200 w-full"
                                />
                              ))}
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {project.achievements.map(
                                  (achievement, index) => (
                                    <li
                                      key={index}
                                      className="text-xs sm:text-sm text-gray-600 flex items-start"
                                    >
                                      <Award className="h-3 w-3 mr-2 text-yellow-500" />
                                      <span className="flex-1">
                                        {achievement}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2 text-sm sm:text-base">
                                Project Details
                              </h4>
                              <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Users className="h-3 w-3 mr-2" />
                                  Team size: {project.teamSize}
                                </div>
                                <div className="flex items-center">
                                  <CalendarIcon className="h-3 w-3 mr-2" />
                                  {project.startDate} -{' '}
                                  {project.endDate || 'Present'}
                                </div>
                                {project.impact && (
                                  <div className="flex items-start">
                                    <Target className="h-3 w-3 mr-2 mt-0.5" />
                                    <span>{project.impact}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'endorsements' && (
                    <div className="space-y-3 sm:space-y-4">
                      {selectedProfileData.endorsements.map((endorsement) => (
                        <div
                          key={endorsement.id}
                          className="flex items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-lg sm:rounded-xl"
                        >
                          <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                            <OptimizedImage
                              src={endorsement.endorsedBy.avatar}
                              alt={endorsement.endorsedBy.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-gray-900 text-sm sm:text-base truncate">
                                  {endorsement.endorsedBy.name}
                                </span>
                                {endorsement.verified && (
                                  <Verified className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 flex-shrink-0" />
                                )}
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 truncate">
                                {endorsement.endorsedBy.title}
                              </p>
                              <p className="text-xs text-gray-500">
                                Endorsed{' '}
                                {new Date(
                                  endorsement.endorsedAt
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right ml-2">
                            <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                              {endorsement.skill}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'testimonials' && (
                    <div className="space-y-4 sm:space-y-6">
                      {selectedProfileData.testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6"
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                            <OptimizedImage
                              src={testimonial.author.avatar}
                              alt={testimonial.author.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-2">
                                <div>
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                                      {testimonial.author.name}
                                    </h4>
                                    {testimonial.verified && (
                                      <Verified className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                                    )}
                                  </div>
                                  <p className="text-xs sm:text-sm text-gray-600">
                                    {testimonial.author.title}
                                    {testimonial.author.company &&
                                      ` at ${testimonial.author.company}`}
                                  </p>
                                  <div className="flex items-center space-x-2 mt-1">
                                    <span className="text-xs text-gray-500 capitalize">
                                      {testimonial.relationship}
                                    </span>
                                    {testimonial.project && (
                                      <>
                                        <span className="text-xs text-gray-400">
                                          •
                                        </span>
                                        <span className="text-xs text-blue-600">
                                          {testimonial.project}
                                        </span>
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center ml-2">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                        i < testimonial.rating
                                          ? 'text-yellow-400 fill-current'
                                          : 'text-gray-300'
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <blockquote className="text-gray-700 italic leading-relaxed text-sm sm:text-base">
                                "{testimonial.content}"
                              </blockquote>
                              <p className="text-xs text-gray-500 mt-3">
                                {new Date(
                                  testimonial.createdAt
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="border-t border-gray-200 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                    <div className="text-xs sm:text-sm text-gray-500">
                      Last active:{' '}
                      {new Date(
                        selectedProfileData.lastActive
                      ).toLocaleDateString()}
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
                      <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                        <MessageCircle className="h-4 w-4 mr-1 sm:mr-2 inline" />
                        <span className="hidden sm:inline">Message</span>
                        <span className="sm:hidden">Chat</span>
                      </button>
                      <button className="flex-1 sm:flex-none px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-sm">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoFounder;
