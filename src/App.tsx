import React from 'react';
import {
  Phone,
  Building2,
  Utensils,
  Users,
  MessageSquare,
  Clock,
  BarChart,
  Shield,
  Headphones,
  Mail,
} from 'lucide-react';
import Navbar from './components/Navbar';
import IndustryCard from './components/IndustryCard';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Business Communication with AI Voice Automation
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Streamline your phone operations with intelligent automation designed for modern businesses
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Industries We Serve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <IndustryCard
              Icon={Building2}
              title="Dental Practices"
              description="Automated appointment scheduling, reminders, and patient communication for dental offices."
            />
            <IndustryCard
              Icon={Utensils}
              title="Restaurants"
              description="Handle reservations, takeout orders, and customer inquiries efficiently."
            />
            <IndustryCard
              Icon={Users}
              title="High-Traffic Businesses"
              description="Scale your phone operations without increasing staff overhead."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1676277791608-ac54585d60b3?auto=format&fit=crop&q=80')] bg-cover bg-fixed bg-center opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              Icon={MessageSquare}
              title="Natural Language Processing"
              description="Advanced AI that understands and responds naturally to customer inquiries."
            />
            <FeatureCard
              Icon={Clock}
              title="24/7 Availability"
              description="Never miss a call with round-the-clock automated service."
            />
            <FeatureCard
              Icon={BarChart}
              title="Analytics & Insights"
              description="Detailed reporting on call volumes, peak times, and customer interactions."
            />
            <FeatureCard
              Icon={Shield}
              title="Secure & Reliable"
              description="Enterprise-grade security for all your communication needs."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1673187456578-63af21c0851a?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-blue-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-6">Ready to transform your business communication? Contact us today.</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>(954) 692-4338</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>bizmarkvoice@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Headphones className="h-5 w-5 mr-3" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gray-800/90 backdrop-blur-sm">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1676277791608-ac54585d60b3?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Phone className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">BIZMARK A.I. VOICE</span>
          </div>
          <p className="text-center text-sm">
            © {new Date().getFullYear()} BIZMARK A.I. VOICE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;