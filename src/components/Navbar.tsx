import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Phone className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">BIZMARK A.I. VOICE</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition">Services</a>
            <a href="#industries" className="text-gray-300 hover:text-blue-400 transition">Industries</a>
            <a href="#features" className="text-gray-300 hover:text-blue-400 transition">Features</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Services</a>
            <a href="#industries" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Industries</a>
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Features</a>
            <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}