import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, Droplet, Activity, AlertCircle } from 'lucide-react';

const data = [
  { name: 'Jan', donations: 40, requests: 24 },
  { name: 'Feb', donations: 30, requests: 13 },
  { name: 'Mar', donations: 20, requests: 48 },
  { name: 'Apr', donations: 27, requests: 39 },
  { name: 'May', donations: 18, requests: 48 },
  { name: 'Jun', donations: 23, requests: 38 },
];

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-600"><Users className="w-6 h-6" /></div>
          <div><p className="text-sm text-gray-500">Total Users</p><p className="text-2xl font-bold text-gray-900">1,248</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-red-100 p-3 rounded-lg text-red-600"><Droplet className="w-6 h-6" /></div>
          <div><p className="text-sm text-gray-500">Total Donors</p><p className="text-2xl font-bold text-gray-900">854</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg text-green-600"><Activity className="w-6 h-6" /></div>
          <div><p className="text-sm text-gray-500">Completed Requests</p><p className="text-2xl font-bold text-gray-900">321</p></div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
          <div className="bg-orange-100 p-3 rounded-lg text-orange-600"><AlertCircle className="w-6 h-6" /></div>
          <div><p className="text-sm text-gray-500">Pending Requests</p><p className="text-2xl font-bold text-gray-900">12</p></div>
        </div>
      </div>

      {/* Charts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6">Donations vs Requests Overview</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Line type="monotone" dataKey="donations" stroke="#22C55E" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="requests" stroke="#EF4444" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
