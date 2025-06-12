
import { Button } from "@/components/ui/button";
import { Hotel, Smile, Utensils } from "lucide-react";

const amenities = [
  {
    id: 1,
    title: "Fine Dining",
    description: "Experience culinary excellence with our award-winning chefs creating exceptional dishes from the finest ingredients.",
    icon: Utensils,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/dining"
  },
  {
    id: 2,
    title: "Premium Spa",
    description: "Rejuvenate your body and mind with our curated spa treatments featuring luxury products and skilled therapists.",
    icon: Smile,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    link: "/wellness"
  },
  {
    id: 3,
    title: "Event Spaces",
    description: "Host unforgettable events in our elegant venues with bespoke services tailored to your specific needs.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1798&q=80",
    link: "/banquet"
  }
];

export const Amenities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="text-[var(--gold)] text-sm tracking-wider mb-2">EXPERIENCES</h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy">Hotel Highlights</h3>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-navy/70 mt-4">
            Discover the exceptional amenities and services that define the Gilded Haven experience, each crafted to exceed your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {amenities.map((amenity) => (
            <div 
              key={amenity.id} 
              className="animate-fade-up"
              style={{ animationDelay: `${amenity.id * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-lg group h-72 mb-6">
                <img 
                  src={amenity.image} 
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--navy-dark)]/30 group-hover:bg-[var(--navy-dark)]/40 transition-colors duration-300"></div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gold/10 rounded-md mr-4">
                  <amenity.icon size={24} className="text-[var(--gold)] " />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-navy">{amenity.title}</h4>
              </div>
              
              <p className="text-navy/70 mb-4">{amenity.description}</p>
              
              <a 
                href={amenity.link}
                className="inline-block text-[var(--gold)] hover:text-[var(--gold)] dark fancy-underline transition-colors"
              >
                Discover More
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white">
            Explore All Amenities
          </Button>
        </div>
      </div>
    </section>
  );
};
