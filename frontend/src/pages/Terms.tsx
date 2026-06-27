import { Helmet } from 'react-helmet-async';
import { Scale } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Terms and Conditions | LifeLink</title>
        <meta name="description" content="Read the Terms and Conditions for using the LifeLink Blood Donation Management System." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-gray-900 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500">Last updated: June 27, 2026</p>
        </div>

        <div className="prose prose-lg text-gray-600 max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using LifeLink, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Medical Disclaimer</h2>
          <p>
            LifeLink is a platform designed to connect blood donors with individuals in need. We are <strong>not</strong> a medical facility. We do not provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider before donating blood.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Responsibilities</h2>
          <p>
            Users agree to provide accurate, current, and complete information during the registration process. You are strictly prohibited from providing false medical history or falsifying your blood group, as this can result in severe medical consequences for the recipient.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Liability</h2>
          <p>
            LifeLink and its developers (including ch krishnam naidu) shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, or from any blood donation matching facilitated through the platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
