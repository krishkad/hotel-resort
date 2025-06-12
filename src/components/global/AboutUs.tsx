import { Users } from "lucide-react";

export const AboutUs = () => (
  <section className="bg-[var(--ivory)] py-20">
    <div className="luxury-container flex flex-col md:flex-row items-center gap-12 animate-fade-in">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hotel Living Room"
          className="rounded-xl shadow-lg w-full object-cover h-72 md:h-96"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center mb-4">
          <Users size={32} className="text-[var(--gold)] mr-3" />
          <h2 className="text-[var(--gold)] text-sm tracking-wider font-semibold">
            ABOUT US
          </h2>
        </div>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
          Where Heritage Meets Hospitality
        </h3>
        <p className="text-navy/70 text-lg leading-relaxed mb-2">
          Gilded Haven Retreats blends timeless elegance with modern comfort,
          offering a curated experience in luxury hospitality. Our legacy is
          built on passion for personal service, extraordinary architecture, and
          creating unforgettable moments for every guest.
        </p>
        <p className="text-navy/70">
          From our stunning lobby to every room and personal interaction, we
          invite you to feel the warmth of hospitality and embrace a world where
          your satisfaction is our greatest honor.
        </p>
      </div>
    </div>
  </section>
);
