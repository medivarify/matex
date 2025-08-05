import React, { useState } from 'react';
import { Briefcase, DollarSign, Clock, MapPin, Star, Filter, Search, TrendingUp, Users, Award } from 'lucide-react';
import { useOpportunities } from '../hooks/useStore';

const Marketplace: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { jobs, loading, error } = useOpportunities();


  const categories = [
    { id: 'all', label: 'All Opportunities', count: 234 },
    { id: 'research', label: 'Research Positions', count: 89 },
    { id: 'internships', label: 'Internships', count: 67 },
    { id: 'consulting', label: 'Consulting', count: 34 },
    { id: 'teaching', label: 'Teaching', count: 44 },
  ];

  const stats = [
    { label: 'Active Opportunities', value: '234', change: '+12%', icon: Briefcase },
    { label: 'Avg. Salary', value: '৳75K', change: '+8%', icon: DollarSign },
    { label: 'Success Rate', value: '78%', change: '+5%', icon: TrendingUp },
    { label: 'New This Week', value: '47', change: '+23%', icon: Star },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">DIU Career Hub</h1>
        <p className="text-gray-600">Connect your DIU education with career opportunities in Bangladesh and Global</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} vs last month
                </p>
              </div>
              <stat.icon className="h-10 w-10 text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search jobs by title, company, or skills..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-3">
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Types</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Internship</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Locations</option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
              <Filter className="h-5 w-5 text-gray-500" />
              <span className="font-medium text-gray-700">More Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeCategory === category.id
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

            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <Award className="h-8 w-8 text-green-600 mb-2" />
              <h4 className="font-semibold text-gray-900 mb-1">Premium Matching</h4>
              <p className="text-sm text-gray-600 mb-3">Get matched with exclusive opportunities</p>
              <button className="w-full px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Opportunities List */}
        <div className="lg:col-span-3">
          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading opportunities...</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-700">Error loading opportunities: {error}</p>
            </div>
          )}
          
          <div className="space-y-6">
            {jobs.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                      {opportunity.verified && (
                        <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                          Verified
                        </div>
                      )}
                      {opportunity.urgent && (
                        <div className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                          Urgent
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium text-blue-600">{opportunity.company}</span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {opportunity.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {opportunity.posted}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900 mb-1">{opportunity.salary}</div>
                    <div className="text-sm text-gray-600">{opportunity.type}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{opportunity.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {opportunity.applicants} applicants
                    </span>
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {opportunity.rating} rating
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      Save
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200 font-medium">
              Load More Opportunities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;