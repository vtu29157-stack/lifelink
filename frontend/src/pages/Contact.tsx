import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Contact Us | LifeLink</title>
        <meta name="description" content="Get in touch with the LifeLink team for support, partnerships, or general inquiries." />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            Get in <span className="text-red-600">Touch</span>
          </motion.h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Have questions about donating, requesting blood, or partnering with us? We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Email Us</h4>
                    <p className="text-gray-400 mt-1">support@lifelink.com</p>
                    <p className="text-gray-400">ch.krishnamnaidu@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Call Us</h4>
                    <p className="text-gray-400 mt-1">+91 98765 43210</p>
                    <p className="text-gray-400">Emergency: 104</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">Headquarters</h4>
                    <p className="text-gray-400 mt-1">CSE-AIML Department</p>
                    <p className="text-gray-400">Tech University Campus</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition flex items-center justify-center text-sm font-bold">X</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition flex items-center justify-center text-sm font-bold">IN</div>
                <div className="w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-700 transition flex items-center justify-center text-sm font-bold">FB</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 transition outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
