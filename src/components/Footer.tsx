
import React from 'react';
import { Droplets, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-icon-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand and about */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="h-8 w-8 text-icon-blue-300" />
              <span className="text-xl font-display font-bold text-white">Icon Water</span>
            </div>
            <p className="text-icon-blue-100 mb-6">
              Leading manufacturer and exporter of water treatment solutions, serving industries with advanced purification systems.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-icon-blue-200 text-sm">Certificate No:</span>
              <span className="text-white font-medium">24DQMQ32</span>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-icon-blue-100 hover:text-white transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#industries" className="text-icon-blue-100 hover:text-white transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#about" className="text-icon-blue-100 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-icon-blue-100 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Our Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-icon-blue-100 hover:text-white transition-colors">
                  Reverse Osmosis Plants
                </a>
              </li>
              <li>
                <a href="#products" className="text-icon-blue-100 hover:text-white transition-colors">
                  Effluent Treatment Plants
                </a>
              </li>
              <li>
                <a href="#products" className="text-icon-blue-100 hover:text-white transition-colors">
                  Ultrafiltration Systems
                </a>
              </li>
              <li>
                <a href="#products" className="text-icon-blue-100 hover:text-white transition-colors">
                  Packaged Drinking Water
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-icon-blue-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:iconwaterengineering@gmail.com" className="text-icon-blue-100 hover:text-white transition-colors">
                    iconwaterengineering@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-icon-blue-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:+918888682388" className="text-icon-blue-100 hover:text-white transition-colors">
                    +91 8888682388
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-icon-blue-300 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-icon-blue-100">
                  Thane, Maharashtra, India - 421301
                </div>
              </li>
              <li className="flex items-start">
                <ExternalLink className="h-5 w-5 text-icon-blue-300 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <a href="https://iconwater.in" target="_blank" rel="noopener noreferrer" className="text-icon-blue-100 hover:text-white transition-colors">
                    iconwater.in
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-icon-blue-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-icon-blue-200 text-sm">
              &copy; {new Date().getFullYear()} Icon Water Engineering. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex items-center space-x-6">
                <li>
                  <a href="#" className="text-icon-blue-200 hover:text-white transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-icon-blue-200 hover:text-white transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
