import React, { useState } from 'react';
import {
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Star,
  Edit3,
  Plus,
  ExternalLink,
  Verified,
  Camera,
  Mail,
  Phone,
  Globe,
  Github,
  Linkedin,
  Twitter,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  Download,
  Settings,
  GraduationCap,
  Building,
  Clock,
  Target,
  Zap,
  Heart,
} from 'lucide-react';
import { OptimizedImage } from './ui/OptimizedImage';

interface ProfileProps {
  user: any;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const skills = [
    { name: 'Machine Learning', level: 95, verified: true, endorsements: 47 },
    { name: 'Data Science', level: 88, verified: true, endorsements: 32 },
    { name: 'Python', level: 92, verified: true, endorsements: 58 },
    {
      name: 'Research Methodology',
      level: 85,
      verified: false,
      endorsements: 23,
    },
    { name: 'Academic Writing', level: 78, verified: true, endorsements: 19 },
    { name: 'Deep Learning', level: 83, verified: true, endorsements: 28 },
  ];

  const publications = [
    {
      title: 'Machine Learning for Agricultural Optimization in Bangladesh',
      journal: 'Journal of Computer Science - DIU',
      year: 2024,
      citations: 23,
      coAuthors: ['Dr. Rashida Rahman', 'Prof. Aminul Islam'],
      impact: 'High',
      type: 'Research Paper',
    },
    {
      title: 'Blockchain Applications in Rural Banking Systems',
      journal: 'Bangladesh Journal of Technology',
      year: 2023,
      citations: 67,
      coAuthors: ['Dr. Karim Ahmed', 'Prof. Fatima Begum'],
      impact: 'Very High',
      type: 'Conference Paper',
    },
    {
      title: 'AI-Driven Solutions for Smart Cities in Developing Nations',
      journal: 'International Conference on Smart Technologies',
      year: 2023,
      citations: 34,
      coAuthors: ['Dr. Aminul Islam'],
      impact: 'Medium',
      type: 'Conference Paper',
    },
  ];

  const projects = [
    {
      title: 'Smart Agriculture Platform',
      description:
        'IoT-based solution for optimizing crop yields using machine learning algorithms and sensor data analysis.',
      status: 'Active',
      collaborators: 5,
      funding: '৳12,00,000',
      progress: 75,
      technologies: ['IoT', 'Python', 'TensorFlow', 'React'],
      startDate: 'Jan 2024',
    },
    {
      title: 'Digital Payment System for Rural Areas',
      description:
        'Mobile banking solution designed specifically for rural communities with limited internet connectivity.',
      status: 'In Review',
      collaborators: 3,
      funding: 'Seeking',
      progress: 60,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain'],
      startDate: 'Mar 2024',
    },
    {
      title: 'AI-Powered Learning Management System',
      description:
        'Adaptive learning platform that personalizes education content based on student performance and learning patterns.',
      status: 'Completed',
      collaborators: 8,
      funding: '৳8,00,000',
      progress: 100,
      technologies: ['AI/ML', 'React', 'Python', 'PostgreSQL'],
      startDate: 'Sep 2023',
    },
  ];

  const achievements = [
    {
      title: 'Best Research Paper Award',
      organization: 'DIU Research Symposium 2024',
      date: 'March 2024',
      description:
        'Recognized for outstanding contribution to agricultural technology research',
      icon: Award,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      title: "Dean's List",
      organization: 'Daffodil International University',
      date: 'Fall 2023',
      description: 'Academic excellence with CGPA 3.95/4.00',
      icon: GraduationCap,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      title: 'Innovation Challenge Winner',
      organization: 'Bangladesh Startup Summit',
      date: 'November 2023',
      description: 'First place in fintech innovation category',
      icon: Zap,
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'research', label: 'Research & Projects', icon: Award },
    { id: 'skills', label: 'Skills & Expertise', icon: Star },
    { id: 'achievements', label: 'Achievements', icon: Target },
    { id: 'network', label: 'Network', icon: Users },
  ];

  const socialLinks = [
    { platform: 'LinkedIn', icon: Linkedin, url: '#', color: 'text-blue-600' },
    { platform: 'GitHub', icon: Github, url: '#', color: 'text-gray-800' },
    { platform: 'Twitter', icon: Twitter, url: '#', color: 'text-blue-400' },
    { platform: 'Website', icon: Globe, url: '#', color: 'text-green-600' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Enhanced Profile Header */}
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-8">
        {/* Cover Photo */}
        <div className="relative h-48 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-4 right-4">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-200">
              <Camera className="h-5 w-5 text-white" />
            </button>
          </div>
          {/* Floating Stats */}
          <div className="absolute bottom-4 left-8 flex space-x-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white text-lg font-bold">1,247</div>
              <div className="text-white/80 text-sm">Connections</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white text-lg font-bold">892</div>
              <div className="text-white/80 text-sm">Citations</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-white text-lg font-bold">15</div>
              <div className="text-white/80 text-sm">Publications</div>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="flex items-end justify-between -mt-20 mb-8">
            <div className="flex items-end space-x-6">
              {/* Profile Picture */}
              <div className="relative">
                <OptimizedImage
                  src={user.avatar}
                  alt={user.name}
                  width={160}
                  height={160}
                  className="rounded-3xl border-6 border-white object-cover shadow-xl"
                  loading="eager"
                  placeholder="blur"
                />
                <div className="absolute -bottom-2 -right-2 h-12 w-12 bg-green-500 border-4 border-white rounded-full flex items-center justify-center">
                  <div className="h-3 w-3 bg-white rounded-full"></div>
                </div>
                <button className="absolute top-2 right-2 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-200">
                  <Camera className="h-4 w-4 text-white" />
                </button>
              </div>

              {/* Basic Info */}
              <div className="pb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-4xl font-bold text-gray-900">
                    {user.name}
                  </h1>
                  <Verified className="h-8 w-8 text-blue-500" />
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Pro Member
                  </div>
                </div>
                <p className="text-xl text-gray-600 mb-3 font-medium">
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)} •{' '}
                  {user.department}
                </p>
                <div className="flex items-center text-gray-500 space-x-6 mb-4">
                  <span className="flex items-center">
                    <Building className="h-5 w-5 mr-2" />
                    {user.university}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Dhaka
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Joined Jan 2025
                  </span>
                </div>

                {/* Contact Info */}
                <div className="flex items-center space-x-4 mb-4">
                  <a
                    href="mailto:alex.chen@diu.edu.bd"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    <span className="text-sm">alex.chen@diu.edu.bd</span>
                  </a>
                  <a
                    href="tel:+8801234567890"
                    className="flex items-center text-green-600 hover:text-green-700"
                  >
                    <Phone className="h-4 w-4 mr-1" />
                    <span className="text-sm">+880 1734222467</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      className={`p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 ${social.color}`}
                      title={social.platform}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 pb-6">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                <Download className="h-4 w-4" />
                <span>CV</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                <MessageCircle className="h-4 w-4" />
                <span>Message</span>
              </button>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors duration-200"
              >
                <Edit3 className="h-4 w-4" />
                <span>Edit</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium transition-colors duration-200 ${
                    activeTab === id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">About</h3>
                  {isEditing && (
                    <button className="text-blue-600 hover:text-blue-700">
                      <Edit3 className="h-5 w-5" />
                    </button>
                  )}
                </div>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Passionate researcher and innovator focused on the
                    intersection of artificial intelligence and sustainable
                    development. Currently pursuing advanced machine learning
                    techniques to improve agricultural productivity and
                    financial inclusion in Bangladesh.
                  </p>
                  <p className="mb-4">
                    My research interests span across AI applications in
                    agriculture, fintech solutions for rural communities, and
                    educational technology. I believe in leveraging technology
                    to solve real-world problems and create positive social
                    impact.
                  </p>
                  <p>
                    Committed to ethical AI development, interdisciplinary
                    collaboration, and mentoring the next generation of
                    researchers and innovators at DIU and beyond.
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Published New Research Paper
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        "Machine Learning for Agricultural Optimization in
                        Bangladesh" - Journal of Computer Science
                      </p>
                      <p className="text-gray-500 text-xs mt-2">2 days ago</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>234 views</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                    <div className="bg-green-600 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Joined Research Collaboration
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Started collaboration with MIT researchers on
                        sustainable agriculture project
                      </p>
                      <p className="text-gray-500 text-xs mt-2">1 week ago</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Heart className="h-4 w-4" />
                      <span>47 likes</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                    <div className="bg-purple-600 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Received Award
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Best Research Paper Award at DIU Research Symposium 2024
                      </p>
                      <p className="text-gray-500 text-xs mt-2">2 weeks ago</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>12 comments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Profile Strength
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Completeness
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        92%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                        style={{ width: '92%' }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2 text-sm">
                    <div className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Profile photo added
                    </div>
                    <div className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Contact information complete
                    </div>
                    <div className="flex items-center text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Skills verified
                    </div>
                    <div className="flex items-center text-yellow-600">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                      Add more publications
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Preview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Top Skills
                  </h3>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    View All
                  </button>
                </div>
                <div className="space-y-3">
                  {skills.slice(0, 4).map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900 text-sm">
                          {skill.name}
                        </span>
                        {skill.verified && (
                          <Verified className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-blue-600 h-1.5 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Interests */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Research Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Agricultural Technology',
                    'Fintech',
                    'Data Science',
                    'IoT',
                    'Blockchain',
                    'Mobile Development',
                    'AI Ethics',
                  ].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm border border-blue-200"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Skills & Expertise
              </h3>
              <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                <Plus className="h-5 w-5" />
                <span>Add Skill</span>
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200 bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900 text-lg">
                        {skill.name}
                      </span>
                      {skill.verified && (
                        <Verified className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {skill.level}%
                      </div>
                      <div className="text-xs text-gray-500">proficiency</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      {skill.endorsements} endorsements
                    </span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      + Endorse
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="space-y-8">
            {/* Publications */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Publications
                </h3>
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors duration-200">
                  <Plus className="h-5 w-5" />
                  <span>Add Publication</span>
                </button>
              </div>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent rounded-r-xl"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">
                          {pub.title}
                        </h4>
                        <p className="text-blue-600 font-medium mb-1">
                          {pub.journal} • {pub.year}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          Co-authors: {pub.coAuthors.join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                            pub.impact === 'Very High'
                              ? 'bg-red-100 text-red-700'
                              : pub.impact === 'High'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {pub.impact} Impact
                        </div>
                        <div className="text-sm text-gray-500">{pub.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <span className="flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {pub.citations} citations
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {pub.coAuthors.length} co-authors
                        </span>
                      </div>
                      <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                        <ExternalLink className="h-4 w-4" />
                        <span className="text-sm">View Paper</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Research Projects
                </h3>
                <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors duration-200">
                  <Plus className="h-5 w-5" />
                  <span>New Project</span>
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white to-gray-50"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-bold text-gray-900 text-lg">
                        {project.title}
                      </h4>
                      <span
                        className={`px-3 py-1 text-xs rounded-full font-medium ${
                          project.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : project.status === 'Completed'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          Progress
                        </span>
                        <span className="text-sm font-bold text-blue-600">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-50 text-purple-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="space-y-1">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>{project.collaborators} collaborators</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>Started {project.startDate}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-gray-900">
                          {project.funding}
                        </div>
                        <div className="text-xs">Funding</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">
                Achievements & Recognition
              </h3>
              <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors duration-200">
                <Plus className="h-5 w-5" />
                <span>Add Achievement</span>
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-200 bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${achievement.color}`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-blue-600 font-medium text-sm mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {achievement.description}
                      </p>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
