
import { Phone, Mail, MapPin, Users } from "lucide-react";

export const ContactUs = () => (
  <section className="py-20 bg-white">
    <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-14 animate-fade-in">
      <div>
        <div className="inline-flex items-center mb-4">
          <Users size={28} className="text-[var(--gold)] mr-3" />
          <h2 className="text-[var(--gold)] text-sm tracking-wider font-semibold">CONTACT US</h2>
        </div>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
          We&apos;d Love to Hear from You
        </h3>
        <ul className="space-y-5 text-navy text-lg mt-8">
          <li className="flex items-center">
            <MapPin size={20} className="text-[var(--gold)] mr-3 flex-shrink-0" />
            1234 Luxury Avenue, Prestige District, New York, NY 10001
          </li>
          <li className="flex items-center">
            <Phone size={20} className="text-[var(--gold)] mr-3 flex-shrink-0" />
            <a href="tel:+12345678900" className="hover:text-[var(--gold)] underline-offset-2 transition-colors">+1 (234) 567-8900</a>
          </li>
          <li className="flex items-center">
            <Mail size={20} className="text-[var(--gold)] mr-3 flex-shrink-0" />
            <a href="mailto:info@gildedhaven.com" className="hover:text-[var(--gold)] underline-offset-2 transition-colors">info@gildedhaven.com</a>
          </li>
        </ul>
      </div>
      <div>
        <form className="bg-ivory p-8 rounded-lg shadow-lg flex flex-col gap-5 animate-fade-in">
          <input
            type="text"
            className="bg-white border border-gold/40 rounded px-5 py-3 text-navy focus:ring-gold outline-none"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="bg-white border border-gold/40 rounded px-5 py-3 text-navy focus:ring-gold outline-none"
            placeholder="Your Email"
            required
          />
          <textarea
            rows={4}
            className="bg-white border border-gold/40 rounded px-5 py-3 text-navy focus:ring-gold outline-none"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-navy font-medium py-3 px-6 rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);
