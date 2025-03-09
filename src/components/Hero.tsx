
import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';
import AnimatedWaterDrop from './AnimatedWaterDrop';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with water-like effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-icon-blue-50 to-white -z-10">
        <div className="water-overlay">
          <div className="water-wave top-[20%]"></div>
          <div className="water-wave top-[50%]" style={{ animationDelay: '1s' }}></div>
          <div className="water-wave top-[80%]" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Floating water drops */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <AnimatedWaterDrop size={32} color="text-icon-blue-300/60" />
      </div>
      <div className="absolute top-3/4 left-3/4 -translate-x-1/2 -translate-y-1/2">
        <AnimatedWaterDrop size={24} color="text-icon-blue-400/50" />
      </div>
      <div className="absolute top-1/3 right-1/6 -translate-x-1/2 -translate-y-1/2">
        <AnimatedWaterDrop size={20} color="text-icon-blue-500/40" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Hero content */}
        <div className="md:w-1/2 space-y-6 animate-fade-in-up md:pr-8">
          <div className="section-title-chip">
            Engineering Excellence
          </div>
          <h1 className="text-icon-gray-900">
            Advanced Water <br />
            <span className="text-icon-blue-600">Treatment Solutions</span>
          </h1>
          <p className="text-lg max-w-lg text-icon-gray-700">
            Icon Water Engineering designs, manufactures, and exports premium water treatment systems, ensuring pure water for industries and communities worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <a 
              href="#products" 
              className="glass-button flex items-center justify-center gap-2 group"
            >
              Explore Our Products
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-icon-blue-200 text-icon-blue-700 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center gap-2 hover:bg-icon-blue-50 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="md:w-1/2 mt-16 md:mt-0 animate-fade-in">
          <div className="glass-card p-6 max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-all duration-700">
            <img 
              src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Water treatment plant" 
              className="rounded-lg shadow-sm w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="mt-4 flex items-start gap-3">
              <Droplets className="h-8 w-8 text-icon-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-icon-gray-900">Engineering Purity</h3>
                <p className="text-sm text-icon-gray-600">Certified water treatment solutions with precision engineering and uncompromised quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
