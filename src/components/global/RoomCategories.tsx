"use client"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const rooms = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious elegance with city views and premium amenities for the discerning traveler.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    price: "₹14,500",
  },
  {
    id: 2,
    name: "Royal Penthouse",
    description: "The epitome of luxury with panoramic views, private terrace and personalized butler service.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    price: "₹20,000",
  },
  {
    id: 3,
    name: "Executive Room",
    description: "Refined comfort with elegant furnishings and premium bedding for business and leisure travelers.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",
    price: "₹10,500",
  },
  {
    id: 4,
    name: "Family Suite",
    description: "Spacious accommodation with connecting rooms, perfect for creating cherished family memories.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    price: "₹16,000",
  },
];


export const RoomCategories = () => {
  const [hoveredRoom, setHoveredRoom] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[var(--ivory)]">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <h2 className="text-[var(--gold)] text-sm tracking-wider mb-2">ACCOMMODATIONS</h2>
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy">Exquisite Room Selection</h3>
          <div className="section-divider"></div>
          <p className="max-w-2xl mx-auto text-navy/70 mt-4">
            Immerse yourself in the epitome of comfort and elegance with our meticulously designed accommodations, each offering a unique blend of luxury and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {rooms.map((room) => (
            <div 
              key={room.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${room.id * 100}ms` }}
              onMouseEnter={() => setHoveredRoom(room.id)}
              onMouseLeave={() => setHoveredRoom(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className={cn(
                    "w-full h-full object-cover transition-transform duration-700",
                    hoveredRoom === room.id ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute bottom-0 left-0 bg-[var(--gold)] py-1 px-4 font-medium">
                  From {room.price} / night
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-playfair text-xl font-semibold text-navy mb-2">{room.name}</h4>
                <p className="text-navy/70 text-sm mb-4">{room.description}</p>
                <Button variant="outline" className="w-full border-gold text-[var(--gold)] hover:bg-[var(--gold)] hover:text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-[var(--navy)] hover:bg-[var(--navy-light)] text-white">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};
