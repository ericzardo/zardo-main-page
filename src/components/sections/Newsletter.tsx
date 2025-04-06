import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { ArrowRight } from "lucide-react";

import { Input } from "@zardo/ui-kit";

import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas/newsletter";


const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    mode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      
      toast.success('Successfully subscribed to our newsletter!', {
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
      reset({ email: '' }, { 
        keepValues: false,
        keepDefaultValues: true,
        keepErrors: false,
        keepDirty: false,
        keepIsSubmitted: false,
        keepTouched: false,
        keepIsValid: false,
        keepSubmitCount: false
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast.error('Failed to subscribe. Please try again later.', {
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
    <section className="relative py-16 md:py-24 bg-brand-offwhite overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <div className="relative w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {/* Video Background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/10915129/10915129-hd_3840_2160_30fps.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-brand-navy opacity-70" />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col gap-4 items-center justify-center text-white py-4 px-8 md:px-6 md:py-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-none">Be in the know first!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md" noValidate>
              <div className="relative flex">
                <Input
                  type="email"
                  id="newsletter-email"
                  placeholder="connor@example.com"
                  variant="glass"
                  error={!!errors.email}
                  message={errors.email?.message}
                  {...register('email')}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-purple text-sm rounded-full hover:scale-95 transition-transform duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="size-5 text-brand-lavender" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
