"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
import SectionTransition from "../ui/SectionTransition";
import PatternBackground from "../ui/PatternBackground";
import Button from "../ui/Button";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onSubmit', // Valida apenas no submit
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    
      if (res.ok) {
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          duration: 5000,
          position: 'top-center',
          style: {
            background: '#ffffff',
            color: '#1a1a1a',
            borderRadius: '16px',
            padding: '16px 24px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            border: '1px solid rgba(163, 62, 245, 0.1)',
            fontSize: '14px',
            fontWeight: '500',
          },
          iconTheme: {
            primary: '#22c55e',
            secondary: '#ffffff',
          },
        });
        reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#ffffff',
          color: '#1a1a1a',
          borderRadius: '16px',
          padding: '16px 24px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.1)',
          fontSize: '14px',
          fontWeight: '500',
        },
        iconTheme: {
          primary: '#ef4444',
          secondary: '#ffffff',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite" id="contact">
      <PatternBackground variant="circuit" opacity={0.2} />
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-purpleDark/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <SectionTransition direction="left">
            <div className="flex flex-col text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                Get in touch
              </h2>

              <p className="text-lg text-brand-navy/70 mb-8 max-w-md">
                Got an idea? Reach out to discuss how we can turn it into a digital solution that fits your business needs.
              </p>

              <div className="flex items-center mb-8">
                <div className="bg-brand-lavender/30 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">Email</h4>
                  <Link
                    href="mailto:contact@zardo.tech"
                    className="text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    aria-label="Send an email to contact@zardo.tech"
                    title="Send email to contact@zardo.tech"
                  >
                    contact@zardo.tech
                  </Link>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <div className="bg-brand-lavender/30 p-3 rounded-lg mr-4">
                  <Linkedin className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">LinkedIn</h4>
                  <Link
                    href="#"
                    className="text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    aria-label="Visit our LinkedIn profile"
                    title="Visit our LinkedIn profile"
                  >
                    Zardo Technology
                  </Link>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <div className="bg-brand-lavender/30 p-3 rounded-lg mr-4">
                  <Instagram className="h-6 w-6 text-brand-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-navy">Instagram</h4>
                  <Link
                    href="#"
                    className="text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    aria-label="Visit our Instagram profile"
                    title="Visit our Instagram profile"
                  >
                    Zardo Technology
                  </Link>
                </div>
              </div>

              <div className="mt-auto">
                <Link  
                  href="https://wa.link/1v19wx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start a WhatsApp chat with us"
                  className="flex items-center gap-2"
                >
                  <Button variant="secondary" className="w-fit">
                    <SiWhatsapp className="h-5 w-5 text-green-500" />
                    Chat on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </SectionTransition>

          <SectionTransition direction="right">
            <div className="bg-white/50 border border-white/30 rounded-lg shadow-md p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? 'border-red-500' : 'border-brand-lavender/50'
                    } focus:outline-none focus:border-brand-purple bg-white/70`}
                    placeholder="Jack Connor"
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-brand-lavender/50'
                    } focus:outline-none focus:border-brand-purple bg-white/70`}
                    placeholder="jack@example.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-brand-lavender/50'
                    } focus:outline-none focus:border-brand-purple bg-white/70 resize-none`}
                    placeholder="Type your message here..."
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? "Sending your message" : "Send your message"}
                    aria-busy={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </Button>
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
