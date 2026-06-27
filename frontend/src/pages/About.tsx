import { Helmet } from 'react-helmet-async';
import { Shield, Heart, Activity, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Us | LifeLink Blood Donation Management System</title>
        <meta name="description" content="Learn about LifeLink's mission to connect blood donors with hospitals to save lives in emergency situations." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
          >
            About <span className="text-red-600">LifeLink</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-500"
          >
            Bridging the gap between hope and survival through community-driven blood donation.
          </motion.p>
        </div>

        <section className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Heart className="text-red-500 w-8 h-8" /> Our Mission & Vision
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-4">
            <p>
              LifeLink was built on a singular, unwavering mission: to ensure that no life is lost due to a shortage of blood. We envision a world where patients, hospitals, and willing donors are seamlessly connected in real-time, removing geographical and logistical barriers during critical emergencies.
            </p>
            <p>
              Our vision is to foster a proactive, educated community of donors who understand the profound impact of their contributions, creating a robust safety net for healthcare systems worldwide.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Activity className="text-red-600 w-6 h-6" /> Why Donate?
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• A single donation can save up to 3 lives.</li>
              <li>• Blood is needed every two seconds.</li>
              <li>• Only 3% of age-eligible people donate blood yearly.</li>
              <li>• Donating regularly improves cardiovascular health.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Shield className="text-blue-600 w-6 h-6" /> Key Features
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Real-time emergency blood requests.</li>
              <li>• Advanced donor-patient matching algorithm.</li>
              <li>• Encrypted and secure donor profiles.</li>
              <li>• Hospital-verified emergency routing.</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <Code className="w-8 h-8 text-gray-300" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Behind the Code</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-6">
            LifeLink is more than just software; it's a testament to how modern technology can solve critical real-world healthcare challenges. 
          </p>
          <div className="inline-block bg-gray-800 border border-gray-700 rounded-xl px-6 py-4">
            <p className="font-semibold text-xl">Designed & Developed by</p>
            <p className="text-red-400 font-bold text-2xl mt-1">ch krishnam naidu</p>
            <p className="text-gray-400 text-sm mt-2">CSE-AIML Student</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
