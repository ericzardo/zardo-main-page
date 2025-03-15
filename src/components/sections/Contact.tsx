import React from 'react';
import { Mail, Send } from 'lucide-react';
import SectionTransition from '../ui/SectionTransition';
import PatternBackground from '../ui/PatternBackground';
import CustomButton from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite" id="contact">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purpleDark/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <SectionTransition direction="left">
            <div className="flex flex-col text-left">
              <span className="inline-block mb-3 px-3 py-1 bg-brand-lavender/30 backdrop-blur-sm rounded-full text-sm font-medium text-brand-purpleDark w-fit">
                Contact us
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                Get in touch
              </h2>
              
              <p className="text-lg text-brand-navy/70 mb-8 max-w-md">
                Got an idea? Reach out to discuss how we can turn it into a digital solution that fits your business needs.
              </p>
              
              <div className="flex items-start mb-8">
                <div className="bg-brand-lavender/30 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy">Email</h4>
                  <a href="mailto:contato@innovate.com" className="text-brand-navy/70 hover:text-brand-purple transition-colors select-text link cursor-pointer">
                    contato@innovate.com
                  </a>
                </div>
              </div>
              
              <div className="mt-auto">
                <CustomButton variant="secondary" className="w-fit">
                  See FAQ
                </CustomButton>
              </div>
            </div>
          </SectionTransition>

          {/* Right Column - Contact Form */}
          <SectionTransition direction="right">
            <div className="bg-white/50 border border-white/30 rounded-lg shadow-md p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70"
                    placeholder="Jack Connor"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70"
                    placeholder="jack@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70 resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                
                <div className='flex justify-end'>
                  <CustomButton type="submit">
                    Send
                    <Send className="ml-2 h-4 w-4" />
                  </CustomButton>
                </div>
              </form>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Contact;