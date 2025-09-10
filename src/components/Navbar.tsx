
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Droplets className="h-8 w-8 text-icon-blue-600" />
              <span className="text-xl font-display font-bold text-icon-gray-900">Icon Water</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-icon-gray-800 hover:text-icon-blue-600 transition-colors">Products</a>
            <a href="#industries" className="text-icon-gray-800 hover:text-icon-blue-600 transition-colors">Industries</a>
            <a href="#about" className="text-icon-gray-800 hover:text-icon-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-icon-gray-800 hover:text-icon-blue-600 transition-colors">Contact</a>
            <a 
              href="https://swap297.s3.eu-north-1.amazonaws.com/Icon+Water+Engg2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button flex items-center space-x-2 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-icon-gray-700 hover:text-icon-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 py-2 animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            <a 
              href="#products" 
              className="block py-3 px-4 hover:bg-icon-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Products
            </a>
            <a 
              href="#industries" 
              className="block py-3 px-4 hover:bg-icon-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </a>
            <a 
              href="#about" 
              className="block py-3 px-4 hover:bg-icon-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block py-3 px-4 hover:bg-icon-blue-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="https://drive.google.com/file/d/1qC-RzsZLMe0fgVOphpag18TY9yXItykO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-3 px-4 mt-2 bg-icon-blue-500 text-white rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
