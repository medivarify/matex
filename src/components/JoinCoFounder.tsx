import React, { useState } from 'react';
import { 
  User, Building, MapPin, Briefcase, Target, DollarSign, 
  Plus, X, Upload, Star, Award, Github, ExternalLink,
  ArrowLeft, ArrowRight, CheckCircle, AlertCircle, Camera,
  Mail, Phone, Linkedin, Twitter, Globe, Calendar
} from 'lucide-react';
import Button from './ui/Button';
import Input from './ui/Input';
import Card from './ui/Card';

const JoinCoFounder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    title: '',
    university: 'Daffodil International University',
    department: '',
    location: 'Dhaka, Bangladesh',
    bio: '',
    avatar: '',
    
    // Co-founder Details
    lookingFor: '',
    expertise: [] as string[],
    industries: [] as string[],
    commitment: '',
    equity: '',
    experience: '',
    previousStartups: 0,
    funding: '',
    
    // Portfolio
    portfolio: [] as any[],
    
    // Contact & Social
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    website: '',
    twitter: '',
    
    // Availability
    availability: 'actively-looking'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, title: 'Profile Setup', description: 'Create your professional profile' },
    { id: 2, title: 'Co-founder Goals', description: 'Define what you\'re seeking' },
    { id: 3, title: 'Experience & Portfolio', description: 'Showcase your background' },
    { id: 4, title: 'Contact & Launch', description: 'Connect and go live' }
  ];

  const expertiseOptions = [
    'Web Development', 'Mobile Development', 'AI/Machine Learning', 'Data Science',
    'Blockchain', 'UI/UX Design', 'Product Management', 'Digital Marketing',
    'Business Development', 'Finance', 'Operations', 'Sales'
  ];

  const industryOptions = [
    'FinTech', 'EdTech', 'HealthTech', 'AgriTech', 'E-commerce', 'SaaS',
    'Social Impact', 'Consumer Apps', 'Enterprise Software', 'Gaming'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addToArray = (field: string, value: string) => {
    if (value && !formData[field as keyof typeof formData].includes(value)) {
      handleInputChange(field, [...formData[field as keyof typeof formData], value]);
    }
  };

  const removeFromArray = (field: string, value: string) => {
    handleInputChange(field, formData[field as keyof typeof formData].filter((item: string) => item !== value));
  };

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.department) newErrors.department = 'Department is required';
        if (!formData.bio) newErrors.bio = 'Bio is required';
        break;
      case 2:
        if (!formData.lookingFor) newErrors.lookingFor = 'Please specify what you\'re looking for';
        if (formData.expertise.length === 0) newErrors.expertise = 'Please select at least one expertise';
        if (formData.industries.length === 0) newErrors.industries = 'Please select at least one industry';
        if (!formData.commitment) newErrors.commitment = 'Commitment level is required';
        if (!formData.equity) newErrors.equity = 'Equity range is required';
        break;
      case 3:
        if (!formData.experience) newErrors.experience = 'Experience is required';
        break;
      case 4:
        if (!formData.email) newErrors.email = 'Email is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect or show success message
      alert('Successfully joined as Co-Founder! Your profile is now live.');
      
    } catch (error) {
      alert('Error creating profile. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderProfilePreview = () => (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="px-8 pb-8">
        <div className="flex items-start justify-between -mt-16 mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-2xl border-4 border-white shadow-xl flex items-center justify-center">
              {formData.avatar ? (
                <img src={formData.avatar} alt="Profile" className="w-full h-full rounded-2xl object-cover" />
              ) : (
                <User className="h-12 w-12 text-gray-400" />
              )}
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
              <Camera className="h-4 w-4 text-white" />
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
              formData.availability === 'actively-looking' ? 'bg-green-100 text-green-700 border-green-200' :
              formData.availability === 'open-to-opportunities' ? 'bg-blue-100 text-blue-700 border-blue-200' :
              'bg-gray-100 text-gray-700 border-gray-200'
            }`}>
              <div className={`w-2 h-2 rounded-full mr-2 ${
                formData.availability === 'actively-looking' ? 'bg-green-500' :
                formData.availability === 'open-to-opportunities' ? 'bg-blue-500' :
                'bg-gray-400'
              }`}></div>
              {formData.availability === 'actively-looking' ? 'Actively Looking' :
               formData.availability === 'open-to-opportunities' ? 'Open to Opportunities' :
               'Not Currently Looking'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{formData.name || 'Your Name'}</h2>
            <p className="text-lg text-blue-600 font-medium">{formData.title || 'Your Professional Title'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Building className="h-4 w-4 mr-2" />
              <span>{formData.university}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{formData.location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Joined {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </div>
          </div>

          {formData.email && (
            <div className="flex items-center space-x-4 text-sm">
              <a href={`mailto:${formData.email}`} className="flex items-center text-blue-600 hover:text-blue-700">
                <Mail className="h-4 w-4 mr-1" />
                <span>{formData.email}</span>
              </a>
              {formData.phone && (
                <a href={`tel:${formData.phone}`} className="flex items-center text-green-600 hover:text-green-700">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{formData.phone}</span>
                </a>
              )}
            </div>
          )}

          <div className="flex items-center space-x-3">
            {formData.linkedin && (
              <a href={formData.linkedin} className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-blue-600">
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {formData.github && (
              <a href={formData.github} className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-800">
                <Github className="h-5 w-5" />
              </a>
            )}
            {formData.twitter && (
              <a href={formData.twitter} className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
            )}
            {formData.website && (
              <a href={formData.website} className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-green-600">
                <Globe className="h-5 w-5" />
              </a>
            )}
          </div>

          <div className="flex items-center space-x-3 pt-4">
            <Button variant="outline" size="sm" className="flex-1">
              <Star className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              CV
            </Button>
            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Mail className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    error={errors.name}
                    placeholder="Enter your full name"
                  />
                  <Input
                    label="Professional Title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    error={errors.title}
                    placeholder="e.g., Full-Stack Developer & AI Enthusiast"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
                    <select 
                      value={formData.university}
                      onChange={(e) => handleInputChange('university', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Daffodil International University">Daffodil International University</option>
                      <option value="Other">Other University</option>
                    </select>
                  </div>
                  <Input
                    label="Department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    error={errors.department}
                    placeholder="e.g., Computer Science & Engineering"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about yourself, your passion, and what drives you as an entrepreneur..."
                    />
                    {errors.bio && <p className="text-sm text-red-600 mt-1">{errors.bio}</p>}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Preview</h3>
              {renderProfilePreview()}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Co-founder Goals</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</label>
                    <select 
                      value={formData.lookingFor}
                      onChange={(e) => handleInputChange('lookingFor', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select what you're looking for</option>
                      <option value="Technical Co-Founder">Technical Co-Founder</option>
                      <option value="Business Co-Founder">Business Co-Founder</option>
                      <option value="Design Co-Founder">Design Co-Founder</option>
                      <option value="Marketing Co-Founder">Marketing Co-Founder</option>
                    </select>
                    {errors.lookingFor && <p className="text-sm text-red-600 mt-1">{errors.lookingFor}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Expertise</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.expertise.map((skill) => (
                        <span key={skill} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {skill}
                          <button
                            onClick={() => removeFromArray('expertise', skill)}
                            className="ml-2 text-blue-500 hover:text-blue-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <select 
                      onChange={(e) => {
                        if (e.target.value) {
                          addToArray('expertise', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Add expertise</option>
                      {expertiseOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.expertise && <p className="text-sm text-red-600 mt-1">{errors.expertise}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Industries</label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {formData.industries.map((industry) => (
                        <span key={industry} className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {industry}
                          <button
                            onClick={() => removeFromArray('industries', industry)}
                            className="ml-2 text-purple-500 hover:text-purple-700"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <select 
                      onChange={(e) => {
                        if (e.target.value) {
                          addToArray('industries', e.target.value);
                          e.target.value = '';
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Add industry</option>
                      {industryOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.industries && <p className="text-sm text-red-600 mt-1">{errors.industries}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Commitment Level</label>
                      <select 
                        value={formData.commitment}
                        onChange={(e) => handleInputChange('commitment', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select commitment</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time initially">Part-time initially</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      {errors.commitment && <p className="text-sm text-red-600 mt-1">{errors.commitment}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Equity Range</label>
                      <select 
                        value={formData.equity}
                        onChange={(e) => handleInputChange('equity', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select equity range</option>
                        <option value="5-10%">5-10%</option>
                        <option value="10-15%">10-15%</option>
                        <option value="15-25%">15-25%</option>
                        <option value="25%+">25%+</option>
                        <option value="Negotiable">Negotiable</option>
                      </select>
                      {errors.equity && <p className="text-sm text-red-600 mt-1">{errors.equity}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Preview</h3>
              {renderProfilePreview()}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience & Portfolio</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                      <select 
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select experience</option>
                        <option value="0-1 years">0-1 years</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5+ years">5+ years</option>
                      </select>
                      {errors.experience && <p className="text-sm text-red-600 mt-1">{errors.experience}</p>}
                    </div>
                    <Input
                      label="Previous Startups"
                      type="number"
                      value={formData.previousStartups}
                      onChange={(e) => handleInputChange('previousStartups', parseInt(e.target.value) || 0)}
                      placeholder="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Funding Stage Interest</label>
                    <select 
                      value={formData.funding}
                      onChange={(e) => handleInputChange('funding', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select funding stage</option>
                      <option value="Bootstrapping">Bootstrapping</option>
                      <option value="Pre-seed">Pre-seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A ready">Series A ready</option>
                    </select>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-blue-600" />
                      Portfolio Projects
                    </h4>
                    <p className="text-gray-600 mb-4">Showcase your best work to attract the right co-founders.</p>
                    
                    <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Portfolio Project
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Profile Preview</h3>
              {renderProfilePreview()}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact & Launch</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      placeholder="your.email@diu.edu.bd"
                    />
                    <Input
                      label="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+880 123 456 7890"
                    />
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Social Media Links (Optional)</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="LinkedIn Profile"
                        value={formData.linkedin}
                        onChange={(e) => handleInputChange('linkedin', e.target.value)}
                        placeholder="https://linkedin.com/in/yourprofile"
                        icon={Linkedin}
                      />
                      <Input
                        label="GitHub Profile"
                        value={formData.github}
                        onChange={(e) => handleInputChange('github', e.target.value)}
                        placeholder="https://github.com/yourusername"
                        icon={Github}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        label="Twitter Profile"
                        value={formData.twitter}
                        onChange={(e) => handleInputChange('twitter', e.target.value)}
                        placeholder="https://twitter.com/yourusername"
                        icon={Twitter}
                      />
                      <Input
                        label="Website/Portfolio"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        placeholder="https://yourwebsite.com"
                        icon={Globe}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability Status</label>
                    <select 
                      value={formData.availability}
                      onChange={(e) => handleInputChange('availability', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="actively-looking">Actively Looking</option>
                      <option value="open-to-opportunities">Open to Opportunities</option>
                      <option value="not-looking">Not Currently Looking</option>
                      <option value="busy">Currently Busy</option>
                    </select>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-2">Ready to Launch!</h4>
                        <p className="text-green-700 text-sm">
                          Your co-founder profile will be visible to the DIU community. You can edit your profile anytime after joining.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:sticky lg:top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Profile Preview</h3>
              {renderProfilePreview()}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Join as Co-Founder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create your professional profile and connect with potential co-founders in the DIU startup ecosystem
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'mr-8' : ''}`}>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.id 
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                      : 'border-gray-300 text-gray-500 bg-white'
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="text-sm font-bold">{step.id}</span>
                    )}
                  </div>
                  <div className="text-center mt-3">
                    <p className={`text-sm font-semibold ${currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mb-8 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between max-w-md mx-auto">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep < 4 ? (
            <Button 
              onClick={nextStep} 
              className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              loading={isSubmitting}
              className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 shadow-lg"
            >
              {isSubmitting ? 'Launching Profile...' : 'Launch Profile'}
              <CheckCircle className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinCoFounder;