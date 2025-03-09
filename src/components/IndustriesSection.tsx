
import React from 'react';
import { Building, UtensilisCrossed, Stethoscope, Shirt, Flask, Hotel, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ title, icon, description, className }) => {
  return (
    <div className={cn(
      "glass-card p-6 h-full transition-all duration-300 hover:shadow-md group",
      className
    )}>
      <div className="rounded-full h-14 w-14 bg-icon-blue-100/80 text-icon-blue-600 flex items-center justify-center mb-4 group-hover:bg-icon-blue-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-2">{title}</h3>
      <p className="text-icon-gray-700">{description}</p>
    </div>
  );
};

const industries = [
  {
    title: "Municipal Water Supply",
    icon: <Building className="h-6 w-6" />,
    description: "Clean, safe drinking water systems for communities and public infrastructure."
  },
  {
    title: "Food & Beverage",
    icon: <UtensilisCrossed className="h-6 w-6" />,
    description: "Ultra-pure water solutions for food processing, breweries, and beverage production."
  },
  {
    title: "Pharmaceuticals",
    icon: <Stethoscope className="h-6 w-6" />,
    description: "High-purity water systems meeting strict pharmaceutical manufacturing standards."
  },
  {
    title: "Textiles",
    icon: <Shirt className="h-6 w-6" />,
    description: "Specialized water treatment for dyeing, washing, and processing in textile manufacturing."
  },
  {
    title: "Chemical Industry",
    icon: <Flask className="h-6 w-6" />,
    description: "Industrial-grade water solutions for chemical processes and manufacturing needs."
  },
  {
    title: "Hospitality",
    icon: <Hotel className="h-6 w-6" />,
    description: "Water treatment systems for hotels, resorts, and commercial properties."
  }
];

const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-icon-blue-50/50 relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-title max-w-3xl mx-auto">
          <div className="section-title-chip mx-auto text-center">
            Industries We Serve
          </div>
          <h2 className="text-center text-icon-gray-900 mb-4">
            <span className="text-icon-blue-600">Tailored Solutions</span> For Every Sector
          </h2>
          <p className="text-center text-icon-gray-700 max-w-2xl mx-auto">
            Our water treatment systems are designed to meet the unique requirements of diverse industries, delivering performance and reliability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.title}
              title={industry.title}
              icon={industry.icon}
              description={industry.description}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        <div className="mt-16 p-6 glass-card bg-white/70 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="rounded-full h-16 w-16 bg-icon-blue-500 text-white flex items-center justify-center flex-shrink-0">
              <Building2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-2">Custom Industry Solutions</h3>
              <p className="text-icon-gray-700 mb-2">
                Don't see your industry? We create custom water treatment systems for specialized needs across all sectors, adapting our technology to your unique requirements.
              </p>
              <a href="#contact" className="text-icon-blue-600 font-medium hover:underline">Contact us for a tailored solution</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
