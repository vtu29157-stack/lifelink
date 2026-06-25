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
        
        <footer className="bg-gray-900 text-gray-300 py-12 text-center mt-auto">
          <p>© 2026 LifeLink - Blood Donation Management System. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
