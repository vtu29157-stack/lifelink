import { Link } from 'react-router-dom';
import { Droplet, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Droplet className="h-8 w-8 text-red-600 transition-transform group-hover:scale-110" />
              <span className="font-extrabold text-xl tracking-tight text-gray-900">LifeLink</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Home</Link>
            <Link to="/search" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Find Blood</Link>
            <Link to="/active-requests" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Active Requests</Link>
            <Link to="/request" className="text-gray-600 hover:text-red-600 font-medium transition-colors">Request Blood</Link>
            <Link to="/about" className="text-gray-600 hover:text-red-600 font-medium transition-colors">About</Link>
            <div className="flex items-center gap-4 ml-4 border-l pl-4">
              <Link to="/login" className="text-gray-600 hover:text-red-600 font-medium">Log in</Link>
              <Link to="/register" className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-sm">Sign up</Link>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-red-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md font-medium">Home</Link>
            <Link to="/search" className="block px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md font-medium">Find Blood</Link>
            <Link to="/active-requests" className="block px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md font-medium">Active Requests</Link>
            <Link to="/request" className="block px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md font-medium">Request Blood</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-md font-medium">Log in</Link>
            <Link to="/register" className="block px-3 py-2 text-red-600 font-bold hover:bg-red-50 rounded-md">Sign up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
