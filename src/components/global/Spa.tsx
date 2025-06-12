
import { Bath } from "lucide-react";

export const SpaSection = () => (
  <section className="py-20 bg-[var(--ivory)]">
    <div className="luxury-container flex flex-col md:flex-row items-center gap-12 animate-fade-in">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1611920630418-f587fdc3bf94?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Luxury Spa"
          className="rounded-xl shadow-lg w-full object-cover h-72 md:h-96"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center mb-4">
          <Bath size={32} className="text-[var(--gold)] mr-3" />
          <h2 className="text-[var(--gold)] text-sm tracking-wider font-semibold">SPA & WELLNESS</h2>
        </div>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
          Serenity Awaits in Our Spa
        </h3>
        <p className="text-navy/70 text-lg leading-relaxed mb-2">
          Indulge in rejuvenating spa rituals, soothing massages, and holistic wellness therapies in a tranquil sanctuary designed to restore body and spirit. 
        </p>
        <p className="text-navy/70">
          Our skilled therapists and luxury facilities promise a transformative experience, tailored to your every need.
        </p>
      </div>
    </div>
  </section>
);
