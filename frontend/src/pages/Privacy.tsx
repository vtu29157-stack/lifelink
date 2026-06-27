import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Privacy Policy | LifeLink</title>
        <meta name="description" content="Read the LifeLink Privacy Policy to understand how we protect and manage your personal and medical data." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <ShieldCheck className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: June 27, 2026</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            At LifeLink, accessible from lifelink-u54f.vercel.app, one of our main priorities is the privacy of our visitors and registered blood donors. This Privacy Policy document contains types of information that is collected and recorded by LifeLink and how we use it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when registering on the platform. This includes:
          </p>
          <ul>
            <li>Name and Contact Information (Email, Phone Number)</li>
            <li>Demographic data (Age, Gender, City)</li>
            <li>Medical Information (Blood Group, Weight, Medical Conditions)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our platform</li>
            <li>Match you with patients requiring emergency blood donations</li>
            <li>Send you SMS or email alerts when your blood type is needed</li>
            <li>Improve, personalize, and expand our services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
          <p>
            We prioritize the security of your medical and personal data. We implement enterprise-grade encryption (e.g., bcrypt for passwords) and utilize secure cloud databases (PostgreSQL via Supabase) to prevent unauthorized access.
          </p>
          
          <p className="mt-12 text-sm text-gray-400">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
