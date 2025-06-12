import { AboutUs } from "@/components/global/AboutUs";
import { Amenities } from "@/components/global/Amenities";
import { BookingSection } from "@/components/global/BookingSection";
import { ContactUs } from "@/components/global/ContactUs";
import { Footer } from "@/components/global/Footer";
import { Gallery } from "@/components/global/Gallery";
import { Hero } from "@/components/global/Hero";
import { Navbar } from "@/components/global/Navbar";
import { Restaurant } from "@/components/global/Restaurant";
import { RoomCategories } from "@/components/global/RoomCategories";
import { SpaSection } from "@/components/global/Spa";
import { Testimonials } from "@/components/global/Testimonials";

export default function Home() {
  return (
     <main className="min-h-screen relative">
      <Navbar />
      <div className="content-container">
        <Hero />
        <BookingSection />
        <AboutUs />
        <RoomCategories />
        <Gallery />
        <Restaurant />
        <SpaSection />
        <Testimonials />
        <Amenities />
        <ContactUs />
        <Footer />
      </div>
    </main>
  );
}
