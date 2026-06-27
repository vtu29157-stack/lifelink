import { Helmet } from 'react-helmet-async';
import { User, Code2, Cpu, Globe, Award, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Developer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Developer Profile | LifeLink</title>
        <meta name="description" content="Meet ch krishnam naidu, the CSE-AIML student and developer behind the LifeLink Blood Donation Management System." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 bg-gray-900 rounded-full flex flex-col items-center justify-center text-white flex-shrink-0 shadow-2xl border-4 border-white">
              <User className="w-20 h-20 text-gray-400 mb-2" />
              <span className="text-sm font-bold tracking-widest text-red-400">DEV</span>
            </div>
            
            <div className="text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-bold mb-4"
              >
                Lead Developer & Creator
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">ch krishnam naidu</h1>
              <h2 className="text-2xl text-gray-500 font-medium mb-6">CSE-AIML Student</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                Passionate about leveraging artificial intelligence, machine learning, and modern web development to build scalable applications that solve real-world problems.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Full Stack Dev</h3>
            <p className="text-gray-500">MERN / PERN Stack, React, Node.js, TypeScript, PostgreSQL, and modern UI/UX design.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI & ML</h3>
            <p className="text-gray-500">Pursuing advanced studies in Artificial Intelligence and Machine Learning algorithms.</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Deploy</h3>
            <p className="text-gray-500">Experience with Vercel, Render, Supabase, and configuring production environments.</p>
          </div>
        </div>

        <div className="bg-gray-900 text-white rounded-3xl p-10 shadow-xl text-center">
          <Award className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">The LifeLink Project</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            LifeLink was developed as a comprehensive solution to streamline blood donation. It features secure JWT authentication, real-time database queries, dynamic routing, and a fully responsive design built from scratch.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            <Github className="w-5 h-5" /> View on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
