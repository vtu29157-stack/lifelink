import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How often can I donate blood?",
    answer: "You must wait at least 8 weeks (56 days) between whole blood donations. For platelet donations, you can donate up to 24 times a year, but must wait at least 7 days between donations."
  },
  {
    question: "Does donating blood hurt?",
    answer: "You may feel a slight pinch when the needle goes in, but most donors report that it is relatively painless. The actual donation process is quite comfortable."
  },
  {
    question: "How long does a blood donation take?",
    answer: "The entire process, from registration to post-donation refreshments, takes about 45-60 minutes. The actual blood draw usually only takes 8-10 minutes."
  },
  {
    question: "Can I donate if I am taking medication?",
    answer: "Most medications will not disqualify you from donating blood. However, certain medications (like antibiotics or blood thinners) might require a waiting period. Please check with our staff if you are unsure."
  },
  {
    question: "What should I do before donating?",
    answer: "Get a good night's sleep, eat a healthy meal before your donation, and drink plenty of fluids (water or juice). Avoid fatty foods, as they can affect the tests we do on your blood."
  },
  {
    question: "How does LifeLink match donors with patients?",
    answer: "LifeLink uses an advanced algorithm that matches emergency blood requests with registered donors in the local area who have the exact or compatible blood type needed, instantly notifying them."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>FAQ | LifeLink</title>
        <meta name="description" content="Frequently Asked Questions about blood donation and how the LifeLink system works." />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <HelpCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-500">Everything you need to know about donating blood and saving lives.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:border-red-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-bold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-red-500' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
