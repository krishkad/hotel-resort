"use client"
import * as React from "react";
import { format } from "date-fns";
import { CalendarDays, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const BookingSection = () => {
  const [checkIn, setCheckIn] = React.useState<Date>();
  const [checkOut, setCheckOut] = React.useState<Date>();
  const [roomType, setRoomType] = React.useState<string>("suite");
  const [guests, setGuests] = React.useState<number>(2);

  function handleCheckAvailability(e: React.FormEvent) {
    e.preventDefault();
    // In a real app, add custom logic or routing here.
    alert(
      `Checking availability for:\nRoom: ${roomType}\nGuests: ${guests}\nCheck-in: ${checkIn ? format(checkIn, "PPP") : "-"}\nCheck-out: ${checkOut ? format(checkOut, "PPP") : "-"}`
    );
  }

  return (
    <section
      className="relative w-full py-14 px-2 md:px-0 bg-gradient-to-br from-navy-dark via-navy to-navy/80 bg-blur-xl"
      style={{
        background:
          "linear-gradient(120deg, rgba(10,20,40,0.98) 65%, rgba(64,82,108,0.87) 100%)",
        // Optional glassmorphism/gloss
        backdropFilter: "blur(8px)",
        boxShadow: "0 6px 32px 0 rgba(0,0,0,0.21)",
      }}
    >
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[var(--gold)] drop-shadow mb-2">
          Check Availability
        </h2>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">
          Book your stay at Gilded Haven – select your dates, room, and number of guests below.
        </p>
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl bg-white/10 p-5 md:p-8 backdrop-blur-lg shadow-xl"
        onSubmit={handleCheckAvailability}
      >
        {/* Check-in */}
        <div>
          <Label className="text-[var(--gold)] mb-1 block">Check-In</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white/80 text-navy hover:bg-gold/10"
              >
                <CalendarDays className="mr-2 h-5 w-5 text-[var(--gold)] " />
                {checkIn ? format(checkIn, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={date => !!checkOut && date > checkOut}
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* Check-out */}
        <div>
          <Label className="text-[var(--gold)] mb-1 block">Check-Out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal bg-white/80 text-navy hover:bg-gold/10"
              >
                <CalendarCheck className="mr-2 h-5 w-5 text-[var(--gold)] " />
                {checkOut ? format(checkOut, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                className="p-3 pointer-events-auto"
                disabled={date => !!checkIn && date < checkIn}
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* Room Type */}
        <div>
          <Label className="text-[var(--gold)] mb-1 block">Room Type</Label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger className="w-full bg-white/80 text-navy border-gold focus:ring-gold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="suite">Luxury Suite</SelectItem>
              <SelectItem value="deluxe">Deluxe Room</SelectItem>
              <SelectItem value="standard">Standard Room</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {/* Guests */}
        <div>
          <Label className="text-[var(--gold)] mb-1 block">Guests</Label>
          <Input
            type="number"
            min={1}
            max={6}
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="bg-white/80 text-navy border-gold"
          />
        </div>
        {/* Submit button (spans all columns) */}
        <div className="col-span-1 md:col-span-4 mt-3">
          <Button
            type="submit"
            className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-navy font-bold w-full text-lg shadow-lg py-5 transition"
          >
            Check Availability
          </Button>
        </div>
      </form>
    </section>
  );
};

