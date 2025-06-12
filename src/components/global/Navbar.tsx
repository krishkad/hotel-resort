"use client";
import { useState, useEffect } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
  { name: "Dine & Drinks", path: "/dining" },
  { name: "Banquet", path: "/banquet" },
  { name: "Activities", path: "/activities" },
  { name: "Wellness", path: "/wellness" },
  { name: "Offers", path: "/offers" },
  { name: "Media", path: "/media" },
  { name: "Contact Us", path: "/contact" },
  { name: "Career", path: "/career" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-sm py-4"
          : "bg-transparent py-4"
      )}
    >
      <div className="luxury-container flex justify-between items-center">
        <Link href="/" className="z-50 group">
          <div
            className={cn(
              "flex items-center gap-3 transition-transform duration-300 hover:transform hover:scale-105",
              isScrolled ? "text-navy" : "text-white"
            )}
          >
            <Mountain
              className={cn(
                "w-10 h-10 transition-colors",
                isScrolled ? "text-[var(--gold)]" : "text-[var(--gold-light)]"
              )}
            />
            <div className="flex flex-col items-start">
              <h1
                className={cn(
                  "font-playfair font-bold text-base tracking-wider leading-tight",
                  isScrolled ? "text-navy" : "text-white",
                  "border-b-2 border-transparent group-hover:border-gold transition-all duration-300"
                )}
              >
                Paramount Riverfront
              </h1>
              <h2
                className={cn(
                  "font-playfair text-sm tracking-wider ml-1",
                  isScrolled ? "text-navy/70" : "text-white/80",
                  "transition-all duration-300 group-hover:text-[var(--gold)] "
                )}
              >
                Resort, Spa, Karjat
              </h2>
            </div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "fancy-underline text-sm font-medium transition-colors",
                isScrolled
                  ? "text-navy-light hover:text-navy-dark"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-navy font-medium ml-4">
            Book Now
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className={cn(
                "lg:hidden p-2 z-50",
                isScrolled ? "text-navy" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            aria-describedby={undefined}
            side="right"
            className="w-full p-0 bg-white border-none"
          >
            <VisuallyHidden>
              <SheetHeader>
                <SheetTitle>title</SheetTitle>
                <SheetDescription>description</SheetDescription>
              </SheetHeader>
            </VisuallyHidden>
            <div className="flex flex-col h-full">
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="font-playfair font-bold text-xl text-navy">
                  GILDED HAVEN
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-navy"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col space-y-6">
                  {NavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="text-navy text-lg hover:text-[var(--gold)] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button
                    className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-navy font-medium w-full mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
