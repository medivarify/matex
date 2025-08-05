import React, { useState } from 'react';
import { Users, MessageCircle, UserPlus, Search, Filter, MapPin, Award, BookOpen, Star } from 'lucide-react';
import { useConnections } from '../hooks/useStore';

const Connections: React.FC = () => {
  const [activeTab, setActiveTab] = useState('suggested');
  const { connections, loading, error } = useConnections();

  const suggestedConnections = [
    {
      id: 1,
      name: 'Dr. Rashida Rahman',
      title: 'Assistant Professor',
      university: 'Daffodil International University',
      department: 'Computer Science & Engineering',
      location: 'Dhaka, Bangladesh',
      mutualConnections: 12,
      matchScore: 94,
      skills: ['Machine Learning', 'Data Science', 'Research'],
      avatar: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isOnline: true
    },
    {
      id: 2,
      name: 'Md. Karim Ahmed',
      title: 'Senior Student, CSE',
      university: 'Daffodil International University',
      department: 'Computer Science & Engineering',
      location: 'Dhaka, Bangladesh',
      mutualConnections: 8,
      matchScore: 87,
      skills: ['Web Development', 'Mobile Apps', 'JavaScript'],
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isOnline: false
    },
    {
      id: 3,
      name: 'Fatima Sultana',
      title: 'Research Assistant',
      university: 'Daffodil International University',
      department: 'Software Engineering',
      location: 'Dhaka, Bangladesh',
      mutualConnections: 5,
      matchScore: 91,
      skills: ['Software Testing', 'Quality Assurance', 'Agile'],
      avatar: 'https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      isOnline: true
    }
  ];


  const tabs = [
    { id: 'suggested', label: 'AI Suggestions', count: 24 },
    { id: 'connections', label: 'My Network', count: 1247 },
    { id: 'requests', label: 'Requests', count: 8 },
    { id: 'discover', label: 'Discover', count: null },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">DIU Network</h1>
        <p className="text-gray-600">Connect with DIU students, faculty, alumni, and the broader academic community</p>
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search DIU community by name, department, or skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filters</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
              <Users className="h-5 w-5" />
              <span className="font-medium">Find Collaborators</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-8">
        <nav className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          {tabs.map(({ id, label, count }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                activeTab === id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <span>{label}</span>
              {count && (
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeTab === id ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'suggested' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI-Powered Recommendations</h3>
            </div>
            <p className="text-gray-600">Based on your startup, research interests, publications, and academic goals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedConnections.map((person) => (
              <div key={person.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <img
                        src={person.avatar}
                        alt={person.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      {person.isOnline && (
                        <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{person.name}</h4>
                      <p className="text-sm text-gray-600">{person.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{person.matchScore}%</div>
                    <div className="text-xs text-gray-500">match</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {person.university}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {person.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {person.mutualConnections} mutual connections
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {person.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
                    <UserPlus className="h-4 w-4 mr-1 inline" />
                    Connect
                  </button>
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <MessageCircle className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'connections' && (
        <div className="space-y-6">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading connections...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-700">Error loading connections: {error}</p>
            </div>
          )}
          
          {connections.map((person) => (
            <div key={person.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    {person.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{person.name}</h4>
                    <p className="text-gray-600">{person.title}</p>
                    <p className="text-sm text-gray-500">{person.university}</p>
                    <p className="text-xs text-gray-400">Last interaction: {person.lastInteraction}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <MessageCircle className="h-4 w-4 mr-2 inline" />
                    Message
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Connections;