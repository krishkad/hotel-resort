"use client"
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Roberts",
    role: "Business Executive",
    quote: "An unparalleled experience of luxury and attention to detail. The staff anticipated our every need before we even realized them ourselves.",
    avatar: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    id: 2,
    name: "Jonathan Pierce",
    role: "Travel Journalist",
    quote: "As someone who stays at luxury accommodations worldwide, I can confidently say Gilded Haven sets a new benchmark for excellence.",
    avatar: "https://i.pravatar.cc/150?img=65",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "Celebrity Chef",
    quote: "The culinary experience alone is worth the stay. Their commitment to locally-sourced ingredients and innovative presentations is remarkable.",
    avatar: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
  {
    id: 4,
    name: "Marcus Williams",
    role: "Film Director",
    quote: "The perfect blend of classic elegance and modern luxury. Every corner of this property tells a story of impeccable taste.",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 700);
  };

  useEffect(() => {
    // Auto-rotate testimonials
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex]);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 6000);
  };

  return (
    <section className="py-20 bg-[var(--navy-dark)]  text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="luxury-container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-[var(--gold)] text-sm tracking-wider mb-2">TESTIMONIALS</h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white">Guest Experiences</h3>
          <div className="section-divider bg-gold/30"></div>
        </div>

        <div 
          className="max-w-4xl mx-auto px-6 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative overflow-hidden h-[400px]">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-700 ease-in-out",
                  currentIndex === idx ? "opacity-100 translate-x-0" : 
                  currentIndex > idx ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-gold/30 overflow-hidden mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl italic font-light mb-6">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>

                  <p className="text-[var(--gold)] font-playfair text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-[var(--gold)] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={36} />
          </button>

          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white/70 hover:text-[var(--gold)] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={36} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 700);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentIndex === idx ? "bg-[var(--gold)] w-6" : "bg-white/30"
                )}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
