import React, { useState } from 'react';
import { ExternalLink, Search, Sparkles, Brain, MessageSquare, Zap, Heart, Bot, Star, Target } from 'lucide-react';

const aiServices = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    url: 'https://chatgpt.com/',
    description: 'OpenAI\'s conversational AI assistant - Most popular globally',
    icon: MessageSquare,
    color: 'from-emerald-600 to-emerald-800',
    bgColor: 'bg-emerald-900/20',
    borderColor: 'border-emerald-600/30',
    category: 'Conversational'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    url: 'https://gemini.google.com/',
    description: 'Google\'s multimodal AI model with 42M+ users',
    icon: Sparkles,
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-900/20',
    borderColor: 'border-blue-600/30',
    category: 'Multimodal'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    url: 'https://claude.ai/',
    description: 'Anthropic\'s helpful AI assistant - High quality responses',
    icon: Brain,
    color: 'from-orange-600 to-red-700',
    bgColor: 'bg-orange-900/20',
    borderColor: 'border-orange-600/30',
    category: 'Conversational'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    url: 'https://www.perplexity.ai/',
    description: 'AI-powered search with 22M+ active users',
    icon: Search,
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-900/20',
    borderColor: 'border-blue-600/30',
    category: 'Search'
  },
  {
    id: 'grok',
    name: 'Grok',
    url: 'https://grok.com/',
    description: 'xAI\'s cutting-edge AI - Top App Store performer',
    icon: Zap,
    color: 'from-gray-600 to-gray-800',
    bgColor: 'bg-gray-900/20',
    borderColor: 'border-gray-600/30',
    category: 'Conversational'
  },
  {
    id: 'meta',
    name: 'Meta AI',
    url: 'https://www.meta.ai/',
    description: 'Meta\'s AI assistant integrated across platforms',
    icon: Bot,
    color: 'from-blue-600 to-indigo-700',
    bgColor: 'bg-blue-900/20',
    borderColor: 'border-blue-600/30',
    category: 'Conversational'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    url: 'https://huggingface.co/chat',
    description: 'Open-source AI community platform',
    icon: Heart,
    color: 'from-yellow-500 to-orange-600',
    bgColor: 'bg-yellow-900/20',
    borderColor: 'border-yellow-600/30',
    category: 'Open Source'
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    url: 'https://chat.mistral.ai/',
    description: 'European AI excellence - Privacy-focused',
    icon: Zap,
    color: 'from-orange-600 to-red-700',
    bgColor: 'bg-orange-900/20',
    borderColor: 'border-orange-600/30',
    category: 'Conversational'
  },
  {
    id: 'qwen',
    name: 'Qwen',
    url: 'https://chat.qwen.ai/',
    description: 'Alibaba\'s multilingual AI model',
    icon: Star,
    color: 'from-purple-600 to-violet-700',
    bgColor: 'bg-purple-900/20',
    borderColor: 'border-purple-600/30',
    category: 'Multilingual'
  }
];

const categories = ['All', 'Conversational', 'Search', 'Multimodal', 'Open Source', 'Multilingual'];

export default function AIPortalApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl">
              <Target className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              AI Portal
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your gateway to the world's leading AI platforms. Discover, explore, and connect with cutting-edge artificial intelligence tools.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search AI services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.url)}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${service.bgColor} ${service.borderColor} border backdrop-blur-sm rounded-2xl p-6 cursor-pointer transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden`}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-200">
                      {service.category}
                    </span>
                    <ExternalLink className={`w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-all duration-300 ${hoveredCard === service.id ? 'translate-x-1 -translate-y-1' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No AI services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-gray-800">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Sparkles className="w-4 h-4" />
            <span>AI Portal – Empowering the future with artificial intelligence</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-gray-500 text-xs mt-2">
            © 2025 AI Portal. Connecting humans with AI innovation.
          </p>
        </footer>
      </div>
    </div>
  );
}