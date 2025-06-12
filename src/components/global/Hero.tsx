import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="animate-fade-up">
          <h2 className="text-[var(--gold)] font-medium tracking-wider mb-2">
            WELCOME TO GILDED HAVEN
          </h2>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
            Experience Timeless Luxury
          </h1>
          <p className="max-w-xl mx-auto text-lg mb-8 text-white/90">
            Where elegance meets extraordinary service. An exclusive sanctuary
            for the most discerning travelers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <Button className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white font-medium text-base px-8 py-6">
              Book Now
            </Button>
            <Button className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/40 text-lg px-8 py-6">
              Explore
            </Button>
          </div>
        </div>
        {/* Booking Section moved to its own section below */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/80 text-sm mb-2">Scroll</span>
        <svg
          className="w-6 h-6 text-white/80"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};
