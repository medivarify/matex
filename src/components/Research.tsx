import React, { useState } from 'react';
import { Search, Filter, Plus, Users, Calendar, Globe, FlaskConical, Star, Eye, MessageCircle } from 'lucide-react';
import { useResearchProjects } from '../hooks/useStore';

const Research: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { projects, loading, error } = useResearchProjects();


  const categories = [
    { id: 'all', label: 'All Research', count: 156 },
    { id: 'ai', label: 'AI & ML', count: 42 },
    { id: 'fintech', label: 'Fintech & Banking', count: 28 },
    { id: 'agriculture', label: 'Smart Agriculture', count: 35 },
    { id: 'education', label: 'Education Tech', count: 19 },
    { id: 'iot', label: 'IoT & Smart Cities', count: 12 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DIU Research Hub</h1>
            <p className="text-gray-600">Discover innovative DIU research projects and collaborate with fellow researchers</p>
          </div>
          <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm">
            <Plus className="h-5 w-5" />
            <span className="font-medium">Start New Research</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Research Areas</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{category.label}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <FlaskConical className="h-8 w-8 text-purple-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">AI Research Assistant</h4>
              <p className="text-sm text-gray-600 mb-3">Get personalized research recommendations</p>
              <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm">
                Ask AI
              </button>
            </div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="lg:col-span-3">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading research projects...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-700">Error loading research projects: {error}</p>
            </div>
          )}
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={project.avatar}
                      alt={project.lead}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{project.lead} • {project.university}</span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.status === 'Active' 
                        ? 'bg-green-100 text-green-700'
                        : project.status === 'Recruiting'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      project.visibility === 'Public'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {project.visibility}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {project.collaborators} collaborators
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {project.interested} interested
                    </span>
                    <span className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {project.funding}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <Eye className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                      <MessageCircle className="h-5 w-5" />
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Join Research
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;