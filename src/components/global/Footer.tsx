import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--navy-dark)] text-white">
      {/* Newsletter section */}
      <div className="border-b border-white/10">
        <div className="luxury-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-semibold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/70">
                Be the first to receive exclusive offers and updates on special
                events.
              </p>
            </div>

            <div>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Your Email Address"
                  className="bg-navy border-white/20 text-white placeholder:text-white/50 focus-visible:ring-gold"
                  required
                />
                <Button
                  type="submit"
                  className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-navy font-medium whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h2 className="font-playfair text-xl font-bold mb-6">
              Gilded Haven
            </h2>
            <p className="text-white/70 mb-6">
              Experience the pinnacle of luxury hospitality where every detail
              is crafted to create unforgettable memories and exceptional
              comfort.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-[var(--gold)] transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors fancy-underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/rooms"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors fancy-underline"
                >
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a
                  href="/dining"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors fancy-underline"
                >
                  Dining
                </a>
              </li>
              <li>
                <a
                  href="/wellness"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors fancy-underline"
                >
                  Spa & Wellness
                </a>
              </li>
              <li>
                <a
                  href="/offers"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors fancy-underline"
                >
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-[var(--gold)] mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-white/70">
                  1234 Luxury Avenue, Prestige District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-[var(--gold)] mr-3 flex-shrink-0"
                />
                <a
                  href="tel:+12345678900"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="text-[var(--gold)] mr-3 flex-shrink-0"
                />
                <a
                  href="mailto:info@gildedhaven.com"
                  className="text-white/70 hover:text-[var(--gold)] transition-colors"
                >
                  info@gildedhaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Working Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/70">Check-in:</span>
                <span className="text-white">3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Check-out:</span>
                <span className="text-white">12:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Reception:</span>
                <span className="text-white">24/7</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Restaurant:</span>
                <span className="text-white">6:30 AM - 10:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Spa:</span>
                <span className="text-white">9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="luxury-container py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gilded Haven Retreats. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-white/50 hover:text-[var(--gold)] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[var(--gold)] text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[var(--gold)] text-sm transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
