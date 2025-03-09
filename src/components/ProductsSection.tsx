
import React from 'react';
import { 
  Droplets, Filter, Recycle, Factory, Beaker, 
  Waves, Flask, Truck, ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import AnimatedWaterDrop from './AnimatedWaterDrop';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  capacity?: string;
  highlighted?: boolean;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  capacity, 
  highlighted = false,
  index
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 group transition-all duration-500 hover:shadow-lg",
        highlighted ? "border-icon-blue-300/50 bg-gradient-to-br from-icon-blue-50/80 to-white/80" : "",
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-12 w-12 bg-icon-blue-100/80 text-icon-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-icon-blue-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-2">{title}</h3>
      {capacity && (
        <div className="text-sm font-medium text-icon-blue-700 bg-icon-blue-50 px-2 py-1 rounded-md inline-block mb-2">
          Capacity: {capacity}
        </div>
      )}
      <p className="text-icon-gray-700 mb-4">{description}</p>
      <a 
        href="#contact" 
        className="inline-flex items-center text-icon-blue-600 font-medium hover:text-icon-blue-800 group-hover:underline"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

const products = [
  {
    title: "Reverse Osmosis Plants",
    description: "Advanced RO systems removing impurities, minerals, and contaminants for ultra-pure water.",
    icon: <Filter className="h-6 w-6" />,
    capacity: "Up to 125,000 LPH",
    highlighted: true
  },
  {
    title: "Demineralization Plants",
    description: "Counter-flow regeneration systems delivering low TDS and silica slippage for industrial applications.",
    icon: <Beaker className="h-6 w-6" />,
    capacity: "Up to 125,000 LPH"
  },
  {
    title: "Water Treatment Plants",
    description: "Multi-stage filtration and treatment systems ensuring clean, potable water for all uses.",
    icon: <Droplets className="h-6 w-6" />
  },
  {
    title: "Effluent Treatment Plants",
    description: "Industrial wastewater treatment through primary, secondary, and tertiary processes.",
    icon: <Factory className="h-6 w-6" />
  },
  {
    title: "Sewage Treatment Plants",
    description: "Biological aeration and filtration systems transforming sewage into irrigation-grade water.",
    icon: <Recycle className="h-6 w-6" />
  },
  {
    title: "Ultrafiltration Plants",
    description: "Removal of suspended particles, colloids, bacteria, and viruses for pristine water quality.",
    icon: <Filter className="h-6 w-6" />,
    capacity: "Up to 200,000 LPH"
  },
  {
    title: "Packaged Drinking Water",
    description: "Complete bottling solutions with RO, UV sterilization, and ozonation for pure drinking water.",
    icon: <Flask className="h-6 w-6" />,
    capacity: "500 LPH to 100,000 LPH",
    highlighted: true
  },
  {
    title: "Filtration Systems",
    description: "Dual media filtration removing organic impurities, tastes, and odors for industrial applications.",
    icon: <Waves className="h-6 w-6" />
  }
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 relative">
      <div className="absolute -top-20 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-title max-w-3xl mx-auto">
          <div className="section-title-chip mx-auto text-center">
            Our Solutions
          </div>
          <h2 className="text-center text-icon-gray-900 mb-4">
            Comprehensive Water <span className="text-icon-blue-600">Treatment Systems</span>
          </h2>
          <p className="text-center text-icon-gray-700 max-w-2xl mx-auto">
            From industrial-scale purification to packaged drinking water, our range of products addresses all water treatment needs with precision engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {products.map((product, index) => (
            <ProductCard 
              key={product.title} 
              title={product.title} 
              description={product.description} 
              icon={product.icon} 
              capacity={product.capacity}
              highlighted={product.highlighted}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="glass-button inline-flex items-center justify-center space-x-2"
          >
            <AnimatedWaterDrop size={20} color="text-white" animate={false} />
            <span>Request Custom Solution</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
