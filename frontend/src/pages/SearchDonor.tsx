import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Droplet, Phone } from 'lucide-react';
import axios from 'axios';

interface Donor {
  donor_id: number;
  full_name: string;
  blood_group: string;
  city: string;
  phone: string;
  availability_status: boolean;
}

const SearchDonor = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchDonors = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/donors`, {
        params: { blood_group: bloodGroup || undefined, city: location || undefined }
      });
      setDonors(data);
    } catch (error) {
      console.error('Failed to fetch donors', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDonors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Find Blood Donors</h1>
        <p className="text-xl text-gray-600">Search for available donors in your area.</p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Droplet className="absolute left-3 top-3 text-red-500" />
            <select 
              className="pl-10 w-full rounded-lg border-gray-300 border py-3 px-4 focus:ring-red-500 focus:border-red-500"
              value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">Any Blood Group</option>
              {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                <option key={bg} value={bg}>{bg}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" placeholder="City or State" 
              className="pl-10 w-full rounded-lg border-gray-300 border py-3 px-4 focus:ring-red-500 focus:border-red-500"
              value={location} onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button 
            onClick={fetchDonors}
            className="bg-red-600 text-white rounded-lg py-3 px-4 font-bold hover:bg-red-700 flex items-center justify-center gap-2 transition-colors"
          >
            <Search className="w-5 h-5" /> Search
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading...</div>
      ) : donors.length === 0 ? (
        <div className="text-center py-12">
          <Droplet className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No donors found.</h3>
          <p className="text-gray-500">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donors.map((donor, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.05 }}
              key={donor.donor_id} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{donor.full_name}</h3>
                    <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
                      <MapPin className="w-4 h-4" /> {donor.city}
                    </p>
                  </div>
                  <div className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Droplet className="w-4 h-4" fill="currentColor" /> {donor.blood_group}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <span className={`px-2 py-1 rounded-md text-xs font-semibold ${donor.availability_status ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {donor.availability_status ? 'Available' : 'Unavailable'}
                  </span>
                  <button 
                    disabled={!donor.availability_status}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold ${donor.availability_status ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                    onClick={() => alert(`Contacting ${donor.full_name} at ${donor.phone}`)}
                  >
                    <Phone className="w-4 h-4" /> Contact
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDonor;
