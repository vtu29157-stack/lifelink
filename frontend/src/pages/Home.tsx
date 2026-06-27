import { motion } from 'framer-motion';
import { ArrowRight, Activity, Heart, ShieldPlus, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-red-50 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
              Emergency Blood Requests Now Live
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 leading-tight">
              LifeLink: <span className="text-gradient">Blood Donation</span><br />
              Management System
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our modern community of lifesavers. Your single donation can save up to three lives in emergency situations.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donor-register" className="group bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2">
                Become a Donor 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/request" className="group bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                Request Blood
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Features */}
      <section className="py-24 bg-gray-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why use LifeLink?</h2>
            <p className="text-lg text-gray-500">A seamless, modern platform designed for speed and reliability.</p>
          </div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 rotate-3">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Impact</h3>
              <p className="text-gray-500 leading-relaxed">Every drop counts. Connect directly with hospitals and patients who urgently need your specific blood type in real-time.</p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 -rotate-3">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Response</h3>
              <p className="text-gray-500 leading-relaxed">Our advanced notification system ensures that critical emergency requests reach eligible donors within seconds.</p>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ y: -8 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8 rotate-3">
                <ShieldPlus className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-500 leading-relaxed">Your health data and contact information are strictly encrypted and shared only when you explicitly approve a request.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
