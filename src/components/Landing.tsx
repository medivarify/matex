import React, { useState } from 'react';
import { Brain, Users, BookOpen, Award, Globe, Zap, ArrowRight, CheckCircle, Star, Sparkles, FlaskConical } from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';

interface LandingProps {
  onLogin: (credentials: { email: string; password: string }) => Promise<void>;
}

const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    try {
      await onLogin({ email, password });
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Matching',
      description: 'Smart algorithms connect you with the right opportunities, collaborators, and mentors.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with DIU community and international universities worldwide.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Verified Credentials',
      description: 'Blockchain-secured academic achievements and professional certifications.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together on research projects and startup ventures seamlessly.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Students' },
    { number: '500+', label: 'Faculty Members' },
    { number: '200+', label: 'Research Projects' },
    { number: '50+', label: 'Startups Launched' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
          <div className="text-center mb-12 sm:mb-16">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6 sm:mb-8">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Mate X
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              The next-generation platform connecting students, researchers, and innovators 
              across Daffodil International University and beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <div className="flex items-center space-x-2 text-green-600 text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">Trusted by 10,000+ students</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600 text-sm sm:text-base">
                <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                <span className="font-medium">4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600 text-sm sm:text-base">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-medium">AI-powered matching</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Features */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}>
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Auth Form */}
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl order-1 lg:order-2" padding="lg">
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Join DIU Connect</h2>
                <p className="text-gray-600 text-sm sm:text-base">Start your journey today</p>
              </div>
              
              <form onSubmit={handleAuth} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a DIU...</label>
                  <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base"
                  >
                    <option value="student">Student</option>
                    <option value="researcher">Faculty/Researcher</option>
                    <option value="educator">Alumni</option>
                  </select>
                </div>

                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your DIU email address"
                  className="bg-white border-gray-300 focus:ring-blue-500 text-base py-3 sm:py-4"
                  required
                />

                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a secure password"
                  className="bg-white border-gray-300 focus:ring-blue-500 text-base py-3 sm:py-4"
                  required
                />

                <Button
                  type="submit"
                  loading={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 shadow-lg hover:shadow-xl text-base min-h-[48px]"
                  fullWidth
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Button>
              </form>

              <div className="text-center mt-4 sm:mt-6">
                <p className="text-gray-600 text-sm sm:text-base">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button 
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-blue-600 hover:text-blue-700 font-medium min-h-[44px] inline-flex items-center"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Empowering the DIU Community
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join thousands of students, faculty, and alumni already connected
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From academic collaboration to career opportunities, DIU Connect provides 
              all the tools you need for your educational and professional journey.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Users,
                title: 'Academic Network',
                description: 'Connect with fellow students, faculty, and alumni across all departments.',
                color: 'text-blue-600 bg-blue-100'
              },
              {
                icon: FlaskConical,
                title: 'Research Portal',
                description: 'Collaborate on cutting-edge research projects and innovations.',
                color: 'text-purple-600 bg-purple-100'
              },
              {
                icon: BookOpen,
                title: 'Knowledge Sharing',
                description: 'Share insights, publications, and academic achievements.',
                color: 'text-green-600 bg-green-100'
              },
              {
                icon: Award,
                title: 'Career Services',
                description: 'Access exclusive job opportunities and career guidance.',
                color: 'text-orange-600 bg-orange-100'
              },
              {
                icon: Globe,
                title: 'Global Reach',
                description: 'Connect with international universities and institutions.',
                color: 'text-cyan-600 bg-cyan-100'
              },
              {
                icon: Zap,
                title: 'Innovation Hub',
                description: 'Find co-founders and launch your startup ideas.',
                color: 'text-red-600 bg-red-100'
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group" padding="lg">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;