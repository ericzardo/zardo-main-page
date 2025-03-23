import PatternBackground from "@/components/ui/PatternBackground";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from 'react-hot-toast';
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
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to handle the subscription
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
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
      reset();
    } catch {
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
      <PatternBackground variant="circuit" opacity={0.2} />
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
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-brand-lavender/50'
                  } focus:outline-none focus:border-brand-purple bg-white placeholder:text-brand-navy/50 text-brand-navy shadow-md backdrop-blur-sm`}
                  placeholder="connor@example.com"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-purple text-sm rounded-full hover:bg-brand-purple/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ArrowRight className="size-5 text-brand-lavender" />
                </button>
              </div>
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
