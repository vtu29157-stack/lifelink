import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Droplet, Clock, AlertCircle } from 'lucide-react';
import axios from 'axios';

interface BloodRequest {
  request_id: number;
  patient_name: string;
  blood_group: string;
  units_required: number;
  hospital_name: string;
  hospital_address: string;
  contact_person: string;
  contact_number: string;
  city: string;
  emergency_level: string;
  request_date: string;
  status: string;
}

const ActiveRequests = () => {
  const [requests, setRequests] = useState<BloodRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/requests`);
      setRequests(data);
    } catch (error) {
      console.error('Failed to fetch requests', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Active Blood Requests</h1>
        <p className="text-xl text-gray-600">Urgent requests from hospitals and patients in your area.</p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500 py-12">Loading...</div>
      ) : requests.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
          <Droplet className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No active requests.</h3>
          <p className="text-gray-500">There are currently no urgent blood requests in the system.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
              key={req.request_id} 
              className={`bg-white rounded-xl shadow-sm overflow-hidden border-t-4 ${
                req.emergency_level === 'Critical' ? 'border-t-red-600' :
                req.emergency_level === 'Urgent' ? 'border-t-orange-500' : 'border-t-blue-500'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${
                      req.emergency_level === 'Critical' ? 'bg-red-100 text-red-800' :
                      req.emergency_level === 'Urgent' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      <AlertCircle className="w-3 h-3" /> {req.emergency_level}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{req.patient_name}</h3>
                    <p className="text-gray-500 flex items-center gap-1 mt-1 text-sm">
                      <MapPin className="w-4 h-4" /> {req.hospital_name}, {req.city}
                    </p>
                  </div>
                  <div className="bg-red-50 flex flex-col items-center justify-center p-2 rounded-lg border border-red-100 min-w-[60px]">
                    <span className="text-red-600 font-bold text-lg leading-none">{req.blood_group}</span>
                    <span className="text-xs text-red-500 mt-1">{req.units_required} {req.units_required === 1 ? 'Unit' : 'Units'}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-gray-400" />
                    Requested on {new Date(req.request_date).toLocaleDateString()}
                  </div>
                </div>

                <div className="mt-6">
                  <button 
                    className="w-full bg-red-600 text-white rounded-lg py-2 font-bold hover:bg-red-700 transition-colors shadow-sm"
                    onClick={() => alert(`Please contact ${req.contact_person} at ${req.contact_number}`)}
                  >
                    Donate Now
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

export default ActiveRequests;
