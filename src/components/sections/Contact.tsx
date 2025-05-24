"use client";

import Link from "next/link";
import { useState, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { CalendarDays, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useTranslation } from "react-i18next";

import { Input, Button } from "@zardo/ui-kit";
import { SectionTransition } from "@zardo/ui-kit/animations";
import { PatternBackground } from "@zardo/ui-kit/layout";

import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null); 
  const { t } = useTranslation("contact");
  const { t: tHome } = useTranslation("home");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const schema = useMemo(
    () => contactSchema({
      'name.tooShort': t('validation.name.tooShort'),
      'name.tooLong': t('validation.name.tooLong'),
      'email.invalid': t('validation.email.invalid'),
      'message.tooShort': t('validation.message.tooShort'),
      'message.tooLong': t('validation.message.tooLong'),
    }),
    [t]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
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
        toast.success(t("form.successMessage"));
        reset();
      } else {
        throw new Error('Failed');
      }
    } catch {
      toast.error(t("form.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-brand-offwhite" id="contact">
      <PatternBackground variant="three-blobs" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12">
          <SectionTransition direction="left">
            <div className="flex flex-col text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
                {t("title")}
              </h2>

              <p className="text-lg text-brand-navy/70 mb-8 max-w-md">
                {t("description")}
              </p>

              <div className="flex">
                {/* Email */}
                <div className="flex items-center mb-8">
                  <Link href="mailto:contact@zardo.dev" className="bg-brand-lavender/30 p-3 rounded-lg mr-4 cursor-pointer hover:scale-90 duration-200 ease-out">
                    <Mail className="h-6 w-6 text-brand-purple" />
                  </Link>
                  {/* <div>
                    <h4 className="text-sm font-semibold text-brand-navy">{t("emailLabel")}</h4>
                    <Link
                      href="mailto:contact@zardo.dev"
                      className="mail-link text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    >
                      contact@zardo.dev
                    </Link>
                  </div> */}
                </div>

                {/* LinkedIn */}
                <div className="flex items-center mb-8">
                  <Link
                    href="https://www.linkedin.com/company/zardo-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-lavender/30 p-3 rounded-lg mr-4 cursor-pointer hover:scale-90 duration-200 ease-out"
                  >
                    <Linkedin className="h-6 w-6 text-brand-purple" />
                  </Link>
                  {/* <div>
                    <h4 className="text-sm font-semibold text-brand-navy">LinkedIn</h4>
                    <Link
                      href="https://www.linkedin.com/company/zardo-dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    >
                      zardo.dev
                    </Link>
                  </div> */}
                </div>

                {/* Instagram */}
                <div className="flex items-center mb-8">
                  <Link
                    href="https://www.instagram.com/zardo.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-lavender/30 p-3 rounded-lg mr-4 cursor-pointer hover:scale-90 duration-200 ease-out"
                  >
                    <Instagram className="h-6 w-6 text-brand-purple" />
                  </Link>
                  {/* <div>
                    <h4 className="text-sm font-semibold text-brand-navy">Instagram</h4>
                    <Link
                      href="https://www.instagram.com/zardo.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link text-brand-navy/70 hover:text-brand-purple transition-colors cursor-pointer"
                    >
                      zardo.dev
                    </Link>
                  </div> */}
                </div>
              </div>

              <div className="mt-auto flex gap-2 md:gap-4 sm:flex-row flex-col">
                {/* Booking Page Button */}
                <Link href="/booking">
                  <Button className="w-fit">
                    <CalendarDays className="h-5 w-5 text-brand-lavender" />
                    {tHome("consultancy.labelText")}
                  </Button>
                </Link>

                {/* WhatsApp Button */}
                <Link  
                  href={t("whatsappLink")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link flex items-center gap-2"
                >
                  <Button variant="outline" className="w-fit">
                    <SiWhatsapp className="h-5 w-5 text-green-500" />
                    {t("whatsapp")}
                  </Button>
                </Link>
              </div>
            </div>
          </SectionTransition>

          {/* Form */}
          <SectionTransition direction="right">
            <div className="bg-white/50 border border-white/30 rounded-lg shadow-md p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-xl"></div>

              <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1">
                    {t("form.name")}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder={t("form.placeholderName")}
                    error={!!errors.name}
                    message={errors.name?.message}
                    {...register('name')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1">
                    {t("form.email")}
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder={t("form.placeholderEmail")}
                    error={!!errors.email}
                    message={errors.email?.message}
                    {...register('email')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-500' : 'border-brand-lavender/50'
                    } focus:outline-none focus:border-brand-purple bg-white/70 resize-none`}
                    placeholder={t("form.placeholder")}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                      }
                    }}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label={isSubmitting ? t("form.sending") : t("form.send")}
                    aria-busy={isSubmitting}  
                    className="contact-submit w-full md:w-auto"
                  >
                    {isSubmitting ? t("form.sending") : t("form.send")}
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
