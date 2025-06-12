import { Utensils } from "lucide-react";

export const Restaurant = () => (
  <section className="py-20 bg-white">
    <div className="luxury-container flex flex-col-reverse md:flex-row items-center gap-12 animate-fade-in">
      <div className="md:w-1/2 text-center md:text-left">
        <div className="inline-flex items-center mb-4">
          <Utensils size={30} className="text-[var(--gold)] mr-3" />
          <h2 className="text-[var(--gold)] text-sm tracking-wider font-semibold">
            RESTAURANT
          </h2>
        </div>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
          Dine &amp; Drinks: A Culinary Journey
        </h3>
        <p className="text-navy/70 text-lg leading-relaxed mb-2">
          Discover a world of flavors at our signature restaurant, where
          celebrated chefs craft exquisite dishes with a blend of local charm
          and international flair.
        </p>
        <p className="text-navy/70">
          Enjoy gourmet breakfasts, elegant afternoon teas, and candlelit
          dinners alongside a selection of fine wines and craft cocktails—all
          served in an atmosphere of understated luxury.
        </p>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fine Dining at Hotel"
          className="rounded-xl shadow-lg w-full object-cover h-72 md:h-96"
        />
      </div>
    </div>
  </section>
);
