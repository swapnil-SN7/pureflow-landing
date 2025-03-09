
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-icon-blue-50/50 relative">
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="section-title max-w-3xl mx-auto">
          <div className="section-title-chip mx-auto text-center">
            Get In Touch
          </div>
          <h2 className="text-center text-icon-gray-900 mb-4">
            Contact <span className="text-icon-blue-600">Icon Water Engineering</span>
          </h2>
          <p className="text-center text-icon-gray-700 max-w-2xl mx-auto">
            Reach out to our team for inquiries, quotes, or to discuss your water treatment needs. We're here to provide expert solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Contact form */}
          <div className="glass-card p-6 md:p-8 order-2 lg:order-1">
            <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-6 flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-icon-blue-600" />
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-icon-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-icon-gray-200 bg-white/70 px-4 py-2.5 text-icon-gray-900 focus:border-icon-blue-500 focus:ring-2 focus:ring-icon-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-icon-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-icon-gray-200 bg-white/70 px-4 py-2.5 text-icon-gray-900 focus:border-icon-blue-500 focus:ring-2 focus:ring-icon-blue-200 outline-none transition"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-icon-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-icon-gray-200 bg-white/70 px-4 py-2.5 text-icon-gray-900 focus:border-icon-blue-500 focus:ring-2 focus:ring-icon-blue-200 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-icon-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-icon-gray-200 bg-white/70 px-4 py-2.5 text-icon-gray-900 focus:border-icon-blue-500 focus:ring-2 focus:ring-icon-blue-200 outline-none transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Request Quotation">Request Quotation</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="After-Sales Service">After-Sales Service</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-icon-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-icon-gray-200 bg-white/70 px-4 py-2.5 text-icon-gray-900 focus:border-icon-blue-500 focus:ring-2 focus:ring-icon-blue-200 outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "glass-button w-full flex items-center justify-center",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact information */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-xl font-display font-bold text-icon-gray-900 mb-2">
              Contact Information
            </h3>
            <p className="text-icon-gray-700">
              Reach out to us directly through the following channels or use the form to send us a detailed message.
            </p>
            
            <div className="space-y-5 mt-8">
              <div className="glass-card p-5 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-icon-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-icon-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-icon-gray-900 mb-1">Email Us</h4>
                  <a href="mailto:iconwaterengineering@gmail.com" className="text-icon-blue-600 hover:underline block">
                    iconwaterengineering@gmail.com
                  </a>
                  <a href="mailto:wtpanil84@gmail.com" className="text-icon-blue-600 hover:underline block">
                    wtpanil84@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-5 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-icon-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-icon-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-icon-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+918888682388" className="text-icon-blue-600 hover:underline block">
                    +91 8888682388
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-5 flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-icon-blue-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-icon-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium text-icon-gray-900 mb-1">Visit Us</h4>
                  <p className="text-icon-gray-700 text-sm">
                    <strong>Registered Office:</strong><br />
                    Flat No. 1402, B-2, Raunak City, Wadeghar, Sector-2, Adharwadi Jail Road, Kalyan West, Thane, Maharashtra, India - 421301
                  </p>
                </div>
              </div>
            </div>
            
            {/* Business hours */}
            <div className="mt-8 glass-card p-5 bg-gradient-to-br from-icon-blue-50/90 to-white/90">
              <h4 className="font-medium text-icon-gray-900 mb-3">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-icon-gray-700">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-icon-gray-700">Saturday</span>
                  <span className="font-medium">9:00 AM - 3:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-icon-gray-700">Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
