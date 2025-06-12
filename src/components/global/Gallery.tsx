const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1574017121722-2c8ead5a7e90?q=80&w=1617&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Elegant hotel suite",
  },
  {
    src: "https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern hotel room with amenities",
  },
  {
    src: "https://images.unsplash.com/photo-1592899940134-3161736713c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Scenic nature activities",
  },
  {
    src: "https://images.unsplash.com/photo-1679947096495-881433436c39?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Hotel wellness spa",
  },
];

export const Gallery = () => (
  <section className="py-20 bg-[var(--ivory)]">
    <div className="luxury-container">
      <div className="text-center mb-12">
        <h2 className="text-[var(--gold)] text-sm tracking-wider mb-2">
          GALLERY
        </h2>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy">
          Moments of Elegance
        </h3>
        <div className="section-divider"></div>
        <p className="max-w-xl mx-auto text-navy/70 mt-4">
          Explore our stunning visual story—every detail is designed to inspire
          an experience beyond expectation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up">
        {galleryImages.map((img, idx) => (
          <div
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
            key={idx}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
