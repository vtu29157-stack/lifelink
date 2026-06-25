import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';

const requestSchema = z.object({
  patient_name: z.string().min(3, 'Patient name required'),
  blood_group: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  units_required: z.number().min(1, 'Minimum 1 unit required'),
  hospital_name: z.string().min(3, 'Hospital name required'),
  hospital_address: z.string().min(5, 'Hospital address required'),
  contact_person: z.string().min(3, 'Contact person required'),
  contact_number: z.string().min(10, 'Valid contact number required'),
  city: z.string().min(2, 'City required'),
  emergency_level: z.enum(['Normal', 'Urgent', 'Critical']),
});

type RequestForm = z.infer<typeof requestSchema>;

const BloodRequest = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RequestForm>({
    resolver: zodResolver(requestSchema),
    defaultValues: { emergency_level: 'Normal' }
  });

  const onSubmit = async (data: RequestForm) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/requests`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Blood request submitted successfully!');
    } catch (error) {
      toast.error('Failed to submit request. Ensure you are logged in.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-red-500" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                If this is a critical medical emergency, please also call emergency services immediately.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Request Blood</h1>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Patient Name</label>
                <input type="text" {...register('patient_name')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.patient_name && <p className="mt-1 text-sm text-red-600">{errors.patient_name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Blood Group Needed</label>
                <select {...register('blood_group')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500">
                  <option value="">Select Blood Group</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => <option key={bg} value={bg}>{bg}</option>)}
                </select>
                {errors.blood_group && <p className="mt-1 text-sm text-red-600">{errors.blood_group.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Units Required</label>
                <input type="number" {...register('units_required', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.units_required && <p className="mt-1 text-sm text-red-600">{errors.units_required.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Emergency Level</label>
                <select {...register('emergency_level')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500">
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4">Hospital Details</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Hospital Name</label>
                <input type="text" {...register('hospital_name')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.hospital_name && <p className="mt-1 text-sm text-red-600">{errors.hospital_name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" {...register('city')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Hospital Address</label>
                <textarea {...register('hospital_address')} rows={2} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500"></textarea>
                {errors.hospital_address && <p className="mt-1 text-sm text-red-600">{errors.hospital_address.message}</p>}
              </div>

              <div className="md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 border-b pb-2 mb-4 mt-2">Contact Information</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Person</label>
                <input type="text" {...register('contact_person')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.contact_person && <p className="mt-1 text-sm text-red-600">{errors.contact_person.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input type="text" {...register('contact_number')} className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border shadow-sm focus:border-red-500 focus:ring-red-500" />
                {errors.contact_number && <p className="mt-1 text-sm text-red-600">{errors.contact_number.message}</p>}
              </div>

            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" disabled={isSubmitting} className="bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm">
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default BloodRequest;
