import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DonorRegistration from './pages/DonorRegistration';
import SearchDonor from './pages/SearchDonor';
import BloodRequest from './pages/BloodRequest';
import AdminDashboard from './pages/AdminDashboard';
import ActiveRequests from './pages/ActiveRequests';

const About = () => <div className="p-20 text-center text-2xl font-bold">About Page (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/donor-register" element={<DonorRegistration />} />
            <Route path="/search" element={<SearchDonor />} />
            <Route path="/request" element={<BloodRequest />} />
            <Route path="/active-requests" element={<ActiveRequests />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-900 text-gray-300 py-8 mt-auto border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-sm md:text-base">
            <p className="mb-2">
              <span className="font-semibold text-white">© 2026 LifeLink</span>
            </p>
            <p className="text-gray-400">
              Designed & Developed by <span className="text-red-400 font-medium">ch krishnam naidu</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
