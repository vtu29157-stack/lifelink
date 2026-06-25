import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import axios from 'axios';

const donorSchema = z.object({
  full_name: z.string().min(3, 'Full name is required'),
  age: z.number().min(18, 'Must be at least 18 years old'),
  gender: z.enum(['Male', 'Female', 'Other']),
  blood_group: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  weight: z.number().min(50, 'Weight must be at least 50kg'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  address: z.string().min(5, 'Address is required'),
  medical_conditions: z.string().optional(),
});

type DonorForm = z.infer<typeof donorSchema>;

const DonorRegistration = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DonorForm>({
    resolver: zodResolver(donorSchema)
  });

  const onSubmit = async (data: DonorForm) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/donors`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Donor profile created successfully!');
    } catch (error) {
      toast.error('Failed to create donor profile');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Register as a Blood Donor</h1>
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Donor's Full Name</label>
                <input type="text" {...register('full_name')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" placeholder="Enter family member's or your name" />
                {errors.full_name && <p className="mt-1 text-sm text-red-600">{errors.full_name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Age</label>
                <input type="number" {...register('age', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" />
                {errors.age && <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
                <input type="number" {...register('weight', { valueAsNumber: true })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" />
                {errors.weight && <p className="mt-1 text-sm text-red-600">{errors.weight.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Blood Group</label>
                <select {...register('blood_group')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border">
                  <option value="">Select Blood Group</option>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bg => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
                {errors.blood_group && <p className="mt-1 text-sm text-red-600">{errors.blood_group.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select {...register('gender')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                {errors.gender && <p className="mt-1 text-sm text-red-600">{errors.gender.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" {...register('city')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" {...register('state')} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" />
                {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea {...register('address')} rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border"></textarea>
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Medical Conditions (If any)</label>
                <textarea {...register('medical_conditions')} rows={2} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 py-2 px-3 border" placeholder="Diabetes, Hypertension, etc. Leave blank if none."></textarea>
              </div>

            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" disabled={isSubmitting} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm">
                {isSubmitting ? 'Registering...' : 'Complete Registration'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default DonorRegistration;
