import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="font-bold text-xl text-yellow-500">Hana EL.</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex space-x-6 text-gray-700 dark:text-gray-200">
              <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-yellow-500 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-yellow-500 transition-colors">Live Demos</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
            </ul>
            <DarkModeToggle inline={true} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <DarkModeToggle inline={true} />
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a href="#home" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Live Demos</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-yellow-500 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
