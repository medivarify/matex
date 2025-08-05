import React, { useState } from 'react';
import { 
  TrendingUp, DollarSign, Target, Users, Award, CheckCircle, 
  AlertTriangle, Star, BarChart3, PieChart, Activity, Rocket,
  Brain, Lightbulb, Building, Globe, Calendar, ArrowRight,
  FileText, Shield, Zap, Eye, MessageCircle, Download,
  Plus, Filter, Search, ExternalLink, ThumbsUp, BookOpen
} from 'lucide-react';
import Card from './ui/Card';
import Button from './ui/Button';
import Badge from './ui/Badge';
import { OptimizedImage } from './ui/OptimizedImage';

const Fundability: React.FC = () => {
  const [activeTab, setActiveTab] = useState('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    businessModel: '',
    marketSize: '',
    revenue: '',
    team: '',
    traction: '',
    competition: '',
    funding: ''
  });

  const fundabilityScore = 87; // Mock score based on assessment

  const assessmentCategories = [
    {
      id: 'business',
      title: 'Business Model',
      description: 'Revenue streams, scalability, and market fit',
      score: 92,
      status: 'excellent',
      icon: Building,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 'market',
      title: 'Market Opportunity',
      description: 'Market size, growth potential, and timing',
      score: 85,
      status: 'good',
      icon: TrendingUp,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 'team',
      title: 'Team Strength',
      description: 'Experience, skills, and commitment',
      score: 88,
      status: 'good',
      icon: Users,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      id: 'traction',
      title: 'Traction & Growth',
      description: 'User growth, revenue, and key metrics',
      score: 82,
      status: 'good',
      icon: Activity,
      color: 'text-orange-600 bg-orange-100'
    },
    {
      id: 'financial',
      title: 'Financial Health',
      description: 'Burn rate, runway, and projections',
      score: 90,
      status: 'excellent',
      icon: DollarSign,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 'competitive',
      title: 'Competitive Advantage',
      description: 'Differentiation and barriers to entry',
      score: 84,
      status: 'good',
      icon: Shield,
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  const investorProfiles = [
    {
      id: 1,
      name: 'Bangladesh Angels Network',
      type: 'Angel Network',
      focus: ['FinTech', 'EdTech', 'HealthTech'],
      stage: 'Pre-seed to Seed',
      ticketSize: '৳5L - ৳50L',
      portfolio: 47,
      successRate: '23%',
      avatar: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      verified: true,
      activelyInvesting: true,
      matchScore: 94
    },
    {
      id: 2,
      name: 'Startup Bangladesh',
      type: 'Government Fund',
      focus: ['Social Impact', 'AgriTech', 'CleanTech'],
      stage: 'Seed to Series A',
      ticketSize: '৳10L - ৳1Cr',
      portfolio: 89,
      successRate: '31%',
      avatar: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      verified: true,
      activelyInvesting: true,
      matchScore: 89
    },
    {
      id: 3,
      name: 'IDLC Venture Capital',
      type: 'VC Fund',
      focus: ['FinTech', 'E-commerce', 'SaaS'],
      stage: 'Series A to B',
      ticketSize: '৳50L - ৳5Cr',
      portfolio: 23,
      successRate: '41%',
      avatar: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      verified: true,
      activelyInvesting: false,
      matchScore: 76
    }
  ];

  const fundingOpportunities = [
    {
      id: 1,
      title: 'DIU Innovation Challenge 2025',
      organizer: 'Daffodil International University',
      type: 'Competition',
      prize: '৳10,00,000',
      deadline: '2025-03-15',
      stage: 'Early Stage',
      focus: ['EdTech', 'FinTech', 'HealthTech'],
      applicants: 156,
      description: 'Annual innovation challenge for DIU students and alumni to showcase their startup ideas.',
      requirements: ['DIU affiliation', 'Working prototype', 'Business plan'],
      status: 'open'
    },
    {
      id: 2,
      title: 'Bangladesh Startup Accelerator',
      organizer: 'Startup Bangladesh',
      type: 'Accelerator',
      prize: '৳25,00,000 + Mentorship',
      deadline: '2025-02-28',
      stage: 'Seed',
      focus: ['All Sectors'],
      applicants: 89,
      description: '3-month intensive program with funding, mentorship, and market access.',
      requirements: ['Registered company', 'MVP ready', 'Team of 2+'],
      status: 'open'
    },
    {
      id: 3,
      title: 'Women Entrepreneur Fund',
      organizer: 'Bangladesh Bank',
      type: 'Grant',
      prize: '৳15,00,000',
      deadline: '2025-04-30',
      stage: 'Pre-seed to Seed',
      focus: ['Women-led Startups'],
      applicants: 67,
      description: 'Supporting women entrepreneurs in Bangladesh with funding and mentorship.',
      requirements: ['Female founder/co-founder', 'Social impact focus'],
      status: 'open'
    }
  ];

  const tabs = [
    { id: 'assessment', label: 'Fundability Assessment', icon: BarChart3 },
    { id: 'investors', label: 'Investor Network', icon: Users },
    { id: 'opportunities', label: 'Funding Opportunities', icon: Target },
    { id: 'resources', label: 'Resources & Tools', icon: BookOpen }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return 'bg-green-100';
    if (score >= 80) return 'bg-blue-100';
    if (score >= 70) return 'bg-orange-100';
    return 'bg-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
              Fundability Hub
            </h1>
            <p className="text-gray-600 text-lg">Assess your startup's funding readiness and connect with investors</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg">
            <Plus className="h-5 w-5 mr-2" />
            Start Assessment
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-700 mb-1 font-medium">Your Fundability Score</p>
                <p className="text-3xl font-bold text-green-900">{fundabilityScore}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12 points this month
                </p>
              </div>
              <Award className="h-10 w-10 text-green-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-700 mb-1 font-medium">Matched Investors</p>
                <p className="text-3xl font-bold text-blue-900">23</p>
                <p className="text-xs text-blue-600 flex items-center mt-1">
                  <Users className="h-3 w-3 mr-1" />
                  Based on your profile
                </p>
              </div>
              <Users className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-700 mb-1 font-medium">Open Opportunities</p>
                <p className="text-3xl font-bold text-purple-900">47</p>
                <p className="text-xs text-purple-600 flex items-center mt-1">
                  <Target className="h-3 w-3 mr-1" />
                  Matching your stage
                </p>
              </div>
              <Target className="h-10 w-10 text-purple-600" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-700 mb-1 font-medium">Success Rate</p>
                <p className="text-3xl font-bold text-orange-900">78%</p>
                <p className="text-xs text-orange-600 flex items-center mt-1">
                  <Star className="h-3 w-3 mr-1" />
                  DIU startups funded
                </p>
              </div>
              <Star className="h-10 w-10 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
          <nav className="flex space-x-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'assessment' && (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Assessment Categories */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Fundability Assessment</h2>
                  <p className="text-gray-600">Comprehensive evaluation of your startup's investment readiness</p>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold ${getScoreColor(fundabilityScore)}`}>{fundabilityScore}</div>
                  <div className="text-sm text-gray-500">Overall Score</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {assessmentCategories.map((category) => (
                  <div key={category.id} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getScoreColor(category.score)}`}>{category.score}</div>
                        <div className="text-xs text-gray-500">Score</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={category.status === 'excellent' ? 'success' : 'primary'}
                        size="sm"
                      >
                        {category.status === 'excellent' ? 'Excellent' : 'Good'}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Improve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Recommendations */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">AI-Powered Recommendations</h3>
                  <p className="text-gray-600 text-sm">Personalized insights to improve your fundability</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <Lightbulb className="h-5 w-5 text-yellow-500" />
                    <span className="font-semibold text-gray-900">Market Validation</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Consider conducting customer interviews to strengthen your market validation. 67% of successful startups have at least 50 customer interviews before seeking funding.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="font-semibold text-gray-900">Traction Metrics</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your user growth is strong! Consider adding revenue metrics and customer retention data to make your traction story even more compelling.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Overview */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Assessment Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Completeness</span>
                    <span className="text-sm font-bold text-blue-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="pt-2 space-y-2 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Business model defined
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Financial projections complete
                  </div>
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Team profiles added
                  </div>
                  <div className="flex items-center text-orange-600">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Add competitive analysis
                  </div>
                </div>
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-green-500 to-blue-500 p-3 rounded-xl shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Next Steps</h3>
                  <p className="text-gray-600 text-sm">Recommended actions</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg border border-green-200">
                  <span className="text-sm font-medium text-gray-900">Complete assessment</span>
                  <Button size="sm" variant="outline">
                    Continue
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg border border-green-200">
                  <span className="text-sm font-medium text-gray-900">Connect with investors</span>
                  <Button size="sm" variant="outline">
                    Browse
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/80 rounded-lg border border-green-200">
                  <span className="text-sm font-medium text-gray-900">Apply for funding</span>
                  <Button size="sm" variant="outline">
                    Explore
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {activeTab === 'investors' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search investors by name, focus area, or stage..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-3">
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Stages</option>
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                  <option>Series B+</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Industries</option>
                  <option>FinTech</option>
                  <option>EdTech</option>
                  <option>HealthTech</option>
                  <option>AgriTech</option>
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </Card>

          {/* Investor Profiles */}
          <div className="space-y-6">
            {investorProfiles.map((investor) => (
              <Card key={investor.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <OptimizedImage
                        src={investor.avatar}
                        alt={investor.name}
                        width={64}
                        height={64}
                        className="rounded-xl shadow-md"
                      />
                      {investor.verified && (
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                      {investor.activelyInvesting && (
                        <div className="absolute -top-1 -left-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{investor.name}</h3>
                        <Badge variant="secondary" size="sm">{investor.type}</Badge>
                        {investor.activelyInvesting && (
                          <Badge variant="success" size="sm">Actively Investing</Badge>
                        )}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Focus Areas:</span> {investor.focus.join(', ')}
                        </div>
                        <div>
                          <span className="font-medium">Stage:</span> {investor.stage}
                        </div>
                        <div>
                          <span className="font-medium">Ticket Size:</span> {investor.ticketSize}
                        </div>
                        <div>
                          <span className="font-medium">Portfolio:</span> {investor.portfolio} companies
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {investor.successRate} success rate
                        </span>
                        <span className="flex items-center text-blue-600">
                          <Target className="h-4 w-4 mr-1" />
                          {investor.matchScore}% match
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">{investor.matchScore}%</div>
                    <div className="text-xs text-gray-500">compatibility</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Building className="h-4 w-4 mr-1" />
                      {investor.portfolio} portfolio companies
                    </span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {investor.successRate} success rate
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Connect
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'opportunities' && (
        <div className="space-y-6">
          {/* Search and Filters */}
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search funding opportunities..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-3">
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Types</option>
                  <option>Competition</option>
                  <option>Grant</option>
                  <option>Accelerator</option>
                  <option>VC Fund</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Stages</option>
                  <option>Idea Stage</option>
                  <option>Early Stage</option>
                  <option>Growth Stage</option>
                </select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </Card>

          {/* Funding Opportunities */}
          <div className="space-y-6">
            {fundingOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                      <Badge 
                        variant={opportunity.status === 'open' ? 'success' : 'secondary'} 
                        size="sm"
                      >
                        {opportunity.status === 'open' ? 'Open' : 'Closed'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <span className="font-medium text-blue-600">{opportunity.organizer}</span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                      </span>
                      <Badge variant="primary" size="sm">{opportunity.type}</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600 mb-1">{opportunity.prize}</div>
                    <div className="text-sm text-gray-600">{opportunity.stage}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{opportunity.description}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.focus.map((area) => (
                        <span key={area} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {opportunity.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-center">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {opportunity.applicants} applicants
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {Math.ceil((new Date(opportunity.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days left
                    </span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resource Cards */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-600 p-3 rounded-xl shadow-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Pitch Deck Templates</h3>
                <p className="text-gray-600 text-sm">Professional templates</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Download investor-ready pitch deck templates used by successful startups.
            </p>
            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
              <Download className="h-4 w-4 mr-2" />
              Download Templates
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-3 rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Funding Guides</h3>
                <p className="text-gray-600 text-sm">Step-by-step guides</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Comprehensive guides on fundraising, from preparation to closing deals.
            </p>
            <Button variant="outline" className="w-full border-green-300 text-green-600 hover:bg-green-50">
              <BookOpen className="h-4 w-4 mr-2" />
              Read Guides
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-600 p-3 rounded-xl shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Mentor Network</h3>
                <p className="text-gray-600 text-sm">Expert guidance</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Connect with experienced entrepreneurs and investors for mentorship.
            </p>
            <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50">
              <Users className="h-4 w-4 mr-2" />
              Find Mentors
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-orange-600 p-3 rounded-xl shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Financial Models</h3>
                <p className="text-gray-600 text-sm">Excel templates</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Ready-to-use financial modeling templates for startups and projections.
            </p>
            <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50">
              <Download className="h-4 w-4 mr-2" />
              Get Models
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-indigo-600 p-3 rounded-xl shadow-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Legal Documents</h3>
                <p className="text-gray-600 text-sm">Startup legal kit</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Essential legal documents and templates for startup incorporation and funding.
            </p>
            <Button variant="outline" className="w-full border-indigo-300 text-indigo-600 hover:bg-indigo-50">
              <Shield className="h-4 w-4 mr-2" />
              Access Documents
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-pink-600 p-3 rounded-xl shadow-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Startup Tools</h3>
                <p className="text-gray-600 text-sm">Essential software</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Curated list of tools and software to help you build and scale your startup.
            </p>
            <Button variant="outline" className="w-full border-pink-300 text-pink-600 hover:bg-pink-50">
              <Zap className="h-4 w-4 mr-2" />
              Explore Tools
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Fundability;