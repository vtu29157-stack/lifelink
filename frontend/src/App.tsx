import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
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
import About from './pages/About';
import Contact from './pages/Contact';
import Developer from './pages/Developer';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <HelmetProvider>
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
        
          <footer className="bg-gray-900 text-gray-300 py-12 mt-auto border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
              <div>
                <h3 className="text-white font-bold text-xl mb-4">LifeLink</h3>
                <p className="text-gray-400 text-sm">Connecting blood donors with patients in real-time. Save a life today.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold mb-2">Company</h4>
                <a href="/about" className="text-gray-400 hover:text-white transition">About Us</a>
                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact Us</a>
                <a href="/developer" className="text-gray-400 hover:text-white transition">Developer Profile</a>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-white font-bold mb-2">Legal & Help</h4>
                <a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a>
                <a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-sm md:text-base border-t border-gray-800 pt-8">
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
    </HelmetProvider>
  );
}

export default App;
