import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Star, 
  Building2, 
  Search,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        {/* Background Image instead of video for reliability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-900" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Discover Your Next
                <span className="block text-blue-400">Career Move</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Connect with leading companies and find opportunities that match your expertise
              </p>

              {/* Search Bar */}
              <div className="bg-white p-2 rounded-lg shadow-lg flex items-center gap-2 max-w-2xl">
                <div className="flex-1 flex items-center gap-2 px-4 py-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search jobs, companies, or keywords..."
                    className="w-full bg-transparent focus:outline-none text-gray-800"
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                  Search Jobs
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4 text-gray-200">
                <span>Popular searches:</span>
                <div className="flex gap-2">
                  {['Software Engineer', 'Product Manager', 'Data Scientist'].map((term) => (
                    <button
                      key={term}
                      className="px-4 py-1 rounded-full border border-gray-400 hover:bg-white/10 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-semibold">Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              Your Career Success Starts Here
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We provide all the tools and resources you need to find and land your dream job
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Smart Job Matching"
              description="Our AI-powered system matches you with positions that align with your skills and career goals"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Career Resources"
              description="Access interview tips, resume builders, and salary insights to help you succeed"
            />
            <FeatureCard
              icon={<Building2 className="w-8 h-8" />}
              title="Company Culture"
              description="Get detailed insights into company culture, benefits, and work environment"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Active Jobs' },
              { number: '2M+', label: 'Job Seekers' },
              { number: '50K+', label: 'Companies' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Create your profile now and start exploring opportunities that match your skills and aspirations
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
    <div className="w-14 h-14 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default Home;