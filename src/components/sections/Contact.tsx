"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import SectionTransition from "../ui/SectionTransition";
import PatternBackground from "../ui/PatternBackground";
import Button from "../ui/Button";
import { Instagram, Linkedin, Mail, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
  
    if (res.ok) {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus("error");
    }
  
    setIsSubmitting(false);
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
                    aria-label="Send an email to contact@zardo.tech"
                    title="Send email to contact@zardo.tech"
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
                    aria-label="Send an email to contact@zardo.tech"
                    title="Send email to contact@zardo.tech"
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
                  <Button variant="secondary" className="w-fit" aria-label="">
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

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70"
                    placeholder="Jack Connor"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70"
                    placeholder="jack@example.com"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-brand-lavender/50 focus:outline-none focus:border-brand-purple bg-white/70 resize-none"
                    placeholder="Type your message here..."
                    required
                    aria-required="true"
                  ></textarea>
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

                {submitStatus && (
                  <div className="mt-4 text-center text-lg text-green-500">
                    {submitStatus === "success" ? "Your message was sent successfully!" : "Something went wrong, please try again."}
                  </div>
                )}
              </form>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Contact;
