import React, { useState } from 'react';
import { 
  BookOpen, Users, Briefcase, FlaskConical, TrendingUp, Award, 
  Calendar, Bell, MessageCircle, Star, Eye, Heart, Plus, ArrowRight,
  Target, Zap, Globe, Building, Clock, ChevronRight, Filter,
  BarChart3, PieChart, Activity, Rocket, Brain, Lightbulb,
  GraduationCap, MapPin, ExternalLink, Share2, Download, Sparkles
} from 'lucide-react';
import { useAuth, useNotifications, useResearchProjects, useOpportunities, useCoFounders, useConnections } from '../hooks/useStore';
import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { OptimizedImage } from './ui/OptimizedImage';

interface DashboardProps {
  user: any;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [activeTimeframe, setActiveTimeframe] = useState('week');
  const { notifications, unreadCount } = useNotifications();
  const { projects } = useResearchProjects();
  const { jobs } = useOpportunities();
  const { profiles } = useCoFounders();
  const { connections } = useConnections();

  const analyticsData = {
    profileViews: { current: 234, change: 12 },
    networkGrowth: { current: 47, change: 8 },
    researchEngagement: { current: 89, change: 15 },
    opportunityMatches: { current: 23, change: 5 }
  };

  const recentActivities = [
    {
      id: 1,
      type: 'research',
      title: 'New collaboration request',
      description: 'Dr. Rahman invited you to join Smart Agriculture project',
      time: '2 hours ago',
      icon: FlaskConical,
      color: 'text-blue-600 bg-blue-50 border-blue-200'
    },
    {
      id: 2,
      type: 'connection',
      title: 'Connection accepted',
      description: 'Karim Ahmed accepted your connection request',
      time: '4 hours ago',
      icon: Users,
      color: 'text-green-600 bg-green-50 border-green-200'
    },
    {
      id: 3,
      type: 'opportunity',
      title: 'New job match',
      description: 'Software Engineer position at Brain Station 23',
      time: '6 hours ago',
      icon: Briefcase,
      color: 'text-purple-600 bg-purple-50 border-purple-200'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Profile milestone',
      description: 'Your profile reached 1000+ views this month',
      time: '1 day ago',
      icon: Award,
      color: 'text-orange-600 bg-orange-50 border-orange-200'
    }
  ];

  const quickActions = [
    { 
      title: 'Start Research', 
      description: 'Begin a new collaboration',
      icon: FlaskConical, 
      color: 'from-blue-500 to-blue-600',
      href: '/research'
    },
    { 
      title: 'Find Co-Founder', 
      description: 'Connect with partners',
      icon: Rocket, 
      color: 'from-purple-500 to-purple-600',
      href: '/cofounder'
    },
    { 
      title: 'Explore Jobs', 
      description: 'Discover opportunities',
      icon: Briefcase, 
      color: 'from-green-500 to-green-600',
      href: '/marketplace'
    },
    { 
      title: 'Check Fundability', 
      description: 'Assess funding readiness',
      icon: TrendingUp, 
      color: 'from-orange-500 to-red-600',
      href: '/fundability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="relative">
                  <OptimizedImage
                    src={user.avatar}
                    alt={user.name}
                    width={80}
                    height={80}
                    className="rounded-2xl border-4 border-white/20 shadow-xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-3 border-white rounded-full"></div>
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                    Good morning, {user.name.split(' ')[0]}! 👋
                  </h1>
                  <p className="text-blue-100 text-lg sm:text-xl">Ready to make an impact today?</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      <Sparkles className="h-3 w-3 mr-1" />
                      Premium Member
                    </Badge>
                    <span className="text-blue-200 text-sm">Member since Jan 2024</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold">{user.stats.connections}</div>
                  <div className="text-blue-100 text-sm">Connections</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold">{user.stats.publications}</div>
                  <div className="text-blue-100 text-sm">Publications</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold">{user.stats.citations}</div>
                  <div className="text-blue-100 text-sm">Citations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                  <div className="text-2xl font-bold">{user.stats.projects}</div>
                  <div className="text-blue-100 text-sm">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 bg-white/80 backdrop-blur-sm" interactive>
              <div className={`bg-gradient-to-r ${action.color} p-4 rounded-2xl mb-4 group-hover:shadow-lg transition-all duration-300`}>
                <action.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors text-lg">
                {action.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{action.description}</p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Analytics Overview */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Impact Dashboard</h2>
                  <p className="text-gray-600">Track your academic and professional growth</p>
                </div>
                <select 
                  value={activeTimeframe} 
                  onChange={(e) => setActiveTimeframe(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-900">{analyticsData.profileViews.current}</div>
                      <div className="text-sm text-blue-600 flex items-center justify-end">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +{analyticsData.profileViews.change}%
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-blue-900 text-lg">Profile Views</h3>
                  <p className="text-blue-700">People discovering your work</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-600 p-3 rounded-xl shadow-lg">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-900">{analyticsData.networkGrowth.current}</div>
                      <div className="text-sm text-green-600 flex items-center justify-end">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +{analyticsData.networkGrowth.change}%
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-green-900 text-lg">Network Growth</h3>
                  <p className="text-green-700">New connections made</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-purple-600 p-3 rounded-xl shadow-lg">
                      <FlaskConical className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-900">{analyticsData.researchEngagement.current}</div>
                      <div className="text-sm text-purple-600 flex items-center justify-end">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +{analyticsData.researchEngagement.change}%
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-purple-900 text-lg">Research Engagement</h3>
                  <p className="text-purple-700">Interest in your projects</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-orange-600 p-3 rounded-xl shadow-lg">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-orange-900">{analyticsData.opportunityMatches.current}</div>
                      <div className="text-sm text-orange-600 flex items-center justify-end">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +{analyticsData.opportunityMatches.change}%
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-orange-900 text-lg">Opportunity Matches</h3>
                  <p className="text-orange-700">Relevant opportunities found</p>
                </div>
              </div>
            </Card>

            {/* Recent Research Projects */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Active Research</h2>
                  <p className="text-gray-600">Your ongoing research collaborations</p>
                </div>
                <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>
              
              <div className="space-y-6">
                {projects.slice(0, 2).map((project) => (
                  <div key={project.id} className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <OptimizedImage
                          src={project.avatar}
                          alt={project.lead}
                          width={56}
                          height={56}
                          className="rounded-xl shadow-md"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2 text-lg">{project.title}</h3>
                          <p className="text-gray-600 mb-1">{project.lead} • {project.university}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {project.collaborators} collaborators
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {project.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Badge variant={project.status === 'Active' ? 'success' : 'warning'} className="shadow-sm">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="border-blue-300 text-blue-600 hover:bg-blue-50">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Recent Activity</h3>
                  <p className="text-gray-600 text-sm">Stay updated with your network</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className={`flex items-start space-x-3 p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${activity.color}`}>
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm">{activity.title}</h4>
                      <p className="text-gray-600 text-xs mt-1 line-clamp-2">{activity.description}</p>
                      <p className="text-gray-500 text-xs mt-2">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-6 border-gray-300 hover:bg-gray-50" size="sm">
                View All Activity
              </Button>
            </Card>

            {/* AI Recommendations */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI Insights</h3>
                  <p className="text-gray-600 text-sm">Personalized recommendations</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Smart Match</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dr. Rahman's agricultural AI research has 94% compatibility with your interests. Consider reaching out!
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Growth Opportunity</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your ML skills are trending! 23 new opportunities match your expertise.
                  </p>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg" size="sm">
                <Brain className="h-4 w-4 mr-2" />
                Get More Insights
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;