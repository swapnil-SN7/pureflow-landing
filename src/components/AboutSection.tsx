
import React from 'react';
import { Award, CheckCircle2, CalendarDays, MapPin } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-title max-w-3xl mx-auto">
          <div className="section-title-chip mx-auto text-center">
            About Us
          </div>
          <h2 className="text-center text-icon-gray-900 mb-4">
            Engineering Excellence With <span className="text-icon-blue-600">Icon Water</span>
          </h2>
          <p className="text-center text-icon-gray-700 max-w-2xl mx-auto">
            A trusted manufacturer, distributor, and exporter of premium water treatment solutions with a commitment to quality and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {/* Company story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-bold text-icon-gray-900">Our Story</h3>
            <div className="space-y-4">
              <p>
                Icon Water Engineering was founded with a mission to provide innovative water treatment solutions that meet the highest standards of quality and efficiency. As specialists in water purification technology, we've established ourselves as industry leaders through continuous innovation and technical excellence.
              </p>
              <p>
                Our comprehensive range of water treatment systems serves diverse industries across India and international markets. With state-of-the-art manufacturing facilities and a team of experienced engineers, we deliver customized solutions that address specific water challenges.
              </p>
            </div>
            
            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-card p-4 text-center">
                <AnimatedCounter 
                  end={15} 
                  suffix="+"
                  className="text-3xl text-icon-blue-600"
                />
                <p className="text-sm text-icon-gray-700 mt-1">Years Experience</p>
              </div>
              <div className="glass-card p-4 text-center">
                <AnimatedCounter 
                  end={1000} 
                  suffix="+"
                  className="text-3xl text-icon-blue-600"
                />
                <p className="text-sm text-icon-gray-700 mt-1">Projects Completed</p>
              </div>
              <div className="glass-card p-4 text-center">
                <AnimatedCounter 
                  end={25} 
                  suffix="+"
                  className="text-3xl text-icon-blue-600"
                />
                <p className="text-sm text-icon-gray-700 mt-1">Countries Served</p>
              </div>
              <div className="glass-card p-4 text-center">
                <AnimatedCounter 
                  end={100} 
                  suffix="%"
                  className="text-3xl text-icon-blue-600"
                />
                <p className="text-sm text-icon-gray-700 mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          {/* Certifications and location */}
          <div className="space-y-8">
            {/* Certification */}
            <div className="glass-card p-6 bg-gradient-to-br from-icon-blue-50/90 to-white/90">
              <div className="flex items-start gap-4">
                <Award className="h-10 w-10 text-icon-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-2">Certified Excellence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-icon-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Certificate No:</span> 24DQMQ32
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-icon-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Registration Date:</span> 29/02/2024
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-icon-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Expiry Date:</span> 27/02/2027
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CalendarDays className="h-5 w-5 text-icon-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">ISO Certified:</span> Quality Management Systems
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-display font-bold text-icon-gray-900">Our Locations</h3>
              
              <div className="glass-card p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-icon-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-icon-gray-900">Registered Office</h4>
                    <p className="text-sm text-icon-gray-700">
                      Flat No. 1402, B-2, Raunak City, Wadeghar, Sector-2, Adharwadi Jail Road, Kalyan West, Thane, Maharashtra, India - 421301
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-icon-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-icon-gray-900">Plant Address</h4>
                    <p className="text-sm text-icon-gray-700">
                      Godown No. 01, House No. 1874/4, Kon-Bhiwandi Road, Near Ice Factory, At/Post-Kon, Tal-Bhiwandi, Dist-Thane, Maharashtra, India - 421311
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
